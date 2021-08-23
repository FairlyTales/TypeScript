// ! all these TS features work only in TS (obvious, lol)
// ! they help us during the development, but during the actual app operation
// ! we will still have a normal JS without them! Don't forget about it!

// public - can be used by anyone
// private - can be used only in the class where it's defined
// protected - can be used only in the class where it's defined and it's children classes (but not objects and objects of children)


// abstract classes cannot be used for creating objects
abstract class Department {
  constructor(n: string) {
    this.name = n;
  }

  // readonly make the variable a read-only, self explanatory
  readonly name: string;

  protected array1: string[] = [];

  // abstract methods are a placeholders which should be filled in the child
  // classes. They must have a declared return type (here we set it to string)
  // class with abstract props must be an abstract class itself
  abstract describe(this: Department): string;

  // they can also be combined with protected, but not with private
  protected abstract describe1(this: Department): string;
}

class ChildClass extends Department {
  private privateProp: number = 0;

  // getters allow us to access the private and protected properties
  get getterName() {
    return this.privateProp;
  }

  // setters allow us to set the values of private and protected properties
  set setterName(value: number) {
    this.privateProp = value;
  }

  // static methods and properties are available only in the Class, not it's instances (objects created from the Class)
  static staticMethod() {
    console.log('static method called');
  }

  describe() {
    return 'asdlkagk'
  }
  
  describe1() {
    return 'asdlkagk'
  }
}

const b = new ChildClass('lol');

console.log(b);
