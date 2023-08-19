{
  class Car {
    public model: string;

    constructor(model: string) {
      this.model = model;
    }
  }

  let car1: Car = new Car("BMW");
  console.log(car1.model);
}
{
  class Car {
    private model: string;

    constructor(model: string) {
      this.model = model;
    }
  }

  let car1: Car = new Car("BMW");
  //console.log(car1.model);
}
{
  class Car {
    public model: string;

    constructor(model: string) {
      this.model = model;
    }
  }

  let car1: Car = new Car("BMW");
  console.log(car1.model);
}

{
  class User {
    private password: string;

    constructor(password: string) {
      this.password = password;
    }
  }
  const seungah: User = new User('1234');
  class CarOwner extends User {
    carId:string;

    constructor(password: string, carId:string) {
      super(password);
      this.carId = carId;
    }
    setPassword(newPassword:string) {
      // this.password = newPassword;
    }
  }

}


{
  class Vehicle {
    protected model: string;

    constructor(model:string) {
      this.model = model;
    }
  }

  class Car extends Vehicle {
    getModel() {
      console.log(this.model);
    }
  }

  let car1: Car = new Car("BMW");
  car1.getModel();
}

{
  class User {
    private password: string;

    constructor(password: string) {
      this.password = password;
    }
  }
  const seungah: User = new User('1234');
  class CarOwner extends User {
    carId:string;

    constructor(password: string, carId:string) {
      super(password);
      this.carId = carId;
    }
    setPassword(newPassword:string) {
      // this.password = newPassword;
    }
  }

}

{
  class USer {
    constructor(public id: string,private password: string) {

    } 
  }
}

{
  class User {
    public id : string;
    private password : string;

    constructor(id: string,password:string){
      this.id = id;
      this.password = password;
    }
  }


  const user1: User = new User('Seung Ah','1234');
  console.log(user1);
}