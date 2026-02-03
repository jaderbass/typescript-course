function first<T>(items: T[]): T {
  return items[0];
}

const x = first([1, 2, 3]);
const y = first(['a', 'b'])
console.log(typeof x, typeof y);


function getGenericArray<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let numberArray1 = [10, 20, 30, 40];
let numberArray2 = getGenericArray<number>(numberArray1);
numberArray2.push(50);
// numberArray1.push('This is not a number');
console.log(numberArray1, numberArray2);

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, 'Hallo');
let returnString = identity<string, string>('100', 'Hallo');
let returnBoolean = identity<boolean, string>(true, 'Hallo');

returnNumber *= 100;
// returnString *= 100;
// returnBoolean *= 100;

console.log(returnNumber, returnString, returnBoolean);
