console.log("Literal 타입")

//
const student = "jun kuk";
student.toUpperCase();
let student2 = "eun jin";
student2.toUpperCase();

type YesOrNo = "yes"|"no";
let answer: YesOrNo;
answer="yes";
{
enum Color {
  Red,
  Green,
  Blue
}
let myColor: Color.Red;


}
let student3: number |"jun"|"eunjin";

