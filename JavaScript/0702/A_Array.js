//# 배열

// 같은 타입이 아닌 여러 값들(여러 개의 변수)을 담을 수 있는 리스트 형태의 객체
// 순서가 있는 데이터의 목록, 각 데이터는 인덱스에 의해 위치 결정
// 어떤 데이터 타입이든지 저장 가능, 한 배열 안에 여러 가지 타입의 데이터를 저장하는 것도 가능

let fruits = ["apple", "banana", "orange"];

let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange";

//! 배열의 생성
// [] 대괄호를 사용해 생성, 내부의 값을 쉼표(,)로 구분해 입력
// 요소: 배열 내부에 들어 있는 값

let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];
let mixedType = [1, "two", false, { namd: "Seung Ah" }, [5, 6]];

// new Array()구문을 사용한 배열 생성 (일반적으로 대괄호 사용을 선호)

let arrayWithNew = new Array("apple", "banana", "orange");

//! 배열 요소에 접근
// 가장 앞에 있는 요소를 0번째로 표현
// 인덱스: 요소의 순서
// 배열명[인덱스]

console.log(fruits[1]);

//! 배열의 길이
// length()속성: 배열에 들어있는 요소의 수를 반환
// 배열명.length

console.log(fruits.length);

//! 배열의 메소드

//? 배열에 요소 추가 
// 1. push(): 배열 뒷부분에 요소 추가

let cars = ["bmw", "audi"];
cars.push("hyundai");
console.log(cars);

// 2. 인덱스를 사용해 배열 뒷부분에 요소 추가
cars[5] = "kia";
console.log(cars);

// 3. length속성 이용 시 배열의 마지막 위치에 요소 추가 가능
cars[cars.length] = "toyota";
console.log(cars);

//? 배열에 요소 제거

// pop(): 배열의 마지막 요소를 제거하고 그 값을 반환
let lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

//? unshift() & shift()

// unshift(): 배열의 시작에 새로운 요소를 추가
// shift() : 배열의 첫 번째 요소를 제거하고 그 요소를 반환

let cars2 = ["audi", "hyundai"];
cars2.unshift("bmw");
console.log(cars2);
let carsShift = cars2.shift();
console.log(carsShift);

//? splice(): 배열의 기존 요소를 삭제 또는 교체하거나, 새 요소를 추가하여 배열의 내용을 변경
// splice(인덱스, 제거할 요소의 개수)

let snacks = ['chocopick', "oreo", "potatochip"];

// 인덱스 1의 요소에 삽입
snacks.splice(1, 0, 'chicchoc');
console.log(snacks);

// 인덱스 3의 요소에 1개의 데이터를 교체
snacks.splice(3, 1, "A");
console.log(snacks);

//? slice(): 배열의 특정 부분을 새 배열로 반환
// 인덱스 번호 2이후의 값들을 새로운 배열로 반환
let twoSnacks = snacks.slice(2); 
console.log(twoSnacks);

//? indexOf(): 배열 내부에서 특정 값의 위치를 찾는 메소드
// 배열 내부에 요소가 없을 때는 -1 리턴

let findSnack = twoSnacks.indexOf('B');
console.log(findSnack);

//! 배열 탐색 및 반복 메소드

// forEach(): 배열의 각 요소에 대해 함수를 실행

// map(): 배열의 각 요소에 대해 함수를 실행하고, 그 결과를 새 배열로 반환

// filter(): 함수의 조건을 만족하는 요소만을 새 배열로 반환
