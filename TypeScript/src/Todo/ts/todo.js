var TodoEvent = /** @class */ (function () {
    function TodoEvent() {
    }
    TodoEvent.getInstance = function () {
        if (!this.instance) {
            this.instance = new TodoEvent();
        }
        return this.instance;
    };
    TodoEvent.prototype.addEventAddTodoClick = function () {
        var addTodoButton = document.querySelector('.add-todo-button');
        // 해당 요소가 존재할 경우 로직 실행
        if (addTodoButton) {
            // 버튼 클릭 이벤트 설정
            addTodoButton.onclick = function () {
                //, TodoService의 인스턴스를 가져와서 addTodo 메서드를 실행(Todo 추가)
                TodoService.getInstance().addTodo();
                var todoInput = document.querySelector('.todo-input');
                if (todoInput) {
                    todoInput.value = '';
                }
            };
        }
    };
    TodoEvent.prototype.addEventAddTodoKeyUp = function () {
        var todoInput = document.querySelector('.todo-input');
        // 해당 요소가 존재할 경우 로직 실행
        if (todoInput) {
            // 키보드를 눌렀을 때의 이벤트를 설정
            todoInput.onkeyup = function (event) {
                // 키보드에서 Enter 키를 눌렀을 경우 아래 로직 실행
                if (event.key === "Enter") {
                    var addTodoButton = document.querySelector('.add-todo-button');
                    // 해당 버튼의 클릭 이벤트 실행
                    addTodoButton === null || addTodoButton === void 0 ? void 0 : addTodoButton.click();
                }
            };
        }
    };
    TodoEvent.prototype.addEventRemoveTodoClick = function () {
        var removeButtons = document.querySelectorAll('.content-footer .remove-button');
        // 각 삭제 버튼에 대해 로직을 반복 실행
        removeButtons.forEach(function (removeButton, index) {
            // 버튼 클릭 이벤트 설정
            removeButton.onclick = function () {
                // ModalService의 인스턴스를 가져와서 메서드를 사용해 삭제 모달을 표시
                ModalService.getInstance().showRemoveModal(index);
            };
        });
    };
    TodoEvent.prototype.addEventModifyTodoClick = function () {
        var modifyButtons = document.querySelectorAll('.content-footer .modify-button');
        // 각 수정 버튼에 대해 로직을 반복 실행
        modifyButtons.forEach(function (modifyButton, index) {
            // 버튼 클릭 이벤트 설정
            modifyButton.onclick = function () {
                // ModalService의 인스턴스를 가져와서 메서드를 사용해 수정 모달을 표시
                ModalService.getInstance().showModifyModal(index);
            };
        });
    };
    TodoEvent.instance = null;
    return TodoEvent;
}());
var TodoService = /** @class */ (function () {
    function TodoService() {
        // 로컬 스토리지에서 'todoList'키 값을 가져옴.
        var storedTodos = localStorage.getItem('todoList');
        // 저장된 투두가 있으면 JSON형식으로 파싱,
        // 그렇지 않으면 [] 빈 배열을 할당
        this.todoList = storedTodos ? JSON.parse(storedTodos) : [];
        // 생성 시 todoList를 로드해서 화면에 표시
        this.loadTodoList();
    }
    TodoService.getInstance = function () {
        if (!this.instance) {
            this.instance = new TodoService();
        }
        return this.instance;
    };
    // 로컬 스토리지를 업데이트하고, todoList를 다시 로드하는 메서드
    TodoService.prototype.updateLocalStorage = function () {
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
        this.loadTodoList();
    };
    // 새로운 Todo 항목을 추가하는 메서드
    TodoService.prototype.addTodo = function () {
        var todoInput = document.querySelector('.todo-input');
        // 입력 값이 없거나, 공백만 있을 경우 - 함수 종료
        if (!todoInput || !todoInput.value.trim())
            return;
        // 현재 날짜와 시간 가져오기
        var nowDate = new Date();
        // 숫자로 표시된 요일 값을 문자열로 변환하는 함수
        var convertDay = function (day) {
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
        };
        //, Todo 객체 생성
        var todoObj = {
            todoDate: "".concat(nowDate.getFullYear(), ".").concat(nowDate.getMonth() + 1, ".").concat(nowDate.getDate(), "(").concat(convertDay(nowDate.getDay()), ")"),
            todoDateTime: "".concat(nowDate.getHours(), ":").concat(nowDate.getMinutes(), ":").concat(nowDate.getSeconds()),
            todoContent: todoInput.value,
            title: '',
            done: false
        };
        //, Todo 객체를 todoList 배열에 추가
        this.todoList.push(todoObj);
        // 변경 사항을 로컬 스토리지에 업데이트
        this.updateLocalStorage();
    };
    // 화면에 Todo리스트를 로드하고 표시하는 메서드
    TodoService.prototype.loadTodoList = function () {
        var todoContentList = document.querySelector('.todo-content-list');
        // 해당 엘리먼트가 없으면 함수 종료
        if (!todoContentList)
            return;
        // 내부 HTML을 초기화
        todoContentList.innerHTML = "";
        //, todoList 배열의 각 Todo 객체에 대해 HTML을 생성하고 추가
        this.todoList.forEach(function (todoObj) {
            todoContentList.innerHTML += "\n        <li class='content-container'>\n          <div class='content-header'>\n            <div class='todo-date'>".concat(todoObj.todoDate, "</div>\n            <div class='todo-date-time'>").concat(todoObj.todoDateTime, "</div>\n          </div>\n          <div class='content-main'>\n            ").concat(todoObj.todoContent, "\n          </div>\n          <div class='content-footer'>\n            <button class='modify-button'>\n              <i class=\"fa-regular fa-pen-to-square\"></i>\n            </button>\n            <button class='remove-button'>\n              <i class=\"fa-regular fa-trash-can\"></i>\n            </button>\n          </div>\n        </li>\n      ");
        });
        //, Todo 항목의 수정 및 삭제 버튼에 이벤트 추가
        TodoEvent.getInstance().addEventModifyTodoClick();
        TodoEvent.getInstance().addEventRemoveTodoClick();
    };
    TodoService.instance = null;
    return TodoService;
}());
