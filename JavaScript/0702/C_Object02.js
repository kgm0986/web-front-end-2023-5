// 자바스크립트의 내장 객체 

// Built-in Objects(내장 객체) 제공
// 특정 작업을 수행, 복잡한 기능을 쉽게 구현할 수 있도록 도와주는 메소드와 속성을 제공

//! 1. String

let str = "  Hello, World!  ";
console.log(str.length) // 문자열 길이
console.log(str.toUpperCase()); // 모든 문자를 대문자로 변환
console.log(str.trim()); // 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈) 없애기
console.log(str.split(',')) // 문자열을 매개변수(다른 문자열)로 잘라서 배열을 만들어 리턴하는 기능

//! 2. Number

let num = 123.456;
console.log(num.toFixed(2)); // 소수점 아래 2번째 자리까지 표시(반올림)

// isNaN()
// isFinite()

//! 3. Array

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 배열의 길이
arr.push(6);
console.log(arr);

//! 4. Math
console.log(Math.PI); // 원주율
console.log(Math.sqrt(16)); // 제곱근 계산
console.log(Math.random()); // 0과 1사이의 숫자를 랜덤형식(무작위)
console.log(Math.floor(Math.random() * 101)); // 0과 100 사이의 숫자

//! 5. Date
// 날짜와 시간을 처리하는 메소드

let now = new Date();
console.log(now); // 현재 시간

//! 6. JSON
// JSON객체는 JSON 포맷 데이터를 처리하는 메소드

let obj = { name: 'Seugn Ah', age: 97};
console.log(obj);
let json = JSON.stringify(obj); // 객체를 JSON 문자열로 변환
console.log(json);

let parsed = JSON.parse(json);
console.log(parsed);

//! 자바스크립트 객체 프로토타입

//? 프로토타입
// 그 객체를 기반으로 생성된 다른 객체들이 공통적으로 사용할 수 있는 속성과 메소드를 제동
// 객체 생성 시 해당 객체의 생성자 함수의 prototype 속성이 그 객체의 프로토 타입

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
}

let korea = new Person('korea');
korea.greet();

//? 프로토타입 체인
// 객체의 속성이나 메소드에 접근 시 자바스크립트 엔진은 먼저 그 객체 자체에서 해당 속성이나 메소드를 찾는다.
// 만약에 찾지 못할 여우 객체의 프로토타입에서 찾는다.

let academy = new Person('IT');
console.log(academy.constructor === Person);
console.log(academy.constructor.prototype === Person.prototype);

//? 3. 내장 객체의 프로토타입
// 자바스크립트의 내장 객체들도 프로토타입을 가지고 있습니다. 예를 들어, 모든 배열은 Array.prototype을 프로토타입으로 가지고 있습니다.

let array = [1, 2, 3];
console.log(array.__proto__ === Array.prototype);  // true
console.log(typeof array.push === 'function');  // true

//? 4. 프로토타입의 활용
// 프로토타입은 코드의 재사용성을 높이고, 메모리 사용량을 줄이는 데 도움을 줍니다. 여러 객체가 같은 함수를 공유할 수 있기 때문에 각 객체가 동일한 함수의 복사본을 가질 필요가 없습니다.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name);
};

let share = new Person('share');
let v = new Person('tae hyung');

// share, tae hyung은 greet 메소드를 공유합니다.
console.log(share.greet === v.greet);  // true

// 프로토타입은 객체 지향 프로그래밍의 핵심 요소이며, 이를 이해하면 코드의 효율성과 재사용성을 높일 수 있다.

//! 객체와 배열의 차이점

// 객체: 키와 값으로 이루어진 구조
// 키는 일반적으로 문자열, 값은 어떤 데이터 타입이든 가능

let seungah = {
  name: 'seungah',
  age: 97,
  isMarried: false
};
// 타입검사: typeof 객체명

// 배열: 순서가 있는 데이터의 목록
// 배열의 요소는 어떤 데이터 타입이든 될 수 있으며, 하나의 배열에 다양한 타입의 데이터를 함께 저장 가능

let arrayFruit = ['apple', 'banana', 'cherry'];
// 타입검사: Array.isArray(배열명)

//! JSON (JavaScript Object Notation)
// 데이터를 교환하는 데 주로 사용되는 가벼운 데이터 형식
// 텍스트를 기반, 자바스크립트 객체의 문법을 사용하여 데이터 객체를 설명

// key-value, key-array쌍으로 데이터를 구조화하는 데 사용

// {
//   'name': 'seungah',
//   'age': 97,
//   'isMarried': false
// }

//? JSON 사용
// 서로 다른 시스템 간에 구조화된 데이터를 전송하는 데 많이 사용

// JSON.parse()
// JSON 형식의 문자열을 자바스크립트 객체로 변환하려면 JSON.parse() 메소드를 사용

let jsonData = '{"name": "John Doe", "age": 30}';
let obj2 = JSON.parse(jsonData);
console.log(obj2.name);  // "John Doe"

// JSON.stringify()
// 자바스크립트 객체를 JSON 형식의 문자열로 변환하려면 JSON.stringify() 메소드를 사용

let obj3 = {name: "John Doe", age: 30};
let jsonData1 = JSON.stringify(obj3);
console.log(jsonData1);  // '{"name":"John Doe","age":30}'