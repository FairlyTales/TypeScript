function add(n1: number, n2: number) {
  return n1 + n2; // return type is inferred by default
}

// type can also be set explicitly
function print(number: number): void {
  // type void is used when function don't return anything
  console.log(number);
}

// we can set type Function explicitly
let someFunction: Function;
someFunction = add;
// someFunction = 5; // getting an error here

// we can explicitly set what function should take as arguments and what it should return
let someOtherFunction: (a: number, b: number) => number;

someOtherFunction = add;
// someOtherFunction = print; // getting an error here

// we can even explicitly set function inside a function
let someOtherOtherFunction: (
  a: number,
  b: number,
  func: (num: number) => void,
) => number = add; // we can also set a function right away after this type definition
