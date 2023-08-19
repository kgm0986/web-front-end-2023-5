class Employee {
  name!:string;
  id!:number;

  al():void{
    console.log(`${this.name}를 부릅니다`);
  }
  

}
let employee1: Employee =new Employee();
employee1.name="Employee";
employee1.al();


{

  class Consgtructure {
    num!:number;
    name!:string;
  
    
    showinfo():void{
      console.log(`${this.name}+name`);
      console.log(`${this.num}+num`);
    }
  }
}