// union types: type | type
// allows several types for a variable
function add(n1: number | string, n2: number | string) {
  // this type check sometimes needed when we work with union type
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

// ! literal types
// check type info provided by IDE: for let the type is number
let pi = 3.14;

// for const the type is 3.14 (variable's value) because it's a const, it's value
// won't change
const PI = 3.14;

function func(input1: number, input2: string, PI_constant: 3.14) {
  console.log(input1);
  console.log(input2);
  console.log(PI_constant);
}

func(1, 'asda', PI);

console.log(add(1, 2));

// ! type alias
// we can create our own combinations of types
type NumAndString = number | string;
let numOrSting: NumAndString = 2;
numOrSting = 'string';