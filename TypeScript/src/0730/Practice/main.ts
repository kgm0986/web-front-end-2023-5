//, TODO 리스트를 구현하는 실습

type TodoPractice = {
  id: number; // 항목 ID
  text: string; // 항목 내용
  done: boolean; // 항목 완료 상태
}

let todos: TodoPractice[] = [];

// 할 일 리스트 가져오기
async function fetchTodos(): Promise<TodoPractice[]> {
  return new Promise(resolve => {
    // 1초 후 현재 todos 배열을 반환
    setTimeout(() => resolve(todos), 1000);
  })
}

// 할 일 추가
async function addTodo(todoText: string): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      //, TodoPractice 타입의 객체 생성
      const newTodo: TodoPractice = {
        id: Date.now(),
        text: todoText,
        done: false,
      };
      // 생성된 객체를 todos배열에 추가
      todos.push(newTodo);
      resolve();
    }, 1000);
  });
}

// 할 일 삭제
async function deleteTodo(id: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      todos = todos.filter(todo => todo.id !== id);
      resolve();
    }, 1000);
  });
}

// HTML요소를 가져와 이벤트 리스너 등록
const formEl = document.getElementById('todo-form') as HTMLFormElement;
const inputEl = document.getElementById('todo-input') as HTMLInputElement;
const listEl = document.getElementById('todo-list') as HTMLUListElement;

// 할 일을 추가
formEl.addEventListener('submit',async (event) => {
  event.preventDefault();

  const newTodoText = inputEl.value.trim();
  if (newTodoText) {
    await addTodo(newTodoText);
    inputEl.value = '';
    renderTodos();
  }
})

// 할 일 목록을 렌더링
async function renderTodos() {
  // 최신 할 일 목록을 가져옴.
  const todos = await fetchTodos();
  // 현 재 할 일 목록을 초기화 (모든 할 일을 지움)
  listEl.innerHTML = '';

  todos.forEach(todo => {
    // 새로운 'li' HTML 요소 생성
    const listItemEl = document.createElement('li');

    // 새로 생성한 li 요소에 'todo-item' class명 추가
    listItemEl.classList.add('todo-item');

    // li 요소의 텍스트를 현재 할 일의 텍스트로 설정
    listItemEl.textContent = todo.text;

    // 새로운 'button' HTML 요소 생성
    const deleteButton = document.createElement('button');

    // 생성한 버튼의 텍스트를 'Delete'로 설정
    deleteButton.textContent = 'Delete';

    // Delete 버튼에 이벤트 추가(할 일 삭제)
    deleteButton.addEventListener('click', async () => {
      await deleteTodo(todo.id);
      // 삭제 후 전체 할 일을 렌더링
      renderTodos();
    })

    // li 요소에 생성한 Delete 버튼 추가
    listItemEl.appendChild(deleteButton);

    // 전체 할 일 목록(ul)에 현재 li 요소를 추가
    listEl.appendChild(listItemEl);
  });
}

renderTodos();