// TypeScript Casting & Type Assertion

// Sometimes you will have information about the type of a value that typescript can't know about

// for example, if your are using document.getElementById, typescript only knowa that this will return some
// kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with
// a given ID.

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "Hello";
let b = a as Two; //this is called less specific
let c = a as Three; //this is called more specific

let d = <One>"World";
let e = <string | number>"World 2";

const addOrContact = (
  a: number,
  b: number,
  c: "add" | "contact"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrContact(2, 2, "contact") as string;

console.log(myVal,'this value is return the string...')

//Be Careful! TS sees no problem - but a string is returned 
let nextVal: number = addOrContact(2, 2, "add") as number;

console.log(nextVal, 'this variable is return the addition Number');

//The unknown is special type
// 10 as string
(10 as unknown) as string;


//The Dom
const img = document.querySelector('img')!
// ! this symbol mean non-null assertion
const myImg = document.getElementById('#img') as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('#img')


img.src
myImg.src
