/*
    what is map?
     A Map holds key-value pairs where the 'keys' can be any datatype.
     A Map remembers the original insertion order of the keys.
     A Map does not contain duplicate key-value pairs.
*/

/* 
    How to create a Map : its two type -
      1) passing an Array to new Map() OR
      2) Create a Map and use Map.set().
*/

// # The new Map() Method : we can create a Map by passing an Array to the new Map() constructor:

const fruits = new Map([
  ['apple', 300],
  ['banana', 40],
  ['orange', 140],
  ['apple', 300],
  ['banana', 30]
]);

console.log(typeof (fruits)); // object

console.log(fruits); // { 'apple' => 300, 'banana' => 30, 'orange' => 140 }


// # The set() Method :  we can add elements to a Map using the set() method.

fruits.set('kiwi', 120);
fruits.set('guava', 160);

console.log(fruits);
// output :- Map(5) { 'apple' => 300, 'banana' => 30, 'orange' => 140, 'kiwi' => 120, 'guava' => 160 }


// The set() method can also be used to change/update existing Map values.

fruits.set('apple', 350);
console.log(fruits);


// # The get() Method : The get() method gets the 'value of a key' in a Map.

let getValue = fruits.get('orange');
console.log(getValue); // 140

// # The instanceof Map property : to check is map or not, instanceof Map returns true if is map, otherwise returns false.

const isMap1 = fruits instanceof Map;
console.log(isMap1); // true

const nums = [1, 2, 3, 4, 5];

let isMap2 = nums instanceof Map;
console.log(isMap2); // false (beacase its array not map)