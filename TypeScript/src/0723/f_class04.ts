{
  class Car {
    public model: string;

    constructor(model: string) {
      this.model = model;
    }
    describe(): string {
      return `this car is ${this.model}`;
    }
  }
  let car1 = new Car('porsche');

  console.log(car1.describe());

}

// {
//   class Car {
//   public numberOfCars: number=0;
//   private model: string;
  
//   constructor(numberOfCars:number,model: string) {
//     this.model = model;
//     this.numberOfCars = numberOfCars;
    
//     }

//     static howmanyCars(): number {

//       return Car.numberOfCars;
//     }
//   }
// }


