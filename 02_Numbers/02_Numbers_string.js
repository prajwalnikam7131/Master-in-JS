// ## Numeric String : 

// # JavaScript strings can have numeric content :

let x = 100; // x is a Number.
let y = '100' // y is a string.

// # javaScript will try to convert stirng to numbers in all numeric operations.

let a = '100';
let b = '10';
let c = a / b;
console.log(c); // 10

console.log(a * b); // 1000
console.log(a - b); // 90

console.log(a + b); // 10010 (this will not work)

// ## NaN : NaN is a JavaScript reserved word indicating that a number is not a legal Number.

let w = 100 / 'apple';
console.log(w); // NaN

let v = 100 / '10';
console.log(v); // 10

// isNaN : you can use global JavaScript function isNaN() to find out if a value is a not Number.

console.log(isNaN(w)); // true
console.log(isNaN(v)); // false
