// 자바스크립트의 이벤트 //

//! 이벤트
// 웹 페이지에서 발생하는 대부분의 일(사건)
// 사용자가 버튼을 클릭, 웹 페이지가 로드, 인풋 필드에 입력 등

//! 이벤트 핸들링
// 특정 이벤트에 반응하여 특정 동작을 실행하는 것을 의미
// 이벤트 핸들러(또는 이벤트 리스너)는 특정 이벤트가 발생했을 때 호출되는 함수

//! 이벤트 핸들러 등록 방법

//? 1. HTML 이벤트 핸들러 속성: HTML요소에 직접 on키워드(onclick, onload, onchange ...)를 사용해서 속성에 함수를 할당해서 이벤트를 연결

//? 2. DOM 프로퍼티에 할당: 자바스크립트에서 HTML 요소의 이벤트 핸들러 프로퍼티에 함수를 할당하는 방법

//? 3. addEventListener 메서드: HTML 요소의 addEventListener메서드를 사용하여 이벤트 핸들러 등록
// 표준 이벤트 모델, 한 요소에 여러 개의 이벤트 핸들러 등록 가능
// DOM 요소에 이벤트 리스너를 추가하는데 사용
// 첫 번째 매개변수로 이벤트 유형(click, load, input), 두 번재 매개변수로 이벤트 핸들러 함수를 받는다.

// element.addEventListener('click', function() {
  // 이벤트 핸들링 코드
// });

//! 이벤트 객체
// 이벤트 핸들러가 호출될 때, 브라우저가 자동으로 이벤트 객체를 생성하여 이벤트 핸들러에 전달
// 마우스 이벤트의 경우 마우스 위치 정보
// 키보드 이벤트의 경우 어떤 키가 눌려졌는지에 대한 정보

//! 이벤트 전파
// 이벤트는 일반적으로 특정 요소에서 발생
// 해당 이벤트는 해당 요소의 부모 요소들로 '전파'
// event.stopPropagation()메서드를 호출하면 이벤트 전파를 중단 가능

let btn = document.getElementById('myBtn');

btn.addEventListener('click', function() {
  alert('버튼이 클릭되었습니다.');
})

//! 이벤트 버블링
// 특정 요소에서 이벤트가 발생했을 때, 그 이벤트가 상위요소들로 전달되는 현상 (내부 -> 외부)

//! 이벤트 캡처링
// 이벤트 버빌링과 반대 방향으로 이벤트가 전달되는 현상
// 최상위요소에서 시작 -> 이벤트가 발생한 요소까지 이벤트를 전달 (외부 -> 내부)

//! event.stopPropagation() 메서드
// 이벤트 전파를 중지
// 현재 이벤트 이후의 전파가 중지, 버블링 또는 캡처링에서의 전파를 방지

let parent = document.getElementById('parent');
let child = document.getElementById('child');

parent.addEventListener('click', function(event) {
  alert('부모 요소 클릭');
});

child.addEventListener('click', function(event) {
  alert('자식 요소 클릭');
  event.stopPropagation(); // 버블링 중지
}, true);