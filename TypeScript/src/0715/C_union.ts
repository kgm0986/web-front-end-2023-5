console.log("유니언타입")

//! 유니언 &내로잉

//? 유니언 
//: 값에 허용ㄷ힌 타입을 두개 이상의 가능한 타입으로 확장하는것
//? 내로잉
//가ㅄ에 허용된 타입ㅇ늘 ㅇ하나이상의 가능한 타입니 되지 않도록 좁히는것
let idol = Math.random() >0.5 ? undefined : 'IVE';
let idol2: string | null = null;
if(Math.random() > 0.5){
  idol2='aespa';
}
let idol3= Math.random() >0.5 ? 123: 'dfwe';
idol3.toString();

//내로잉
//:값이 조의 이존에 유추된거보다 더 구체적인 타입임을 코드에서 유추
let actor: number | string;
//actor.toUpperCase();
actor="Afsw"
actor.toUpperCase();
actor= 123;
actor.toFixed();

let actor2= Math.random() > 0.5 ? "Seo Kang Jun": 29;
if (actor2 === "Seo Kang Jun") {
  actor2.toUpperCase();
}


//tupeod -----------

if (typeof actor2 === "string"){
  actor2.toUpperCase();
} 
if(!(typeof actor2=="string")){
  actor2.toFixed
}else{
  actor2.toUpperCase();
}

typeof actor2 === "string" ? actor2.toUpperCase() :actor2.toFixed;

//