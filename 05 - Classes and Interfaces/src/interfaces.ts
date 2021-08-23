// interface describe and enforce a structure of an object/class
// the classes and objects implementing this interface must have the structure
// specified in an interface
interface Greetable {
  // interface can also enforce a readonly properties
  readonly name: string;

  // symbol ? indicates that this value is optional, it can be skipped in obj/class which
  // implements this interface
  optionalValue?: number;

  greet(phrase: string): void;
}

// here we use interface as a type
let user1: Greetable;

// object of this type must have all the specified props set
user1 = {
  name: 'asdds',

  greet(phrase: string) {
    console.log(phrase + this.name);
  },
};

// interfaces can be used to force a class to correctly implement an interface structure
// class can implement several interfaces
class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet() {
    console.log(this.name);
  }
}

// interfaces can also be used to define a function structure (which can be also done via
// custom types)
interface SomeFunction {
  (a: number, b: number): number;
}
// this is the same as:
type SomeOtherFunction = (a: number, b: number) => number;
// which defines a function structure: 2 input parameters of type number
// with a return value of type number