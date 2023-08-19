//! 제네릭 인터페이스

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function idenetity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = idenetity;

//? 예제
interface Comparator<T> {
  compare: (a: T, b: T) => number;
}

// number 타입을 비교하는 함수
let numberComparator: Comparator<number>  = {
  compare: function(a: number, b: number): number {
    return a - b;
  }
}

// string 타입을 비교하는 함수
let stringComparator: Comparator<string> = {
  compare: function(a: string, b: string): number {
    if (a < b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }
}

let a = {
  a: 4,
  b: function(a: any, b: any) {

  }
}

console.log(numberComparator.compare(10, 20));
console.log(stringComparator.compare("apple", "banana"));

//! 제네릭 클래스

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 7;
myGenericNumber.add = function(x, y) { return x + y };

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));

let string = new GenericNumber<string>();
string.zeroValue = "hello";
string.add = function(x, y) { return x + y };

console.log(string.add(string.zeroValue, " typescript!"));