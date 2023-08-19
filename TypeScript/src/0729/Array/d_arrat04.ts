//q배열인터페이스

//각요소가 name과  age를 속성으로 가지는 객체로 이루어진 배열의 정의

{
  interface Student {
    name:string;
    age:number;
  }
  let people:Student[] = [
    {name: "John", age:90},
    {name: "John2", age:80},
    {name: "John3", age:70}
  ];


  function filterStudent(student:Student[],ageLimit:number):Student[] {
    return student.filter(student => student.age> ageLimit);
  }

  const ageLimit=75;
  const filterStudents = filterStudent(people,ageLimit);
  console.log(filterStudents)
}