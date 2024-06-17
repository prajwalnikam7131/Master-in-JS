// ## Array Iteration Method :

// # forEach() method : The forEach() method calls a function (a callback function) once for each array element.

// Note : The function arguments are follows. -> element, index, array.

const languages = ['js', 'java', 'cpp', 'py', 'cp'];

languages.forEach((element, index, array) => {
    // console.log(element, index, array);   
});


const numbers = [5, 9, 3, 17, 23];

numbers.forEach(element => {
    console.log(element + 1); // 6 10 4 18 24
});


// Array map() : The map() method creates a new array by performing a function on each array element. The map() method does not change the original array.

const points = [2, 4, 3, 9, 4, 2, 7];

function addTwo(value) {
    return value + 2;
}

const newPoints = points.map(addTwo);
console.log(newPoints); // [4, 6, 5, 11, 6, 4, 9]


// ## Array every() : The every() method checks if all array values pass a test. returns true or false.

const arr = [12, 10, 23, 8, 32];

function check(value) {
    return value > 18;
}

let checkarris18 = arr.every(check);
console.log(checkarris18); // false 


// ## Array some() : The some() method checks if some array values pass a test.

let checkSome = arr.some(check);
console.log(checkSome); // true


// ## Array.from() : The Array.from() method returns an Array object from any object with a length property or any iterable object.

let arryFrom = Array.from("ABCDEFG");
console.log(arryFrom); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']


// ## Array keys() : The Array.keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const keys = fruits.keys();
console.log(keys);

for (const key of keys) {
    console.log(key); // 0 1 2 3   
}


// ## Array entries() : The entries() method returns an Array Iterator object with key/value pairs:

const fruit = fruits.entries();

for (const key of fruit) {
    console.log(key);
}

//  Array with() : the Array with() method as a safe way to update elements in an array without altering the original array.


const mylist = fruits.with(1, 'kiwi');
console.log(mylist); // ['Banana', 'kiwi', 'Apple', 'Mango']


// ## Array Spread (...) : 

const m1 = ['jan', 'feb', 'march', 'april'];
const m2 = ['sep', 'oct', 'nov', 'dec'];

const allm = [...m1, ...m2];
console.log(allm);