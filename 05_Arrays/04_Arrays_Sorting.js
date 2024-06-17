// JavaScript Sort Methods : There are two types of Method first is Alphabetical Sort & second is Numeric Sort methods.


// ## Aphabetic Sort Methods : 
const fruits = ['Orange', 'Banana', 'Apple', 'Kiwi'];


// # sort() : sort an array aphabetically.

const sortArray = fruits.sort();
console.log(sortArray); // ['Apple', 'Banana', 'Kiwi', 'Orange']


// # reverse() : reverses the element in an array.

const reverseArray = fruits.reverse();
console.log(reverseArray); //['Orange', 'Kiwi', 'Banana', 'Apple']


// # toSorted() :  the toSorted() method as a safe way to sort an array without altering the original array.

const months = ['Jan', 'Feb', 'March', 'April', 'May'];

const toSortedArr = months.toSorted();
console.log(toSortedArr); // ['April', 'Feb', 'Jan', 'March', 'May']

console.log(months); // ['Jan', 'Feb', 'March', 'April', 'May']


// toReversed() : the toReversed() method as a safe way to reverse an array without altering the original array.

const toReversArr = months.toReversed();
console.log(toReversArr); // ['May', 'April', 'March', 'Feb', 'Jan']

console.log(months); // ['Jan', 'Feb', 'March', 'April', 'May']



// ## Numeric Sort Methods : the sort() method will produce incorrect result when sorting numbers. thats why we used a comparison functions.

const numbers = [40, 100, 1, 5, 25, 10];

let sortNumbers = numbers.sort(function (a, b) { return a - b }); // acending order
console.log(sortNumbers); // [ 1, 5, 10, 25, 40, 100 ]

let sortdecending = numbers.sort(function (a, b) { return b - a }); // decending order
console.log(sortdecending); // [ 100, 40, 25, 10, 5, 1 ]
