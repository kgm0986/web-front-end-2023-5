//! 비동기 작업의 예외 처리

//? 오류의 종류
// Error: 모든 내장 에러의 기본 클래스
// ReferenceError: 존재하지 않는 변수를 참조할 때 발생
// TypeError: 잘못된 타입의 값을 사용할 때 발생
// SyntaxError: 코드에 문법 오류가 있을 때 발생

//? 오류 코드 생성
// throw new TypeError('This is a type error');

//? 비동기 함수에서 여러 개의 await 처리시에 예외 처리

async function fetchData() {
  try {
    let response = await fetch('https:// api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch(error) {
    console.log('hello', error);
  }

  try {
    let response = await fetch('https:// api.example.com/other-data');
    let otherData = await response.json();
    console.log(otherData);
  } catch(error) {
    console.log(error);
  }
}

fetchData();