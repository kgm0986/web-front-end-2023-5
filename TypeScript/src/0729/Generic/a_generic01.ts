//! 제네릭(Generic)
// 재사용 가능한 컴포넌트를 만드는데 사용
// 컴포넌트의 타입을 미리 지정하지 않고, 컴포넌트를 사용하는 시점에서 원하는 타입을 지정

//! 제네릭 장점
// 1. 타입 안정성 보장: 컴파일 시점에서 타입을 체크, 런타임 시점에서 발생할 에러를 방지
// 2. 재사용 가능한 컴포넌트 생성
// 3. 타입 추론 개선

//! 제네릭 기본 형태
// 꺽쇠 괄호 < > 안에 타입 변수를 지정
// <T> : generic 함수를 제네릭 함수로 만들어주는 제네릭
// 어떤 타입의 인수도 가능, 동일한 타입의 값을 반환

function generic<T>(arg: T): T {
  return arg
}

let output1 = generic<string>("myString");
let output2 = generic<number>(100);

console.log(output1);
console.log(output2);

//! 제네릭의 타입 변수
// 타입 변수: 입력 인수(매개 변수)의 타입을 T로 지정하고, 함수의 반환 타입을 T로 지정

//? 단일 타입 변수
// 위의 generic 함수구현이 단일 타입 변수

//? 여러 타입 변수
// 함수가 여러 개의 독립적인 타입을 처리해야 할 때 사용

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}

let output3 = pair<string, number>("myString", 100);
console.log(output3);
// let output4 = pair<string, number>(100, "myString");

//! 타입 변수에 제약 조건 추가
// extends 키워드를 사용하여 타입 제약
interface Lengthwise {
  length: number;
}

// Lengthwise 인터페이스를 확장하는 타입의 인수만 받아들일 수 있다.
function lengthType<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

lengthType("Hello");
lengthType({ length: 10, value: 3});
// lengthType(3); // Error - length 속성이 없는 타입을 사용할 경우 에러