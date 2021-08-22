let naniKore: unknown;
let thisIsSting: string;

naniKore = 5;
naniKore = 'lol';

// thisIsSting = naniKore; // we can't assign unknown to any other type

// we need to perform a type check before assigning unknown to any other type
if (typeof naniKore === 'string') thisIsSting = naniKore;

// function can also have a never type - it tells us that this function
// will never return anything, it's useful for functions that
// should throw and error or an exception
function error(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}
