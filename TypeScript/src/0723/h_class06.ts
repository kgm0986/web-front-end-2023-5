abstract class AbstractClass {
    abstract property: string;
    abstract method1(): void;
    method2(): void{
      console.log("주상X");
    }
}
class ConscreteClass extends AbstractClass{

  method1(): void {
    
    console.log("apthem1dl rngusehldjTtmqslek");
  }

  private _property : string;
  constructor (_property : string){
    super();
    this._property = _property;
  }

  get property(): string {
    return this._property;
  }
  set property(value: string){ 
    this._property = value;
  }
}
let concrete: ConscreteClass = new ConscreteClass('123');
concrete.method1();
concrete.method2();
