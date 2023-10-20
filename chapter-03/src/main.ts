// Arrays
let stringArr = ["one", "hey", "Mubeen"];
let guitars = ["start", "Les Pual", 5150];
let mixedData = ["EVH", 1984, true];

stringArr[0] = "Muhammad";
stringArr.push("Yasin");

guitars[0] = 1984;
guitars.unshift("Fender");

guitars = stringArr;
mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

let myTuple: [string, number, boolean] = ["Mubeen", 24, true];
let mixed = ["Yasin", 55, true];
mixed = myTuple;

myTuple[1] = 23;

//Objects

let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;
console.log(myObj, "this is the object value");

myObj = {};
const exampleObj = {
  prop1: "Muhammad Mubeen Yasin",
  prop2: true,
};

exampleObj.prop1 = "Muhammad Mubeen";

console.log(exampleObj, "this is the new object that we created");

type Guitarist = {
  name: string;
  active?: boolean; // by adding the ? with the attribute we make that is optional...
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Mubeen",
  active: false,
  albums: ["The Dark Side of the Moon", 1994],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};

console.log(greetGuitarist(evh));
interface newTypeForTesting {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

interface newInterface2 extends newTypeForTesting {
  age: number;
}

let obj2: newInterface2 = {
  name: "M Mubeen",
  active: true,
  albums: ["The Dark Side of the Moon", 1994],
  age: 30,
};

console.log(
  obj2,
  "this is the object that is created through the interface..."
);


//Enums
//unlike most typescript features, enums are not a type-level addition to javascript but something added to the language and runtime