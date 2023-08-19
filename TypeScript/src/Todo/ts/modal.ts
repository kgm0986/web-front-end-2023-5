//, Todo 형태 정의 - 인터페이스
interface Todo {
  todoDate: string;
  todoDateTime: string;
  todoContent: string;
}

// ModalEvent 클래스 정의
class ModalEvent {
  private static instance: ModalEvent | null = null;

  public static getInstane(): ModalEvent {
    if (!this.instance) {
      this.instance = new ModalEvent();
    }
    return this.instance;
  }

  // 모달의 취소 버튼에 대한 이벤트 추가
  public addEventCancelClick(): void {
    const modalCancelButton: HTMLElement | null = document.querySelector(".modal-cancel-button");
    if (modalCancelButton) {
      modalCancelButton.onclick = () => {
        ModalService.getInstance().closeModal();
      }
    }
  }

  // 모달의 확인 버튼에 대한 이벤트 추가
  // - 클릭한 모달의 ToDo를 삭제
  public addEventRemoveOkClick(removeIndex: number): void {
    const modalOkButton: HTMLElement | null = document.querySelector('.modal-ok-button');
    if (modalOkButton) {
      modalOkButton.onclick = () => {
        TodoService.getInstance().todoList.splice(removeIndex, 1);
        TodoService.getInstance().updateLocalStorage();
        ModalService.getInstance().closeModal();
      }
    }
  }

  // 모달의 확인 버튼에 대한 이벤트 추가
  // - ToDo 수정 확인 버튼
  public addEventModifyOkClick(modifyIndex: number): void {
    const modalOkButton: HTMLElement | null = document.querySelector('.modal-ok-button');
    if (modalOkButton) {
      modalOkButton.onclick = () => {
        const todoModifyInput: HTMLInputElement | null = document.querySelector('.todo-modify-input');
        if (todoModifyInput) {
          TodoService.getInstance().todoList[modifyIndex].todoContent = todoModifyInput.value;
          TodoService.getInstance().updateLocalStorage();
          ModalService.getInstance().closeModal();
        }
      }
    }
  }

}

// ModalService 클래스 정의
class ModalService {
  
  private static instance: ModalService | null = null;

  public static getInstance(): ModalService {
    if (!this.instance) {
      this.instance = new ModalService();
    }
    return this.instance;
  }

  // 모달을 보여주기 위한 메서드
  public showModal(): void {
    const modalConationer: HTMLElement | null = document.querySelector('.modal-container');

    if (modalConationer) {
      modalConationer.classList.remove('modal-hidden');
    }
  }

  // 모달을 숨기기 위한 메서드
  public closeModal(): void {
    const modalConationer: HTMLElement | null = document.querySelector('.modal-container');

    if (modalConationer) {
      modalConationer.classList.add('modal-hidden');
    }
  }

  // ToDo 삭제를 위한 모달을 보여주는 메서드
  public showRemoveModal(removeIndex: number): void {
    const modalSection = document.querySelector('.modal-section') as HTMLElement;

    modalSection.innerHTML = `
      <div class="modal-header">
        <h1 class="modal-title">ToDo 삭제</h1>
      </div>
      <div class="modal-main">
        <p class="modal-message">ToDo를 삭제하시겠습니까?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="modal-ok-button">확인</button>
        <button type="button" class="modal-cancel-button">취소</button>
      </div>
    `;
    // 확인 버튼이 클릭될 때 해당 ToDo가 삭제되는 이벤트 추가
    ModalEvent.getInstane().addEventRemoveOkClick(removeIndex);
    // 취소 버튼이 클릭될 때 삭제가 실행되지 않는 이벤트 추가
    ModalEvent.getInstane().addEventCancelClick();
    // 모달 표시
    this.showModal();
  }

  // ToDo 수정을 위한 모달을 보여주는 메서드
  public showModifyModal(modifyIndex: number): void {
    // modifyIndex 위치의 Todo 객체를 todoObj에 저장
    const todoObj: Todo = TodoService.getInstance().todoList[modifyIndex];
    const modalSection = document.querySelector('.modal-section') as HTMLElement;

    modalSection.innerHTML = `
      <div class="modal-header">
        <h1 class="modal-title">ToDo 수정</h1>
      </div>
      <div class="modal-main">
        <p class="modal-message">${todoObj.todoDate} ${todoObj.todoDateTime}</p>
        <input type="text" class="todo-modify-input" value="${todoObj.todoContent}">
      </div>
      <div class="modal-footer">
        <button type="button" class="modal-ok-button">확인</button>
        <button type="button" class="modal-cancel-button">취소</button>
      </div>
    `;
    // 확인 버튼이 클릭될 때 ToDo 항목을 수정하는 이벤트를 추가
    ModalEvent.getInstane().addEventModifyOkClick(modifyIndex);
    // 취소 버튼이 클릭될 때 실행될 이벤트를 추가
    ModalEvent.getInstane().addEventCancelClick();
    // 모달을 화면에 표시
    this.showModal();
  }

}