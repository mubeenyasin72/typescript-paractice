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

let myObj: object
myObj = []
console.log(typeof myObj)
