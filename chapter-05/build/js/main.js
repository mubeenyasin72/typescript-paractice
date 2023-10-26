"use strict";
// TypeScript Casting & Type Assertion
// convert to more or less specific
let a = "Hello";
let b = a; //this is called less specific
let c = a; //this is called more specific
let d = "World";
let e = "World 2";
const addOrContact = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrContact(2, 2, "contact");
console.log(myVal, 'this value is return the string...');
//Be Careful! TS sees no problem - but a string is returned 
let nextVal = addOrContact(2, 2, "add");
console.log(nextVal, 'this variable is return the addition Number');
//The unknown is special type
// 10 as string
10;
//The Dom
const img = document.querySelector('img');
// ! this symbol mean non-null assertion
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
