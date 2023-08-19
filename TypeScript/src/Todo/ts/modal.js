// ModalEvent 클래스 정의
var ModalEvent = /** @class */ (function () {
    function ModalEvent() {
    }
    ModalEvent.getInstane = function () {
        if (!this.instance) {
            this.instance = new ModalEvent();
        }
        return this.instance;
    };
    // 모달의 취소 버튼에 대한 이벤트 추가
    ModalEvent.prototype.addEventCancelClick = function () {
        var modalCancelButton = document.querySelector(".modal-cancel-button");
        if (modalCancelButton) {
            modalCancelButton.onclick = function () {
                ModalService.getInstance().closeModal();
            };
        }
    };
    // 모달의 확인 버튼에 대한 이벤트 추가
    // - 클릭한 모달의 ToDo를 삭제
    ModalEvent.prototype.addEventRemoveOkClick = function (removeIndex) {
        var modalOkButton = document.querySelector('.modal-ok-button');
        if (modalOkButton) {
            modalOkButton.onclick = function () {
                TodoService.getInstance().todoList.splice(removeIndex, 1);
                TodoService.getInstance().updateLocalStorage();
                ModalService.getInstance().closeModal();
            };
        }
    };
    // 모달의 확인 버튼에 대한 이벤트 추가
    // - ToDo 수정 확인 버튼
    ModalEvent.prototype.addEventModifyOkClick = function (modifyIndex) {
        var modalOkButton = document.querySelector('.modal-ok-button');
        if (modalOkButton) {
            modalOkButton.onclick = function () {
                var todoModifyInput = document.querySelector('.todo-modify-input');
                if (todoModifyInput) {
                    TodoService.getInstance().todoList[modifyIndex].todoContent = todoModifyInput.value;
                    TodoService.getInstance().updateLocalStorage();
                    ModalService.getInstance().closeModal();
                }
            };
        }
    };
    ModalEvent.instance = null;
    return ModalEvent;
}());
// ModalService 클래스 정의
var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService.getInstance = function () {
        if (!this.instance) {
            this.instance = new ModalService();
        }
        return this.instance;
    };
    // 모달을 보여주기 위한 메서드
    ModalService.prototype.showModal = function () {
        var modalConationer = document.querySelector('.modal-container');
        if (modalConationer) {
            modalConationer.classList.remove('modal-hidden');
        }
    };
    // 모달을 숨기기 위한 메서드
    ModalService.prototype.closeModal = function () {
        var modalConationer = document.querySelector('.modal-container');
        if (modalConationer) {
            modalConationer.classList.add('modal-hidden');
        }
    };
    // ToDo 삭제를 위한 모달을 보여주는 메서드
    ModalService.prototype.showRemoveModal = function (removeIndex) {
        var modalSection = document.querySelector('.modal-section');
        modalSection.innerHTML = "\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title\">ToDo \uC0AD\uC81C</h1>\n      </div>\n      <div class=\"modal-main\">\n        <p class=\"modal-message\">ToDo\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"modal-ok-button\">\uD655\uC778</button>\n        <button type=\"button\" class=\"modal-cancel-button\">\uCDE8\uC18C</button>\n      </div>\n    ";
        // 확인 버튼이 클릭될 때 해당 ToDo가 삭제되는 이벤트 추가
        ModalEvent.getInstane().addEventRemoveOkClick(removeIndex);
        // 취소 버튼이 클릭될 때 삭제가 실행되지 않는 이벤트 추가
        ModalEvent.getInstane().addEventCancelClick();
        // 모달 표시
        this.showModal();
    };
    // ToDo 수정을 위한 모달을 보여주는 메서드
    ModalService.prototype.showModifyModal = function (modifyIndex) {
        // modifyIndex 위치의 Todo 객체를 todoObj에 저장
        var todoObj = TodoService.getInstance().todoList[modifyIndex];
        var modalSection = document.querySelector('.modal-section');
        modalSection.innerHTML = "\n      <div class=\"modal-header\">\n        <h1 class=\"modal-title\">ToDo \uC218\uC815</h1>\n      </div>\n      <div class=\"modal-main\">\n        <p class=\"modal-message\">".concat(todoObj.todoDate, " ").concat(todoObj.todoDateTime, "</p>\n        <input type=\"text\" class=\"todo-modify-input\" value=\"").concat(todoObj.todoContent, "\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"modal-ok-button\">\uD655\uC778</button>\n        <button type=\"button\" class=\"modal-cancel-button\">\uCDE8\uC18C</button>\n      </div>\n    ");
        // 확인 버튼이 클릭될 때 ToDo 항목을 수정하는 이벤트를 추가
        ModalEvent.getInstane().addEventModifyOkClick(modifyIndex);
        // 취소 버튼이 클릭될 때 실행될 이벤트를 추가
        ModalEvent.getInstane().addEventCancelClick();
        // 모달을 화면에 표시
        this.showModal();
    };
    ModalService.instance = null;
    return ModalService;
}());
