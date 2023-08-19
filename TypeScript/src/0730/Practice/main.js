//, TODO 리스트를 구현하는 실습
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var todos = [];
// 할 일 리스트 가져오기
function fetchTodos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    // 1초 후 현재 todos 배열을 반환
                    setTimeout(function () { return resolve(todos); }, 1000);
                })];
        });
    });
}
// 할 일 추가
function addTodo(todoText) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        //, TodoPractice 타입의 객체 생성
                        var newTodo = {
                            id: Date.now(),
                            text: todoText,
                            done: false,
                        };
                        // 생성된 객체를 todos배열에 추가
                        todos.push(newTodo);
                        resolve();
                    }, 1000);
                })];
        });
    });
}
// 할 일 삭제
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        todos = todos.filter(function (todo) { return todo.id !== id; });
                        resolve();
                    }, 1000);
                })];
        });
    });
}
// HTML요소를 가져와 이벤트 리스너 등록
var formEl = document.getElementById('todo-form');
var inputEl = document.getElementById('todo-input');
var listEl = document.getElementById('todo-list');
// 할 일을 추가
formEl.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var newTodoText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                newTodoText = inputEl.value.trim();
                if (!newTodoText) return [3 /*break*/, 2];
                return [4 /*yield*/, addTodo(newTodoText)];
            case 1:
                _a.sent();
                inputEl.value = '';
                renderTodos();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
// 할 일 목록을 렌더링
function renderTodos() {
    return __awaiter(this, void 0, void 0, function () {
        var todos;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchTodos()];
                case 1:
                    todos = _a.sent();
                    // 현 재 할 일 목록을 초기화 (모든 할 일을 지움)
                    listEl.innerHTML = '';
                    todos.forEach(function (todo) {
                        // 새로운 'li' HTML 요소 생성
                        var listItemEl = document.createElement('li');
                        // 새로 생성한 li 요소에 'todo-item' class명 추가
                        listItemEl.classList.add('todo-item');
                        // li 요소의 텍스트를 현재 할 일의 텍스트로 설정
                        listItemEl.textContent = todo.text;
                        // 새로운 'button' HTML 요소 생성
                        var deleteButton = document.createElement('button');
                        // 생성한 버튼의 텍스트를 'Delete'로 설정
                        deleteButton.textContent = 'Delete';
                        // Delete 버튼에 이벤트 추가(할 일 삭제)
                        deleteButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, deleteTodo(todo.id)];
                                    case 1:
                                        _a.sent();
                                        // 삭제 후 전체 할 일을 렌더링
                                        renderTodos();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        // li 요소에 생성한 Delete 버튼 추가
                        listItemEl.appendChild(deleteButton);
                        // 전체 할 일 목록(ul)에 현재 li 요소를 추가
                        listEl.appendChild(listItemEl);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
renderTodos();