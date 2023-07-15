// 자바스크립트의 자료형
// 숫자, 문자열, 논리형
// 배열, 객체
// undefined, null

// 1. 기본 자료형

// 1-1. 숫자형
// 정수와 실수로 나뉘지만 js에서는 구분X
// number라는 하나의 자료형으로 사용

let number1 = 10;
let float1 = 10.5;

// 1-2. 문자열
// 텍스트 데이터를 나타내는 타입
// 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 둘러싸서 표현

let string1 = 'hello';
let string2 = "world";
let string3 = `hello, world`; // 백틱은 템플릿 문자열로 사용 가능

// 템플릿 문자열(리터럴)
// 문자열 안에 변수를 받아서 사용 가능

// let name = "이승아";
// let introduce = `안녕하세요 ${name} 입니다.`;

// 1-3. 논리형
// boolean : 참(true) 또는 거짓(false) 값만을 가진다.

let booleanExample = true;
let booleanExample2 = false;

let booleanExample3 = "참";

// 1-4. null & undefined

// null : 값이 없음을 명시적으로 나타냅니다. (변수에 할당된)데이터의 값이 유효하지 않은 상태

let nullExample = null;

// undefined : 값이 할당되지 않은 변수의 기본값입니다.
let undefinedExample;
console.log(undefinedExample); // undefined

// Object 객체 : 여러 가지 값과 복잡한 개체를 표현하는 타입
let obj = {
  name: 'SeungAh', 
  age: 99
};

// 자료형 검사
// typeof 변수명

// 자료형 변환

// 문자열로 변환: String() 함수 또는 toString() 메서드를 사용하여 다른 자료형을 문자열로 변환할 수 있습니다.

// 숫자로 변환: Number() 함수를 사용하여 문자열을 숫자로 변환할 수 있습니다. 문자열이 숫자로 변환할 수 없는 경우 결과는 NaN(Not A Number)이 됩니다.

// 불리언으로 변환: Boolean() 함수를 사용하여 다른 자료형을 불리언으로 변환할 수 있습니다. 
//JavaScript에서는 false, 0, '', null, undefined, NaN을 제외한 모든 값이 true로 간주됩니다.

