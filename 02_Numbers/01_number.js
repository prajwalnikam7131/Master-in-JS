// # JavaScript has only one type of Number. Numbers can be writeen with or without decimal.

let x = 3.14; // A Number with decimal.
let y = 3; // A Number without decimal.

console.log(typeof (x)); // Number
console.log(typeof (y)); // Number

// ## Adding Numbers and Strings:

// # If we add two numbers, the result will be a Number.

let a = 10;
let b = 20;
let add = a + b;
console.log(add); // 30

// # If we add two string, the result will be a String.

let d = '10';
let e = '20';
let f = d + e;
console.log(f); // 1020

// If we add a Number and a String, the result will be string.

let g = 10;
let h = '20';
let i = g + h;
console.log(i); // 1020

// If we add a String and a Number, the result will be string.

let j = '10';
let k = 20;
let l = j + k;
console.log(l); // 1020

