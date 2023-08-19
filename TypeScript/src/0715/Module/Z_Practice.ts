type Status = 'teacher'|"student";
type Person={
  name: string;
  age: number;
}
type Details = {
  status: Status;
  subject: string;
}

type SchoolPerson=Person& Details;

type SchoolPersonOrString= SchoolPerson | string;
function process2(input: SchoolPersonOrString): string{
  return typeof input === "string" ? `Hello , ${input}!` : `${input.name} is a ${input.status} who teaches ${input.subject}`
}
let seungah : SchoolPerson={
  name:'SeugnAh',
  age:99,
  status:'teacher',
  subject: 'typescript'
};




type Operation = "add"|"subtract"|"multiply"|"divide";
function calculate(Operation:string,a:number,b:number):number{
  switch(Operation) {
    case 'add':
      console.log(a+b);
      return a+b;
      break;
    case 'subtract':
      console.log(a-b);
      return a-b;
      break;
    case 'multiply':
      console.log(a*b);
      return a*b;
      break;
    case 'divide':
      console.log(a/b);
      return a/b;
      break;
  }
  return 0;
}
calculate("add",4,2);

