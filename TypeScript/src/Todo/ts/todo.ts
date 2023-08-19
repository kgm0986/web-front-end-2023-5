//, Todo 형태 정의 - 인터페이스
interface Todo {
  todoDate: string;
  todoDateTime: string;
  todoContent: string;
  title:string;
  done:boolean;
}

class TodoEvent {
  private static instance: TodoEvent | null = null;

  public static getInstance(): TodoEvent {
    if (!this.instance) {
      this.instance = new TodoEvent();
    }

    return this.instance;
  }

  public addEventAddTodoClick(): void {
    const addTodoButton: HTMLElement | null = document.querySelector('.add-todo-button');
    // 해당 요소가 존재할 경우 로직 실행
    if (addTodoButton) {
      // 버튼 클릭 이벤트 설정
      addTodoButton.onclick = () => {
        //, TodoService의 인스턴스를 가져와서 addTodo 메서드를 실행(Todo 추가)
        TodoService.getInstance().addTodo();
        const todoInput: HTMLInputElement|null=document.querySelector('.todo-input');
        if (todoInput) {
          todoInput.value='';
        }
      }
    }
  }

  public addEventAddTodoKeyUp(): void {
    const todoInput: HTMLElement | null = document.querySelector('.todo-input');
    // 해당 요소가 존재할 경우 로직 실행
    if (todoInput) {
      // 키보드를 눌렀을 때의 이벤트를 설정
      todoInput.onkeyup = (event: KeyboardEvent) => {
        // 키보드에서 Enter 키를 눌렀을 경우 아래 로직 실행
        if (event.key === "Enter") {
          const addTodoButton: HTMLElement | null = document.querySelector('.add-todo-button');
          // 해당 버튼의 클릭 이벤트 실행
          addTodoButton?.click();
        }
      }
    }
  }

  public addEventRemoveTodoClick(): void {
    const removeButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.content-footer .remove-button');
    // 각 삭제 버튼에 대해 로직을 반복 실행
    removeButtons.forEach((removeButton, index) => {
      // 버튼 클릭 이벤트 설정
      removeButton.onclick = () => {
        // ModalService의 인스턴스를 가져와서 메서드를 사용해 삭제 모달을 표시
        ModalService.getInstance().showRemoveModal(index);
      }
    })

  }

  public addEventModifyTodoClick(): void {
    const modifyButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.content-footer .modify-button');
    // 각 수정 버튼에 대해 로직을 반복 실행
    modifyButtons.forEach((modifyButton, index) => {
      // 버튼 클릭 이벤트 설정
      modifyButton.onclick = () => {
        // ModalService의 인스턴스를 가져와서 메서드를 사용해 수정 모달을 표시
        ModalService.getInstance().showModifyModal(index);
      }
    })
  }

}

class TodoService {
  private static instance: TodoService | null = null;

  public todoList: Todo[];

  public static getInstance(): TodoService {
    if (!this.instance) {
      this.instance = new TodoService();
    }
    return this.instance;
  }

  constructor() {
    // 로컬 스토리지에서 'todoList'키 값을 가져옴.
    const storedTodos: string | null = localStorage.getItem('todoList');

    // 저장된 투두가 있으면 JSON형식으로 파싱,
    // 그렇지 않으면 [] 빈 배열을 할당
    this.todoList = storedTodos ? JSON.parse(storedTodos) : [];

    // 생성 시 todoList를 로드해서 화면에 표시
    this.loadTodoList();
  }

  // 로컬 스토리지를 업데이트하고, todoList를 다시 로드하는 메서드
  public updateLocalStorage(): void {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.loadTodoList();
  }

  // 새로운 Todo 항목을 추가하는 메서드
  public addTodo(): void {
    const todoInput: HTMLInputElement | null = document.querySelector('.todo-input');

    // 입력 값이 없거나, 공백만 있을 경우 - 함수 종료
    if (!todoInput || !todoInput.value.trim()) return;

    // 현재 날짜와 시간 가져오기
    const nowDate: Date = new Date();

    // 숫자로 표시된 요일 값을 문자열로 변환하는 함수
    const convertDay = (day: number): string => {
      switch (day) {
        case 0: return '일';
        case 1: return '월';
        case 2: return '화';
        case 3: return '수';
        case 4: return '목';
        case 5: return '금';
        case 6: return '토';
        default: return "";
      }
    }

    //, Todo 객체 생성
    const todoObj: Todo = {
      todoDate: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`,
      todoDateTime: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`,
      todoContent: todoInput.value,
      title: '',
      done: false
    }

    //, Todo 객체를 todoList 배열에 추가
    this.todoList.push(todoObj);

    // 변경 사항을 로컬 스토리지에 업데이트
    this.updateLocalStorage();
  }

  // 화면에 Todo리스트를 로드하고 표시하는 메서드
  public loadTodoList(): void {
    const todoContentList: HTMLElement | null = document.querySelector('.todo-content-list');

    // 해당 엘리먼트가 없으면 함수 종료
    if (!todoContentList) return;

    // 내부 HTML을 초기화
    todoContentList.innerHTML = ``;

    //, todoList 배열의 각 Todo 객체에 대해 HTML을 생성하고 추가
    this.todoList.forEach(todoObj => {
      todoContentList.innerHTML += `
        <li class='content-container'>
          <div class='content-header'>
            <div class='todo-date'>${todoObj.todoDate}</div>
            <div class='todo-date-time'>${todoObj.todoDateTime}</div>
          </div>
          <div class='content-main'>
            ${todoObj.todoContent}
          </div>
          <div class='content-footer'>
            <button class='modify-button'>
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class='remove-button'>
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      `;
    });

    //, Todo 항목의 수정 및 삭제 버튼에 이벤트 추가
    TodoEvent.getInstance().addEventModifyTodoClick();
    TodoEvent.getInstance().addEventRemoveTodoClick();
  }
}