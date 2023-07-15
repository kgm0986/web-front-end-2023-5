// 자바스크립트 키보드와 마우스 이벤트

//! 키보드 이벤트

// keydown: 키를 누를 때 발생
// keyup: 키를 떼면 발생
// keypress: 키를 누르는 동안 발생

// addEventLister 메서드를 사용하여 키보드 이벤트 핸들러를 등록

//! 마우스 이벤트

// click: 마우스 버튼을 클릭할 때 발생
// dblclick: 마우스 버튼을 빠르게 두 번 클릭할 때 발생
// mousemove: 마우스 버튼을 움직일 때 발생
// mousedown: 마우스 버튼을 누를 때 발생
// mouseup: 마우스 버튼을 떼면 발생

// addEventLister 메서드를 사용하여 마우스 이벤트 핸들러를 등록

window.addEventListener('click', function(event) {
  console.log('마우스를 클릭했습니다: ' + event.clientX + ', ' + event.clientY);
})

//! 폼 이벤트

// 폼 이벤트의 종류

// submit: 폼이 제출될 때 발생
// reset: 폼이 초기화될 때 발생
// change: 사용자가 폼의 값을 변경하고, 해당 요소에서 포커스를 빼면 발생
// input: 사용자가 폼의 값을 변경할 때 발생, change 이벤트와는 달리 포커스를 빼지 않아도 발생
// focus: 요소에 포커스가 갈 때 발생
// blur: 요소에서 포커스가 빠질 때 발생

// addEventLister 메서드를 사용하여 폼 이벤트 핸들러를 등록

let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼의 기본 제출 동작을 방지
  console.log('폼이 제출되었습니다.');
  alert('로그인 되었습니다.');
})

// 폼 유효성 검사
// 폼 이벤트는 폼 유효성 검사에도 활용
// 사용자가 폼에 적절한 값을 입력했는지 확인, 그렇지 않다면 경고 메시지를 보여주는 동작을 처리 가능

form.addEventListener('submit', function(event) {
  let username = document.getElementById('username').value;

  if (username.length < 5) {
    alert('사용자 이름은 5자 이상이어야 합니다!');
    event.preventDefault(); // 폼의 기본 제출 동작을 방지
  }
});

//! 페이지 로드 이벤트

// load: 페이지의 모든 콘텐츠(이미지, 스크립트 파일, css파일 등)가 완전히 로드되었을 때 발생
// DOMContentLoaded: HTML문서가 완전히 로드되고 DOM 트리가 완성되었을 때 발생, 이미지나 스크립트 파일 등이 아직 로드되지 않아도 이벤트가 발생

// addEventLister 메서드를 사용하여 페이지 로드 이벤트 핸들러를 등록

// load 이벤트 핸들링 예시
window.addEventListener('load', function() {
  console.log('페이지의 모든 콘텐츠가 로드되었습니다!');
})

// DOMContentLoaded 이벤트 핸들링 예시
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 트리가 완성되었습니다!');
})