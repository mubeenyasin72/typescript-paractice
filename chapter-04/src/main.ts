// Function

//Type Alieas

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

type userId = stringOrNumber;

//Literal types
let myName: "Mubeen";
let username: "mubeenyasin" | "mianmubeen" | "mmubeenyasin";

//function
const addnumber = (x: number, y: number): number => {
  return x + y;
};
console.log(addnumber(23, 34), "this is the function in the typescript...");
const logMessage = (message: any) => {
  console.log(message);
};
logMessage("Hello World!");
logMessage(addnumber(23, 34));

let subtract = function (c: number, d: number): number {
  return c - d;
};

//math function with type
type mathFunction = (a: number, b: number) => number;
//math function with interface
interface mathFunction2 {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

console.log(
  multiply(12, 23),
  "this is the multiply function with proper mathFunction type is using in this method..."
);

//Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    // TypeCard
    return a + b + c;
  }
  return a + b;
};
//default param value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(addAll(34, 23, 345));
logMessage(sumAll(67, 89));

//Rest Parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, current) => prev + current);
};
logMessage(total(100, 2, 3, 4, 5, 6, 7, 8, 9));


const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const inifinte = () => {
    let i: number = 1
    while (true) {
        console.log(`i is ${i++}`);
        i++
        if (i > 100) break;
    }
}
// logMessage(inifinte())
const isNumber = (value: any): boolean =>{
    return typeof value === 'number'?true:false
}
logMessage(isNumber("this is String Value"))
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return "String";
    if (typeof value === 'number') return 'Number';
    return createError("This Should Never happen...!")
}

logMessage(numberOrString(12))