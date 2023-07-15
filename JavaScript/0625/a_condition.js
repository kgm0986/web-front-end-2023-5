// 자바스크립트의 조건문

// 조건문 : 프로그램에게 특정 조건을 검사하고, 그 결과에 따라 다른 행동을 하도록 명령하는 방식

// 조건문의 종류 : if문, else (if)문, if-else문, switch문

//! 1. if문
// 가장 기본적인 조건문, 특정 조건이 참일 경우에 코드 블록이 실행

// if문의 기본형

// if (조건) {
//   // 조건이 참일 때 실행되는 코드
//   // 조건이 거짓일 경우 코드블럭은 무시
// }

// 조건에는 보통 비교 연산자 (==, !=, ===, !==, <, >, <=, >=)

let number = -1;

if (number > 0) {
  console.log("The number is positive");
}

// if (number > 0) console.log("The number is positive");

//! 2. else문
// else문은 if문과 함께 사용, if의 조건이 거짓일 경우 else 뒤의 코드 블록이 실행

// if else문의 기본형
// if (조건) {
//   // 조건이 참일 때 실행되는 코드
// } else {
//   // 조건이 거짓일 때 실행되는 코드
// }

let number2 = -10;

if (number2 > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is not positive");
}

//! 3. else-if 문
// else if문은 if와 else 사이에 여러 개의 조건을 추가
// if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

// else if문의 기본형

// if (조건1) {
//   // 조건1이 참일 때 실행되는 코드
// } else if (조건2) {
//   // 조건1이 거짓이고 조건 2가 참일 때 실행되는 코드
// } else if (조건3) {
//   // ...
// } else {
//   // 모든 조건이 거짓일 때 실행되는 코드
// }

let number3 = 0;

if (number3 > 0) {
  console.log("The number is positive");
} else if (number3 < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero")
}

//! 4. switch문
// switch문은 여러 가지 경우 중 하나를 선택하는데 사용
// 표현식의 값을 확인하고 해당 값과 일치하는 case문의 코드 블록을 실행

// switch문은 여러 가지 가능한 케이스 중에서 하나를 선택하여 해당하는 코드 블록을 실행하는 제어 구조

// else문, else-if문이 복잡하게 겹쳐질 때 사용하면 코드를 간결하고 이해하기 쉽게 만든다.

// switch문은 주어진 식의 결과값과 case에 명시된 값들을 순차적으로 비교

// switch문의 기본형

// switch (식) {
//   case 값1:
//     // 식이 값1과 일치할 때 실행하는 코드
//   case 값2:
//     // 식이 값2와 일치할 때 실행하는 코드
//   case 값3:
//     // 식이 값3와 일치할 때 실행하는 코드
//   default:
//     // 식이 어떤 값과도 일치하지 않을 때 실행되는 코드
// }

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("I am a banana");
    break;
    // break문을 만나면 switch문을 빠져나온다.
  case "apple":
    console.log("I am an apple");
    break;
  case "strawberry":
    console.log("I am a strawberry");
    break;
  default:
    console.log("I am not a banana or apple or strawberry")
    // 어떤 case와도 일치하지 않는 경우
}

//! 조건 연산자 (삼항 연산자)
// 조건 연산자는 자바스크립트에서 세 개의 피연산자(항)를 가지는 유일한 연산자
// if-else문을 더 간결하게 표현

// 조건 연산자의 기본형

// 조건 ? 표현식1 : 표현식2;

// 조건 연산자 : 주어진 조건을 평가한 후,
// 그 결과 true이면 표현식1을, false이면 표현식2를 실행 : (if) else문의 로직과 동일

// if (조건) {
//   표현식1
// } else {
//   표현식2
// }

let numCondition = 15;

let message = numCondition > 10 ? "The number is greater than 10." : "The number is not greater than 10.";

console.log(message);

//? Quiz 

true ? alert('출력A1') : alert('출력B'); // 출력A
false ? alert('출력B') : alert('출력A2'); // 출력A
true || alert('출력A3') // X
true && alert('출력A4') // 출력A

// 논리 연산자로 조건 체크

// 조건을 2개 이상 체크할 경우에는 조건 연산자를 사용해서 조건식을 만든다.
// 두 조건이 true일 경우 1개만 true일 경우처럼 여러 경우의 수를 따질 때는 논리 연산자를 사용

// OR 연산자
// 피연산자 2개 중에서 true가 하나라도 있으면 결괏값은 true

false || false == false;
false || true == true;
true || false == true;
true || true == true;

let numberOne = prompt('50 미만인 숫자를 입력하세요.');
let numberTwo = prompt('50 미만인 숫자를 입력하세요.');

if (numberOne < 10 || numberTwo < 10) alert('숫자 2개 중에서 최소한 하나는 10미만입니다.');
else alert('숫자 2개 중에서 10미만인 수가 없습니다.');

// AND 연산자
// 피연산자 2개 중에서 false가 하나라도 있으면 결괏값이 false

false && false == false;
false && true == false;
true && false == false;
true && true == true;

// 조건이 2가지 이상일 경우 동시에 함께 체크하는 조건식을 만들 때는 
// 첫 번째 조건을 보고 빠르게 판단 할 수 있도록 로직을 구성해야 합니다.

((x === 10) && (y === 20))

// AND연산자 : 첫 번째 조건식에 false가 될 확률이 높은 조건을 사용하는 것이 좋다.
// OR연산자 : 첫 번째 조건식에 true가 될 확률이 높은 조건을 사용하는 것이 좋다.