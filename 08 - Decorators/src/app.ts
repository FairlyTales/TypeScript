// ! decorators
// decorator is just a function which applies smth to the class BEFORE
// the instantiating (before creating an object from a class)
// and after the class is declared (just declared!)

// here is our simple decorator
// decorator name should start with a capital letter - it's a convention
// decorator must take one arguments - constructor of the class
function Logger(constructor: Function) {
  console.log('logging...');
  console.log(constructor);
}

// decorators are applied to classes with the '@' symbol and wi
@Logger
class Person {
  name = 'max';

  constructor() {
    console.log('person obj created');
  }
}

// ! decorator factories
//  we can use decorator factories to give the decorator our own arguments
// decorator factory is just an outer function which we use to add some custom
// functionality and returns a normal decorator function

function Logger1(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// we can add multiple loggers
// they are executed from bottom to top (here: Logger1, then Logger)
@Logger
@Logger1('our custom log string')
class Person1 {
  name = 'max';

  constructor() {
    console.log('person obj created');
  }
}

// ! decorators can be added to class properties, setters and methods

// ! class decorators can return a value - it must be a constructor which
// ! will replace the original class constructor
// ! decorators on properties and parameters can't return anything (well, they can return smth, but they will be ignored)

// here we use a generic type which extends a 'newable' object (object that can be used
// by 'new' keyword) which accepts unknown amount of arguments with type any and
// returns an object
function returningDecorator<T extends { new (...args: any[]): {} }>(
  defaultConstructor: T,
) {
  return class extends defaultConstructor {
    constructor(...args: any[]) {
      super(); // executing the original constructor

      console.log('constructor from decorator is running');
      console.log(args);
      
    }
  };
}
