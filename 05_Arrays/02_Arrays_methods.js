// ## JavaScript Property and Methods :

const contrary = ['India', 'UAE', 'USA', 'Germany', 'France', 'Japan'];
console.log(contrary);

let cars = ['Fortuner', 'innova', 'Range-Rover'];

// # length property : returns the length(size) of Array.

let arrLength = contrary.length;
console.log(arrLength); // 6 (start with 0 index)


// # toString() Method : converts an array to a string of array values.

let arrToStr = contrary.toString();
console.log(arrToStr); // India,UAE,USA,Germany,France,Japan


// # at() Method : returns the index element from an array.

let indexElement = contrary.at(1);
console.log(indexElement); // UAE


// # join() Method : join all array elements into a string. it is same as toString method but in additionally you can specifiy the separator.

let joinElement = contrary.join();
console.log(joinElement);

let joinElement2 = contrary.join(', ');
console.log(joinElement2);


// # push() Method : The push() method add a new element to an array at the end. 

contrary.push('spain', 'Nepal');

// The push() method returns a new array length.
console.log(contrary); // ['India', 'UAE', 'USA', 'Germany', 'France', 'Japan', 'spain', 'Nepal,]


// # pop() Method : The pop() method remove the last element from an array.

contrary.pop(); // remove 'Nepal'

console.log(contrary); // ['India', 'UAE', 'USA', 'Germany', 'France', 'Japan', 'spain']


// # unshift() method : The unshift() method add a new element to an array at the beginning. 

contrary.unshift('Ice-Land');

console.log(contrary); // ['Ice-Land', 'India', 'UAE', 'USA', 'Germany', 'France', 'Japan', 'spain']

// # shift() method : The shift() method removes the firs array element.

contrary.shift();

console.log(contrary); // ['India', 'UAE', 'USA', 'Germany', 'France', 'Japan', 'spain']


// # Append a new element using Length property : 

contrary[contrary.length] = 'Nor-Way';

console.log(contrary);


// # concat() method : create a new array by merging(concatenating) exiting arrays.

const newArray = contrary.concat(cars);
console.log(newArray);


/* 
    spread() operator Methods instead of concat() method: 

       * The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
       * This allows us to quickly copy all or parts of an existing array into another array.
*/

const spread = [...contrary, ...cars];
console.log(spread);


/*
    flat() Method:
        The flat() method concatenates sub-array elements.
*/
const numArr = [[1, 2], [3, 4], [5, 6]];
const numArr2 = [1, 2, [3, [4, 5, 6], 7], 8];

const newNumArr = numArr.flat();
console.log(newNumArr); // [1, 2, 3, 4, 5, 6]

const newNumArr2 = numArr2.flat();
console.log(newNumArr2); // [1, 2, 3, [ 4, 5, 6 ], 7, 8]

const newNumArr3 = numArr2.flat(Infinity);
console.log(newNumArr3); // [1, 2, 3, 4, 5, 6, 7, 8]


// # splice() Method : used to add new element to an array.
// In splide() method have two parameters, first pararameter defines the position where new elements should be added. and second parameter defines how many elements should be removed.

cars = ['Fortuner', 'innova', 'Range-Rover'];

cars.splice(1, 0, 'swift', 'BMW');

console.log(cars); // ['Fortuner', 'swift', 'BMW', 'innova', 'Range-Rover']


// # slice() Method : The slice() method slices out a piece of an array into a new array.

const newFruits = [`Apple`, `Mango`, `Lemon`, `Banana`, `pineapple`, `straberry`];

const slice1 = newFruits.slice(4);
console.log(slice1); // ['pineapple', 'straberry']

const slice2 = newFruits.slice(-4);
console.log(slice2); // ['Lemon', 'Banana', 'pineapple', 'straberry']

const slice3 = newFruits.slice(1, 4);
console.log(slice3); // ['Mango', 'Lemon', 'Banana']

const slice4 = newFruits.slice(4, 1);
console.log(slice4); // []

const slice5 = newFruits.slice(-1, 4);
console.log(slice5); // []

const slice6 = newFruits.slice(-4, 1);
console.log(slice6); // []

const slice7 = newFruits.slice(-1, -4);
console.log(slice7); // []

const slice8 = newFruits.slice(-4, -1);
console.log(slice8); // ['Lemon', 'Banana', 'pineapple']
