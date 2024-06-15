// ## JavaScript Math Object : the javaScript Math Object allows you to perform mathematical task on numbers.


// ## Math Methods :

// # Math.round(x) : returns the nearest integers.

let x = 3.14;

console.log(Math.round(x)); // 3

// # Math.ceil(x) : returns the value of x rounded up to its nearest integer.

console.log(Math.ceil(x)); // 4

// # Math.floor(x) : returns the value of x rounded down to its nearest integer.

console.log(Math.floor(x)); // 3


// # Math.trunc(x) : returns the integer part of x:

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(4.7));  // 4
console.log(Math.trunc(4.4));  // 4
console.log(Math.trunc(4.2));  // 4
console.log(Math.trunc(-4.2)); // -4


// # Math.pow(x, y) : returns the value of x to the power of y

let a = 5;
let b = 2;

console.log(Math.pow(a, b)); // 5 x 5 = 25;


// # Math.sqrt(x) : returns the squart of x.

console.log(Math.sqrt(64)); // 8

// # Math.abs(x) : returns the absolute(Positive) value of x

console.log(Math.abs(-4.7)); // 4.7
console.log(Math.abs(4.7));  // 4.7


// Math.min() & Math.max() : can be used to find lowest or highest value in a list of arguments.

let minValue = Math.min(0, 150, 30, 20, -8, -200);
console.log(minValue); // -200

let maxValue = Math.max(0, 150, 30, 20, -8, -200);
console.log(maxValue); // 150


// # Math.random() : returns a random number between 0(inclusive), and -1(exclusive).

console.log(Math.random()); 

// # Math.log(x) method : returns the natural logarithm of x.

// # Math.log2(x) Method : returns the base 2 logarithm of x.

// # Math.log10(x) Method : returns the base 10 logarithm of x.
