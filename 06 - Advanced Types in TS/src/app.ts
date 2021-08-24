// ! type guards
// type guard is a thingy that allow to narrow down the type of an object
// type guards can be made up of conditional blocks with typeof checks

// type guard is an idea, not an exact method or methodology

type Combinable = string | number;

function add(n1: Combinable, n2: Combinable) {
  // this is type guard which uses typeof
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n1;
}

// we can also use 'in' operator to safe check for the existence of a property on an object
// as a type guard, here is an example:

class Car {
  drive() {
    console.log('car');
  }
}

class Truck {
  drive() {
    console.log('truck');
  }

  load() {
    console.log('load');
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  // both have this method, no need for a type guard
  vehicle.drive();

  // type guard which uses 'in' operator
  if ('load' in vehicle) vehicle.load();
}

// we can also use 'instanceof' operator to achieve the same result
// 'instanceof' checks if an object is an instance of a particular Class
function useVehicle1(vehicle: Vehicle) {
  // both have this method, no need for a type guard
  vehicle.drive();

  // type guard which uses 'instanceof' operator
  if (vehicle instanceof Truck) vehicle.load();
}

// ! discriminated union
// discriminated union is a union pattern which makes implementing type guards easier

// here is an example with interfaces, but it also can be done with classes
interface Birb {
  // it's not a type value, just a variable which tells us that Birb must have a
  // property called 'type' which must be of type 'birb'
  type: 'birb';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Birb | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case 'birb':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Speed is: ${speed}`);
}

// ! type casting
// type casting is a method of converting variables from one type to another
// there are 2 syntaxes for it, fully equal to each other

// first syntax is <типЭлемента> in front of the variable we want to convert
// but this syntax is very similar to the React syntax, so better not to use it in React projects
const inputElem = <HTMLInputElement>document.querySelector('#id');

// second syntax is 'as' keyword with a type following it
// this syntax is better for using with React
const inputElem1 = (<HTMLInputElement>(
  document.querySelector('#id1')
)) as HTMLInputElement;

inputElem.value = 'lol';

// ! index types
// index types help us to create a more flexible types and interfaces

interface ErrorContainer {
  // [property_name] - is a syntax for adding a property with a name of type string/number/symbol
  // which tells TS that we will have a prop with this type of a name but we don't know exactly
  // which name it will have
  // ': type' after the square brackets sets the value type for this property
  [prop: string]: string;

  // if we've used an index type in our interface we can only add explicit properties of
  // type string, number, boolean, etc. are not allowed
  anotherProp: string;
}

const someError: ErrorContainer = {
  someStringProp: 'alsdalsdhad',
  someStringProp1: '3453453',
  anotherProp: 'alsdalsdhad',
};


// ! function overload
// function overload allows us to define multiple function signatures in one function
// i.e. we will have several ways of calling a function

// this function always return a variable with type Combinable (number | string)
function add1(n1: Combinable, n2: Combinable) {
  // this is type guard which uses typeof
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n1;
}

// this returned value will be of type Combinable (number | string)
// because TS don't analyze our code that deep to see that is 2 number are
// entered the return type will always be a number
const result = add1(1, 3);

// here is a function overload: if we call this func with 2 numbers we get a number,
// and when we call it with 2 strings we get a string, etc.
function add2(n1: number, n2: number): number;
function add2(n1: string, n2: string): string;
function add2(n1: number, n2: string): string;
function add2(n1: string, n2: number): string;
function add2(n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n1;
}


// ! optional chaining
// optional chaining allows us safely access the nested props of an object
// without a risk of getting an error if the property we are trying to access
// don't exist.
// i.e. some data received from a server can be missing an if we use optional
// chaining to try to access this prop we won't get an error

const fetchedData = {
  id: 'id1',
  name: 'name',
  job: {
    title: 'ceo',
    desc: 'ceoceoceo'
  }
}

console.log(fetchedData?.job?.title); // ? symbol is an optional chaining syntax


// ! nullish coalescing
// ?? operator is a nullish coalescing operator which works like || operator in JS
// but it returns the second value ONLY if the first one is an EXPLICIT Null, while
// the || also interprets empty string and undefined as a Null

const a = '';
const b = a ?? 'DEFAULT';