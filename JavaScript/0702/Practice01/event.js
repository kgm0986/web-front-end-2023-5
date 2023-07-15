//! 이미지 슬라이더 구현하기
// 자바스크립트를 이용하여 간단한 이미지 슬라이더 구현

// HTML 문서에서 주어진 id를 가진 요소를 찾아서 반환
let prevButton = document.getElementById("prev-btn");
let nextButton = document.getElementById("next-btn");
let slideContainer = document.getElementById("slide-container");

// 주어진 CSS 선택자를 만족하는 모든 요소를 반환
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

// 주어진 이벤트가 발생했을 때 실행할 함수를 등록
prevButton.addEventListener("click", function () {
  // 이전 버튼이 클릭되면 인덱스가 감소하고, 다음 버튼이 클릭되면 인덱스가 증가
  // 슬라이드의 범위를 넘어가면, 각각 마지막 슬라이드와 첫 번째 슬라이드로 돌아감.
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  // updateSlidePosition: 이 함수는 모든 슬라이드의 위치를 업데이트
  // CSS transform 속성의 translateX 함수를 사용하여 각 슬라이드를 왼쪽으로 이동
  // >> 현재 인덱스에 해당하는 슬라이드가 보여짐.
  updateSlidePosition();
});

nextButton.addEventListener("click", function () {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
});

// translateX 함수를 사용하여 슬라이드를 좌우로 이동, -slideIndex * 100 + "%".
// 이 부분에서 -slideIndex * 100은 현재 보여주어야 하는 슬라이드를 정확히 화면에 맞추기 위해 이동해야 하는 거리를 계산
// 여기서 -slideIndex * 100은 현재 보여지는 슬라이드가 슬라이드 리스트의 어느 위치에 있느냐에 따라 슬라이드들이 얼마나 왼쪽으로 이동해야 하는지를 퍼센트로 계산
// 이렇게 함으로써 슬라이드가 좌우로 움직이면서 원하는 슬라이드를 보여줌.
function updateSlidePosition() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + -slideIndex * 100 + "%)";
  }
}
