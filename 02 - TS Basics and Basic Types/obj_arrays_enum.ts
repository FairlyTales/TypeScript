// explicit types (not the best practice)
const explicitPerson: {
  name: string;
  age: number;
  hobbies: string[]; // string array type
  tuple1: [number, string]; // tuple type with explicit
} = {
  name: 'lol',
  age: 22,
  hobbies: ['asda', 'asgd'],
  tuple1: [1, 'adsafsdf'],
};

// enum - is a custom type, it assigns numbers to labels which is quite comfortable
// way to implement some readable global identifiers
enum Role {
  ADMIN = 'da_admin', // they values can be explicitly initialized
  READ_ONLY = 1,
  AUTHOR,
}

// inferred types
const person = {
  name: 'lol',
  age: 22,
  hobbies: ['kek', 'lul', 1], // arrays are also typed
  role: Role.ADMIN,
};

// LOL, ANY! The best type in TS!
let anyVariable: any = 'lol';
anyVariable = 1;
anyVariable = {};
anyVariable = [];

console.log(Role.ADMIN);
