// ## Array search Methods :

// # indexOf() : The indexOf() method searches an array for an element value and returns its position. If Not found returns -1.

const fruits = ['Apple', 'Mango', 'Apple', 'Orange', 'kiwi'];
console.log(fruits);

// only first occurance
let position = fruits.indexOf('Apple');
console.log(position); // 0 


// # lastIndexOf() : this method search an array for an element value but start searching at ending and returns the position of the last occurrence of the specified element.

let lastIndex = fruits.lastIndexOf('Apple');
console.log(lastIndex); // 2


// # includes() Method :  This allows us to check if an element is present in an array (including NaN, unlike indexOf). if present returns true otherwise false.

console.log(fruits.includes('Mango')); // true
console.log(fruits.includes('jackFruit')); // false


// # find() Method : The find() method returns the value of the first array element that passes a test function.


// # findIndex() Method : The findIndex() method returns the index of the first array element that passes a test function.


// # findLast() Method : the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

// # findLastIndex() Method : The findLastIndex() method finds the index of the last element that satisfies a condition.