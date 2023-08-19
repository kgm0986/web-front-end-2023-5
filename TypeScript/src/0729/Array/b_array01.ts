//! 배열 메소드

//? 1. push()
// : 배열의 끝에 하나 이상의 요소를 추가, 변경된 배열의 길이를 반환

let numbers: number[] = [1, 2, 3];
let newLength: number = numbers.push(4); 

console.log(numbers);
console.log(newLength);

//? 2. pop()
// 배열에서 마지막 요소를 제거, 제거된 요소를 반환

let numbersPop: number[] = [1, 2, 3];
let lastElement = numbersPop.pop();

console.log(numbersPop);
console.log(lastElement);

//? 3. map()
// 배열 내의 모든 요소 각각에 대하여 제공한 함수를 호출하고, 
// 그 결과를 모아 새로운 배열을 반환

let numbersMap: number[] = [1, 2, 3];
let doubled: number[] = numbersMap.map(x => x * 2);

console.log(doubled);

let strings: string[] = numbersMap.map(num => num.toString());
console.log(strings);

//? 4. filter()
// 제공한 함수를 만족하는 모든 요소를 모아 새로운 배열을 반환
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 생성

let numbersFilter: number[] = [1, 2, 3, 4, 5];
let evens = numbersFilter.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

//? 5. reduce()
// 배열의 각 요소에 대해 주어진 리듀서 함수를 실행, 단일 결과값을 반환
// 배열을 순회하면서 누적 계산 값을 유지

let numbersReduce: number[] = [1, 2, 3, 4, 5];

// 첫번 째 인자 (total, currentValue) => total + currentValue : 리듀서 함수
// 두번 째 인자 0 : 초기 값
let sumReduce = numbersReduce.reduce((total, currentValue) => total + currentValue, 0);

console.log(sumReduce);

//? sort()
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환

let numbersSort: number[] = [5, 1, 4, 3, 2];
numbersSort.sort((a, b) => a - b); 
// 오름 차순 정렬 : a - b의 값이 0보다 작으면 a를 b보다 낮은 인덱스 번호로 위치 시킴.

// numbersSort.sort((a, b) => b - a); 
// 내림 차순 정렬

console.log(numbersSort);

//? slice()
// 배열의 일부를 추출하여 새로운 배열로 반환
// 시작 인덱스, 종료 인덱스를 매개변수로 받아서 사용
// 시작 인덱스 <= x < 종료 인덱스

let numbersSlice: number[] = [1, 2, 3, 4, 5];
let slice = numbersSlice.slice(1, 3); 
console.log(slice);