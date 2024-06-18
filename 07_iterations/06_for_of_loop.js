// # for-of Loop : The JavaScript for of statement loops through the values of an iterable object.

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.

// syntax :
// for (const iterator of object) {
// }


// # for of loop in array:

const arr = [1, 2, 3, 4, 5];

for (const arrs of arr) {
    console.log(arrs); // 1 2 3 4 5
}

// # for of loop in string:

const greetings = `Hello wrold!`;

for (const greeting of greetings) {
    console.log(greeting); 
}


// map:

// How to create map:
const map = new Map();

// how to set properties:

map.set(`IN`, `India`);
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);


// how to access keys:

for (const [keys] of map) {
    console.log(keys);
}


// how to access values:

for (const [keys, values] of map) {
    console.log(values);
}


// how to access values:

for (const [keys, values] of map) {

    console.log(keys, `:`, values);
}