//! 클래스
// : 객체를 생성하기 위한 템플릿 또는 설계도

// class키워드 클래스명(대문자로 시작)
class ClassName {
  // 멤버 변수, 메소드(메서드, method) 정의
}

//! 멤버 변수 & 메소드
// 멤버변수: 클래스의 상태(state)를 저장
// 메소드: 클래스의 동작(behavior)을 정의

//? 1. 멤버 변수
// : 클래스 내부에서 선언된 변수
// : 해당 클래스의 인스턴스 각각에 속하며, 인스턴스의 상태를 표현

//^ 1. 멤버 변수 선언
// : 클래스의 바디{} 안에 선언, 변수의 타입을 명시적으로 선언 가능

class Book {
  title!: string; // 멤버 변수 선언
  author!: string; // 멤버 변수 선언

  //, !연산자 작성 전
  //, 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.ts(2564) 오류 발생
  //, ! : ts 컴파일러에게 해당 변수에 '값이 무조건 할당 되어있다'를 명시적으로 알려주는 키워드
}

//^ 2. 멤버 변수 사용법
// : this 키워드를 사용해 접근 가능
// this 키워드는 현재 인스턴스를 가리킴

//? 2. 메소드(method)
// : 클래스 내부에서 선언된 함수
// : 해당 클래스의 인스턴스가 수행할 수 있는 행동을 정의

//^ 1. 메소드 선언 방법
// : 클래스의 바디{} 안에 선언
// : 특정한 동작을 수행, 필요에 따라 매개변수를 받고 결과를 반환 가능

class Book2 {
  title!: string;
  author!: string;

  // 메소드 선언
  describe() {
    console.log("메소드가 호출되었습니다.")
  }
}

//^ 2. 메소드 사용법
// : 인스턴스를 통해 호출 가능

//! 생성자 함수 & this 키워드

//? 생성자 함수(Constructor)
// : 클래스의 인스턴스가 생성될 때 호출되는 특별한 메소드
// : 생성자 함수는 주로 인스턴스의 초기 상태를 설정하는 데 사용

//^ 1. 생성자 함수의 특징
// : 클래스는 단 하나의 생성자만 가짐.
// : 반환값이 X
// : 자신을 'new' 키워드와 함께 호출하는 대상(클래스)의 새로운 인스턴스를 암시적으로 반환
// : 필수적인 요소X, 생성자가 없는 경우 TS는 빈 생성자를 자동으로 추가

//^ 2. 생성자 함수 작성
// : 'constructor'라는 키워드로 정의

// class ClassName {
//    멤버 변수 선언
//   variableName: variableType;

//*    생성자 함수 정의
//   constructor(parameters) {
//      멤버 변수 초기화
//     this.variableName = parameterValue;
//   }
// }

//^ 빈생성자 예제
// constructor() {}

class Dog {
  constructor() {
    console.log('constructing!');
  }
}
const dog: Dog = new Dog();

//^ 매개변수가 있는 생성자
class BarkingDog {
  constructor(barkignSound: string) {
    console.log(`${barkignSound}`);
  }
}
// 생성자의 함수 시그니쳐와 맞지 않는 타입의 인스턴스화를 시도할 시 에러 발생
const barkingDog: BarkingDog = new BarkingDog('멍멍');
// const barkingDog2: BarkingDog = new BarkingDog();
// const barkingDog3: BarkingDog = new BarkingDog(3);

//

{
  class Employee{
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
}

{
  class Triangle {
    vertices: number;
    constructor () {
      this.vertices = 3;
    }
  }
  const triangle: Triangle = new Triangle();
  console.log(triangle.vertices);

}


{
  class Triangle {
    vertices: number=3;

  }
  const triangle: Triangle = new Triangle();
  console.log(triangle.vertices);
}

//읽기 전용속성
//:속성 선언
{
  class Triangle {
    vertices: number;
    constructor() {
      this.vertices = 3;
    }
  }
  const triangle: Triangle = new Triangle();
  triangle.vertices=5;
}


{
  class Car {
    name : string;
    year: number;
    constructor(name: string, year: number) {
      this.name = name;
      this.year = year;
    }  
    showName():void {
      console.log(this.name);
    }

    move():void{
      console.log("자동차가 움직입니다");
    }
  }


  const car: Car = new Car("Tesla",2023);

  car.showName();
  car.move();
}