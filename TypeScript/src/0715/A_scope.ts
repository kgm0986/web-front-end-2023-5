function alwaysThrow(): never {
  throw new Error("I am a wicked funtion!");
}

//! 블록 수준 스코프
//모든 변수 선언이 함수수준에서 이루어짐을 의미
//자바스크립트에서 코드 블록({...})은 새로운 스코프를 생성하지 않는다

//function a1(): number{

function scopeExample() {
  var abc =123;
  if(true){
    var abc = 456;
}
console.log(abc);
}
function scopeExample2() {
  var abc =123;
  function bar(){
    var abc = 456;
}
console.log(abc);
}
function scopeExample3(aks:boolean) {
  var abc =123;
  if(aks){
    var abc = 456;
  }
  console.log(abc);
}
scopeExample();
scopeExample2();
scopeExample3(false);
//alwaysThrow();

//!호이스팅
//ㅣ 변수의 선언과 초기화가 동시에 이루어졌을떄 자바스크립트이 인터프린터가 변수의 선을 함수 맨위로 옮기는 동작
function hoistingEx(){
  //console.log(bar);
  var bar = 123;
}
function hoistingEx2(){
  var bar;
  console.log(bar);
  bar = 123;
}
hoistingEx2();

//블록수준 스코프

//let
{
let goOut = true;
if (true) {
  let goOut = false;
} 
console.log(goOut);
goOut=false;
console.log(goOut);
}
//const 
//const로 선언한 변수는 재할당이 불가능=상수
//단 불변은 아님 Objects나 array 타입의 변수를 const로 정의하더라도 그 객체의 내부상태를 조작하는건 가능

const notAble =3;
const arr=[1,2];
arr.push(3);
console.log(arr);
const object = {a:2};
object.a=3;
console.log(object);
