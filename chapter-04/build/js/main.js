"use strict";
// Function
//Literal types
let myName;
let username;
//function
const addnumber = (x, y) => {
    return x + y;
};
console.log(addnumber(23, 34), "this is the function in the typescript...");
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello World!");
logMessage(addnumber(23, 34));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(12, 23), "this is the multiply function with proper mathFunction type is using in this method...");
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        // TypeCard
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(34, 23, 345));
logMessage(sumAll(67, 89));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMessage(total(100, 2, 3, 4, 5, 6, 7, 8, 9));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const inifinte = () => {
    let i = 1;
    while (true) {
        console.log(`i is ${i++}`);
        i++;
        if (i > 100)
            break;
    }
};
// logMessage(inifinte())
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
logMessage(isNumber("this is String Value"));
const numberOrString = (value) => {
    if (typeof value === 'string')
        return "String";
    if (typeof value === 'number')
        return 'Number';
    return createError("This Should Never happen...!");
};
logMessage(numberOrString(12));
