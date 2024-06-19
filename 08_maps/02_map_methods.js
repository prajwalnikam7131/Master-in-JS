// ## JavaScript Map Methods & Properties : 

const fruits = new Map([
    ['apple', 280],
    ['orange', 160],
    ['mango', 240]
]);

// # new Map() method : This method was already learned in the previous chapter.

// # Map.set() method : This method was already learned in the previous chapter.

// # Map.get() method : This method was already learned in the previous chapter.


// # Map.size property : The size property returns the number of elements in a map.

let mapSize = fruits.size;
console.log(mapSize); // 3

// # Map.delete() : The delete() method removes a map element.

let deleteitem = fruits.delete('orange');
console.log(fruits);

// # The clear() : The clear() method removes all the elements from a map.


// const clearAll = fruits.clear(); 
console.log(fruits); // Map(0) {}

// Map.has() : The has() method returns true if a key exists in a map.

let isExits = fruits.has('apple');
console.log(isExits); // true


// # Map.forEach() method : The forEach() method invokes a callback for each key/value pair in a map.

let text = '';
fruits.forEach( function(value, key) {

    console.log(value,key);

    text = text + key + ' = ' + value;

});
console.log(text);

// # Map.entries() : The entries() method returns an iterator object with the [key,values] in a map.

let entries = fruits.entries();
console.log(entries);

// using for of loop:
for (const entrie of entries) {
    console.log(entrie);
}


// # Map.keys() : The keys() method returns an iterator object with the keys in a map:

let fruitKeys = fruits.keys();
console.log(fruitKeys);

// Map.values() : The values() method returns an iterator object with the values in a map.

let fruitValues = fruits.values();
console.log(fruitValues);

// You can use the values() method to sum the values in a map.
let totalSum = 0;

for (const value of fruits.values()) {
    console.log(value);
    totalSum = totalSum + value;
}

console.log(totalSum);
