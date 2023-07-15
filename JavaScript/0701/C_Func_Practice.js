//! 윤년인지 확인하는 함수 

// 4로 나누어 떨어지는 해는 윤년이다
// 100으로 나누어 떨어지는 해는 윤년이 아니다
// 400으로 나누어 떨어지는 해는 윤년이다

// 실행 결과(console창)

// 2020년은 윤년일까? === true
// 2010년은 윤년일까? === false

function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`);

//! A부터 B까지 더하는 함수

// A부터 B까지의 범위를 지정 -> 범위 안에 있는 숫자를 모두 더하는 함수 구현

function sumAll(a, b) {
  let output = 0;
  for (let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 10까지의 합: ${sumAll(1, 10)}`);

//! 최솟값 구하는 함수

// 매개변수로 숫자들의 배열을 입력하면 
// 배열 내부에 있는 숫자 중에서 가장 작은 값을 구하는 함수
// 기초 알고리즘 시험에 많이 출제되는 문제

// for of 반복문 사용

// 변수 output을 배열의 첫 번째 요소로 설정한 뒤
// 배열 전체에 반복을 돌려서 output보다 더 작은 값이 있는지 계속해서 확인하는 코드를 사용

function min(array) {
  let output = array[0]; [2, 0, 1, 5, 7]
  for (const item of array) {
    // 현재 output보다 더 작은 item이 있으면
    if (output > item) {
      // output의 값을 item으로 변경
      output = item
    }
  }
  return output;
}

const testArray = [52, 114, 46, 24325, 6, 34, 32345]
console.log(`${testArray} 중에서`);
console.log(`최솟값 = ${min(testArray)}`);