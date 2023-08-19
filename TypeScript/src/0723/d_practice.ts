class car {
  model: string;
  year: number;
  constructor(model: string, year: number){
    this.model = model;
    this.year = year;
  }

  getModelAndYear():void{
    console.log(`This car is a ${this.model} from ${this.year}.`);
  }
}

let Car:car = new car("k5",2022);
Car.getModelAndYear();