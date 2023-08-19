class Base {
  answer: number = 42;

  greeting() {
    console.log('hello,ts');
  }
}

class Extended extends Base {

}

const extended: Extended = new Extended();
console.log(extended.answer);
extended.greeting();

{
  class Base {
    baseprop: number;
    constructor() {
      this.baseprop = 123;
    }
  }
  class Extended extends Base {
    extendedProp: number ;
    constructor() {
      super();
      this.extendedProp =456;
    }
  }

  const extended: Extended = new Extended();
  console.log(extended.baseprop);

}
{
  class Shape {
    constructor(public vertices: number) {}
      
    get _vertices(): number {
      console.log(this.vertices);
      return 3;
    }
  }

  const triangles: Shape = new Shape(3);
  const vertices = triangles.vertices;
  console.log(vertices);

}

{
  class Shpae {
    private _vertices: number=3;
    get vertices(): number {
      console.log('vf');
      return 3;
    }
    set vertices(value: number) {
      console.log('sf');
      this._vertices = value;
    }
  }
  const squere = new Shpae();

  squere.vertices = 4;
  const vertices = squere.vertices;
  console.log(vertices);

}
