//! 간단한 투두 리스트 만들기

let addButton = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function(){
  let newItem = document.createElement('li');
  newItem.textContent = todoInput.value;
  newItem.classList.add('todo-item');
  todoList.appendChild(newItem);
  todoInput.value = '';
});

todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
})

//! 남은 글자 수 출력하기

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const h1 = document.querySelector('h1');

  textarea.addEventListener('keyup', (event) => {
    const length = textarea.value.length;
    h1.textContent = `글자 수: ${length}`
  })
})