// ## JavaScript Number Methods :

let a = 100;
console.log(a); // number

// # toString() method : returns a number as a string.

console.log(a.toString()); // string

// # toExponential() method :
let b = 9.656;
console.log(b); // 9.656

console.log(b.toExponential(2)); // 9.66e+0
console.log(b.toExponential(4)); // 9.6560e+0

// # toFixed() method :
let c = 9.656;

console.log(c.toFixed(0)); // 10
console.log(c.toFixed(1)); // 9.7
console.log(c.toFixed(4)); // 9.6560
console.log(c.toFixed(6)); // 9.656000

// # toPrecision() method :

let d = 9.656;

console.log(d.toPrecision()); // 9.656
console.log(d.toPrecision(2)); // 9.7
console.log(d.toPrecision(4)); // 9.656
console.log(d.toPrecision(6)); // 9.65600


// ## Gobal JavaScript Method :

// # parseInt() method : parses its argumnets and return a whole Number.

// passing a string.
console.log(parseInt('Ram')); // NaN 

// pass a variable.
let Ram;
console.log(parseInt(Ram)); // NaN 

// number as a string then convert a Number.
console.log(parseInt('100')); // 100 is a Number. 

// passing a Number.
console.log(parseInt(200)); // 200 is a Number.


// # e.g. to check a Number or Not.
let x = 'prajwal';

if (parseInt(x)) {
    console.log("its a Number: " + x);
} else {
    console.log(x + " is not a Number.");
}


// # Number() method : The Number() method can be used to convert JavaScript variables to numbers:

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('10')); // 10
console.log(Number('10.33')); // 10.33
console.log(Number(10.33)); // 10.33
console.log(Number('Ramm')); // NaN


// ## Number Object Methods : These object methods belong to the Number object.

// # Number.isInteger() method : returns 'true' if the arguments is an integer.

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.11)); // false

// # Number.isSafeInteger() Method : A safe integer is an integer that can be exactly represented as a double precision number.

console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(9007199254740991)); // false
console.log(Number.isSafeInteger(9007199254740992)); // false

// # Number.parseFloat() Method : Converts a string to a number.

console.log(Number.parseFloat('10'));       // 10
console.log(Number.parseFloat('10.33'));    // 10.33
console.log(Number.parseFloat('10 years')); // 10
console.log(Number.parseFloat('years 10')); // NaN

// # Number.parseInt() Method : Converts a string to a whole number.

console.log(Number.parseInt('10'));       // 10
console.log(Number.parseInt('10.33'));    // 10
console.log(Number.parseInt('-10.33'));   // -10
console.log(Number.parseInt('10 20 30')); // 10
