//할당 가능성(타입호왆성)
console.log("할당가능성")
//타입 별칭 타입에 이름을 붙여 간단히 쓰는것
//type NewType = Type;

//타입 별칭을 갖게될 타입의 자리에는 기본타입을 포함한 모든 타입이 올수있다
type UUID =string;
type Height=number;
type AnotherUUID= UUID;

type Animal =[];
type Animals=Animal[];
type User ={//이름과 높이라는 두개의 속성을 가진 타입으로 처리
  name: string;
  height: number;
}
function getUser(uuid: UUID){

}
getUser('7');

function getUser2(uuid: User){
  return `${uuid.name},${uuid.height}`;
}
// console.log(getUer2({
//   name:"sfew"
//   height:169
// }));




type OddNumber = 1;
const one: OddNumber=1;
const num: number=one;
const four: number=4;
//const one2: OddNumber=four;

type OneDigitOdd = 1 | 3 | 5 | 7 | 9 ;


//타입 어노테이션 (type Annotation) :변수이름 뒤에 배치되면서 콜론과 타입 이름을 기재하여 타입을 명시하는것
let phone;
phone = "Galaxy";
phone.toUpperCase();
phone=123;



