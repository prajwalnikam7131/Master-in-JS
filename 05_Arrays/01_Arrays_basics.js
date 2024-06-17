// ## Array : The Array object stores a collection of multiple items under a single variable.

// # creating an Array (first type to create an Array):

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

console.log(fruits, typeof (fruits)); // object

// you can create an array, and then provide the elements.

const cars = []; // (second type to create an Array)

cars[0] = 'fortuner';
cars[1] = 'Range-Rover';
cars[2] = 'innova';

console.log(cars, typeof (cars));

// create Array Using new Keyword (third type to create an Array):

const contraryName = new Array('India', 'USA', 'Nepal', 'UAE');

console.log(contraryName, typeof (contraryName));


// ## Accessing Araay Elements :
fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

let fruit = fruits[0];
console.log(fruit);


// ## changing/ Update Element :

fruits[0] = 'watermelon';

console.log(fruits); // [ 'watermelon', 'Banana', 'Orange', 'Mango' ]


// ## Access the first Array element :

let firstElement = fruits[0];
console.log(firstElement); // watermelon

// ## Acessing the last Array element :

let lastElement = fruits[fruits.length - 1];
console.log(lastElement); // Mango


//  ## Looping Array Elements :

for (let i = 0; i <= fruits.length-1; i++) {
    console.log(fruits[i]);    
}