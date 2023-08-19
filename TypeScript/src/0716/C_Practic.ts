// 1. 함수 기초
// 'hello world' 함수를 작성
// 매개변수X, "Hello, World!"라는 문자열을 반환
function sayHello(): string {
  return "Hello, World!";
}
console.log(sayHello()); // "Hello, World!"

// 2. 매개변수와 반환 값
// 두 개의 숫자를 매개변수로 받고 두 숫자의 합을 반환하는 함수 addNumbers 작성. 
// 함수의 매개변수와 반환 값에 적절한 타입을 지정
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addNumbers(10,20)); // 30

// 3. 선택적 매개변수와 기본 매개변수
// 인사말과 이름을 매개변수로 받는 함수 greeting 작성
// 함수는 인사말 뒤에 이름을 붙여서 문자열을 반환
// 이름 매개변수는 선택적, 이름이 제공되지 않으면 'guest'를 기본값으로 사용

function greeting(message: string, name: string = 'guest'): string {
  return `${message}, ${name}`;
}

console.log(greeting('Hello'));
console.log(greeting('Hello', 'Jun Kuk'));

// 4. 함수 오버로딩
// 문자열 두 개를 합치거나, 숫자 두 개를 합칠 수 있다. 
// 함수 오버로딩을 사용하여 이 문제를 해결해 보세요.
// if, else if문 사용 
// typeof 연산자 사용

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: string|number, b: string|number): any {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}
console.log(combine('hi', 'hello'));
console.log(combine(1, 2));

// 5. 화살표 함수
// 주어진 숫자를 두 배로 만드는 화살표 함수 double을 작성
const double = (num: number): number => num * 2;

console.log(double(10));

// 6. Rest Parameters와 Spread 연산자

// 숫자의 배열을 매개변수로 받아 그 합계를 반환하는 함수 작성. 
// 함수는 여러 개의 숫자를 매개변수로 받을 수 있다. 
// Rest Parameters와 Spread 연산자를 활용하여 해결

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15