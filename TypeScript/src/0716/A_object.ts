//! 객체
{
  // 객체 타입 지정(!= 오브젝트 리터럴)
  // 1. 콜론의 우변에는 값 대신 해당 속성의 타입이 지정
  // 2. 구분자로 콤마(,) 뿐만이 아니라 세미콜론(;)도 사용 가능
  // 3. 객체의 값과 동일한 속성명과 원시 타입을 가짐

const seungah: {
  name: string;
  height: number;
} = {
  name: '이승아',
  height: 169
}
  // 객체 속성에 접근하는 방법
  // value.멤버 또는 value['멤버']
  console.log(seungah.name);
  console.log(seungah['height']);
}

//? 객체 타입 선언

let teacher: {
  born: number;
  name: string;
}

teacher = {
  born: 1234,
  name: "Lee Seung Ah",
}

//? 별칭 객체 타입

type Singer = {
  born: number;
  name: string;
}

let rose: Singer = {
  born: 1111,
  name: "Rose",
}

let jenny: Singer = {
  born: 2222,
  name: "Jenny",
}

//! 선택 속성(프로퍼티)
// 객체의 프로퍼티가 항상 있어야 하는 것 X
// 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음(undefined)을 표현

const userUnknownHeight: {
  name: string;
  height?: number; // height: number | undefined 
} = {
  name: "이승아"
}
console.log(userUnknownHeight.name);
console.log(userUnknownHeight.height); // undefined

//? 읽기 전용 속성
// 속성명 앞에 readonly 키워드를 붙여 해당 속성의 재할당을 막을 수 있음
// : readonly 키워드가 붙은 속성은 const 키워드를 이용한 변수 정의와 같다.

{
  const user: {
    readonly name: string;
    height: number;
  } = {
    name: "이승아",
    height: 169
  }

  // user.name = "이도경"; // Error: 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
  user.height = 158;
}

//? 구조적 타이핑
// : 특정 타입을 정확하게 따르는 것X, 해당 타입의 구조만을 충족할 경우 같은 타입으로 간주

type WithFirstName = {
  firstName: string;
}

type WithLastName = {
  lastName: string;
}

const hasBoth = {
  firstName: "Senng Ah",
  lastName: "Lee",
}

let withFirstName: WithFirstName = hasBoth;
let withLastName: WithLastName = hasBoth;

console.log(withFirstName);
console.log(withLastName);

//? 중첩된 객체 타입

type Poem = {
  author: { // 객체 타입
    firstName: string; // string 타입
    lastName: string; // string 타입
  };
  name: string; // string 타입
}

const poem: Poem = {
  author: {
    firstName: "seungAh",
    lastName: "Lee",
  },
  name: "flower",
}
console.log(poem);

//! 객체 타입 유니언
{
type Pages = {
  name: string;
  pages: number;
}

type Flag = {
  name: string;
  flag: boolean;
}

type Poem = Pages | Flag;

const poem: Poem = Math.random() > 0.5 ? {name: "Seung Ah",
  pages: 10} : {name: "DoKyung", flag: true};

poem.name;
// poem.pages;
// poem.flag;

console.log(poem);
}

//! 교차타입(인터섹션 타입 &)
{

  type Artwork = {
    genre: string;
    name: string;
  }

  type Writing = {
    pages: number;
    name: string;
  }

  type WrittenArt = Artwork & Writing;
  // {
  //   genre: string;
  //   name: string;
  //   pages: number;
  // }
  type User = { name: string } & ({ nickname: string; message: "hello";} | { height: number; message: "hi";});

  const seungAh: User = {
    name: "이승아",
    height: 169,
    message: "hi",
  }

  const junLuk: User = {
    name: "이준국",
    nickname: "keroro",
    message: "hello"
  }
}

//? 인덱스 서명
// : 객체의 속성에 동적으로 접근 가능한 기능
// : 객체의 속성명과 타입을 사전에 정의하지 않고도 동적으로 속성 추가 가능

// 기본형태
// : 객체 타입 정의 시 대괄호[]를 사용하여 선언

// [propertyName: indexType]: valueType;
// propertyName: 인덱스 서명에 대한 속성명(보통 문자열, 숫자 타입)
// indexType: 인덱스 타입
// valueType: 해당 인덱스에 접근할 때 반환되는 값의 타입

// 1. 문자열 인덱스 서명
type Car = {
  brand: string; // 필수 속성
  [propertyName: string]: any; // 문자열 인덱스 서명
  // Car타입을 부여받는 객체는 어떤 이름의 추가 프로퍼티도 가질 수 있음.
}

const myCar: Car = {
  brand: "BMW",
  color: "blue",
  year: 2023,
}

// 2. 숫자 인덱스 서명
type NumberArray = {
  [index: number]: number;
}

const myArray: NumberArray = [1, 2, 3, 4, 5];