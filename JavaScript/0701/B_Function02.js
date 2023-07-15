// 자바스크립트의 고급 함수

//! 콜백함수

//? 콜백함수?
// 파라미터로 전달되는 함수
// 이벤트가 발생하거나 특정 조건이 충족되었을 때 호출
// 비동기 작업을 처리하거나 코드의 실행 순서를 제어하는 데 유용

//? 콜백 함수의 용도

// 이벤트 핸들러
// 웹에서 버튼 클릭, 키 입력, 마우스 이동 등의 이벤트가 발생했을 때 처리를 위해 사용

// 타이머
// setTimeout, setInterval과 같은 함수에서 콜백 함수를 사용하여 특정 시간이 지나면 실행될 코드를 지정

// 배열 메서드
// forEach, map, filter, reduce 등의 배열 메서드는 각 배열 요소에 대해 수행할 작업을 정의하는 콜백 함수를 인수로 받는다.

// 비동기 작업
// fetch로 HTTP 요청을 보내거나, 파일 I/O을 처리하는 등의 비동기 작업에서 사용

//? 선언적 함수를 사용한 콜백 함수

function callThreeTimes (callback) {
  for (let i = 0; i < 3; i++) {
    callback(i); // callback이라는 매개변수는 함수이므로 호출 가능
  }
}

function print(i) {
  console.log(`${i}번째 함수 호출`)
}

callThreeTimes(print);
// print(0)
// print(1)
// print(2)

callThreeTimes(function (i) { // 익명함수 사용
  console.log(`${i}번째 함수 호출`)
})

//? 콜백함수를 활용하는 함수: forEach() 메소드
// 배열이 가지고 있는 함수로 단순하게 배열 내부의 요소를 사용해서 콜백 함수를 호출

// function (value, index, array)

let arrays = [11, 3, 6, 12, 7];

arrays.forEach(function (value, index, array) {
  console.log(`${index}번째 요소: ${value}`)
})

//? 콜백함수를 활용하는 함수: map() 메소드
// 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 생성

arrays = arrays.map(function (value, index, array) {
  return value * value;
})

arrays.forEach(console.log) // 매개변수로 console.log 메소드 자체를 넘김

//? 콜백함수를 활용하는 함수: filter() 메소드
// 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 새로운 배열을 생성

const numberArray = [0, 1, 2, 3, 4, 5];

const evenNumbers = numberArray.filter(function (value) {
  return value % 2 === 0
})

console.log(`원래 배열: ${numberArray}`);
console.log(`짝수 값만을 담은 배열: ${evenNumbers}`);

//? 타이머 함수

// setTimeout(함수, 시간): 특정 시간 후에 함수를 한 번 호출
// setInterval(함수, 시간): 특정 시간마다 함수를 호출

// 1000 == 1초

//? 1초 후에 메시지를 출력하는 콜백함수
setTimeout(() => {
  console.log(`1 second has passed`);
}, 1000)

// let count = 0;

// setInterval(() => {
//   console.log(`1 second has passed ${count}번째 반복중`);
//   count++;
// }, 5000)

//! 클로저
// 함수가 다른 함수 내부에서 선언되고, 외부 함수의 변수에 접근하는 것

//? 예제

function makeGreeting(language) {
  return function(name) {
    if(language === 'en') {
      console.log('Hello, ' + name + '!');
    } else if (language === 'ko') {
      console.log('안녕하세요, ' + name + '!');
    }
  }
}

let greetingEnglish = makeGreeting('en');
let greetingKorean = makeGreeting('ko');

greetingEnglish('seungah');
greetingKorean('승아');

//? 예제 - 프라이빗 변수 생성

// 클로저를 사용하여 프라이빗 변수 counter를 생성

function makeCounter() {
  let counter = 0;

  return function() {
    return counter++;
  }
}

let count = makeCounter();

console.log(count());
console.log(count());
console.log(count());

//! 재귀함수
// 자신을 다시 호출하는 함수

//? 예제
// n! = n * (n-1) * (n-2) * ... * 1

function factorial(n) {
  if(n === 0) {
    return 1; // 베이스 케이스: 재귀 호출을 멈추는 조건
  } else {
    return n * factorial(n - 1); // 지귀 케이스: 함수가 자기 자신을 다시 호출하는 부분
  }
}

console.log(factorial(5)); 