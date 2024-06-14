// ## Boolean : Boolean value that can only have one of two values like Yes/No.

// # you can use the boolean() function to find out if an expression is true or false.

console.log(Boolean(10 > 9));
console.log(10 > 9); // direct value assign.

// # Everything With a "value" is True.

console.log(Boolean(100)); // true
console.log(Boolean(3.4)); // true
console.log(Boolean(-15)); // true
console.log(Boolean('hello')); // true
console.log(Boolean('false')); // true
console.log(Boolean(7 + 1 + 3.14)); // true


// # Everything Without a "value" is False.

// # the boolean value of 0 is false.
let x = 0; 
console.log(Boolean(x)); // false

// # the boolean value of -0 is false.
let y = -0; 
console.log(Boolean(y)); // false

// # The Boolean value of "" (empty string) is false.
let a = ""; 
console.log(Boolean(a)); // false

 // # The Boolean value of undefined is false.
let b;
console.log(Boolean(b)); // false

 // # The Boolean value of null is false.
let c = null;
console.log(Boolean(c)); // false

// # The Boolean value of false is (you guessed it) false.
let d = false; 
console.log(Boolean(d)); // false

// # The Boolean value of NaN is false.
let e = 10/'hello'; 
console.log(e); // NaN
console.log(Boolean(e)); // false


// ## important Note : The boolean value of an expression is the basis for all JavaScript Comparison and Conditions.