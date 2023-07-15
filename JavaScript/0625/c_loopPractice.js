// 자바스크립트의 반복문 예제 실습

//? for 문

//! 배열의 모든 요소 출력하기

let fruits = ['apple', 'banana', 'cherry'];
// 배열의 길이 확인하는 length 속성 : 배열명.length

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

//! 1부터 10까지의 합 계산하기

// 1부터 10까지를 더한 값을 sum 변수에 할당.
// 할당 연산자(+=)
// 최종 값을 콘솔에 출력

let sum = 0;
for (let index = 0; index < 11; index++) {
  sum += index; // sum = sum + index;
}
console.log(sum);

//? while문 

//! 배열의 모든 요소 출력하기

let fruits2 = ['apple', 'banana', 'cherry'];

let index = 0; 
while (index < fruits2.length) {
  console.log(fruits2[index]);
  index++;
}

//! 숫자를 2로 계속 나누기

// num 변수에 100을 초기화
// 조건 1 초과 일 때 

let num = 100;

while (num > 1) {
  num /= 2; // num = num / 2;
  console.log(num);
}

//? do-while문

//! 배열의 모든 요소 출력하기

let fruits3 = ["apple", "banana", "cherry"];
let index3 = 0;
do {
  console.log(fruits[index3]);
  index3++;
} while (index3 < fruits.length);

//! 사용자 입력 받기

// 실행문 시작 전에 userInput의 변수를 선언해주세요.
// do 실행 코드 블럭에 사용자로부터 숫자를 입력 받아 userInput변수에 할당해주세요.
// 사용자가 10보다 큰 숫자를 입력할 때까지 계속해서 사용자에게 입력을 요청합니다.

let userInput;
do {
  userInput = prompt("Enter a number greater than 10", "");
} while (userInput <= 10);

//? for...in 반복문

//! 객체의 속성 반복하기

let car = {
  company: "HyunDai",
  model: "hdCar",
  year: 2023
};

for (let property in car) {
  console.log(property + ": " + car[property]);
}

//! 배열의 인덱스 반복하기 (for...of, forEach 사용 권장)

let fruits4 = ["apple", "banana", "cherry"];
for (let index in fruits4) {
  console.log(index + ": " + fruits4[index])
};

//? for...of 반복문

//! 배열의 요소 반복하기

let fruits5 = ["apple", "banana", "cherry"];
for (let fruit of fruits5) {
  console.log(fruit);
}

console.log("forEach 반복문");

//? forEach 반복문

let fruits6 = ["apple", "banana", "cherry"];

fruits6.forEach(function(fruit, index) {
  console.log(fruit);
  console.log("Index " + index + ": " + fruit);
});
