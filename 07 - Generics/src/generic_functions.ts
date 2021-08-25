// ! generics
// generics - обобщённые типы - allows us to "reserve" a place for a type which will be
// later set to a specific type by a function call, method call or simply by a user input

// array actually is a generic type Array which is later set to Array with strings in it
const names: Array<string> = ['max', 'alex'];



// ! custom generic types
// we can create generic types ourselves:

// <T> - is a generic type which we named 'T', 'U' - is a second generic type
// right now, during declaration we and TS don't know what these type will actually
// be, but we know that objA and objB will have different types (but they can also be the same)
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// here the actual types of 'T' and 'U' are defined:
// T becomes {name: string; sex: string;} and U becomes {age: number;}
const mergedObj = merge(
  {
    name: 'ahmed',
    sex: 'twice a day',
  },
  {
    age: 30,
  },
);

// here we use the same function and generic types are again populated depending
// on the content of the objects
const mergedObj1 = merge(
  {
    name: 'wilhelm',
    age: 69,
  },
  {
    job: 'nice',
  },
);

// if we wanted to use explicit standard types upon the function call we
// should've done this:
// but there is no need for it since TS infers these types and "inserts" them
// into the generic types "placeholders"
const mergedObj2 = merge<{ name: string; age: number }, { job: string }>(
  {
    name: 'wilhelm',
    age: 69,
  },
  {
    job: 'nice',
  },
);



// ! constraints for generic types
// we can add constrains to the generics in order to make sure that they are the
// type of we want
// i.e. here we are telling that 'T' and 'U' must be of type object, but we don't really
// care about what's inside of these objects

function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// ! we can also use 'keyof' with 'extends' to specify that the type must
// have a specific key

// here we tell that 'U' must have a key of 'T' (which must be an object)
function lol<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

lol({ name: 'NAMAE' }, 'name');
