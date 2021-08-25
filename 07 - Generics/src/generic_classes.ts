// ! generic classes
// we can also create generic classes

// here we specify the generic type 'T'
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
}

// and here we use this class to create 3 objects with each one working
// with specific type of data
const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();
const anyStorage = new DataStorage<string | number>();


// ! there are also a couple built in generic types in TS
// i.e.:

const someArray: Readonly<number[]> = [2, 6, 73];

// TS tells us that we can't do this since the type of our array is
// 'readonly number array'
someArray.push(41);
someArray.pop();


// ! there are many more utility types, check the docs:
// ! https://www.typescriptlang.org/docs/handbook/utility-types.html
