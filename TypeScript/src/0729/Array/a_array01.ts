//! 배열 (Array)
// : 연관된 데이터를 연속적인 메모리에 저장하고
// : 각 데이터를 인덱스를 통해 참조하는 자료 구조

//! 배열 선언(2가지)
//? Type[]
let array1: number[] = [1, 2, 3];

//? Array<Type>
let array2: Array<number> = [1, 2, 3];

// array1.push('4'); Error - 타입오류

//! 다차원 배열 (2차원 이상의 배열)

// 2차원 배열: Type [][]
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// matrix [0][2] = 3
// matrix [1][1] = 5

//! 제네릭 배열
// : 배열에 여러 타입의 값을 저장하고 싶은 경우

// let arrGeneric: Array<any> = [1, 'string', false];
let arrGeneric: Array<number | string | boolean> = [1, 'string', false, 10, "hi", true];

//! 튜플
// : 배열 내 각 요소의 타입을 개별적으로 지정 가능
// 튜플은 정해진 타입과 타입의 개수를 정확하게 일치시켜야 한다.
{
  let tuple: [string, number, string] = ["hello", 10, "hi"];
  // let tuple2: [string, number] = [10, "hello"]; // Error
  // let tuple2: [string, number] = ["hello", 10, 20]; // Error
}