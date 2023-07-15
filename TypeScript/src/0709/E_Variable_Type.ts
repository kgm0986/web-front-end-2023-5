//타입스크립트 변수선언
//js var let const
let nameing: string ='seungah';
const age: number = 24;
var isMarried:boolean =false;

//타입스크립트 타입
//원시타입
//string number boolean
//js 
let isDone2:boolean =false;
//? number 

//void 반환 x
function introduce(): void {
  console.log(''
);}

//any
//
let obj: any = {x:0};
obj.foo();
let undefined1: undefined = undefined;
let nulltypeL: null= null;
//하위타입
//숫자 열거형
enum sodihv{
  Up1 =1

}
//문자 열거형
enum Dsqdf{
  sd ="qasd",
  adc="sac"
} 
//2020에도입 아주 큰 정수 ((
//const oneHundred: bigint= BigInt()

//Symbol 유일 하고 변경 뷸가능 한 값
const firstName = Symbol("name");
if (firstName === secondName) {
  console.log("");
}