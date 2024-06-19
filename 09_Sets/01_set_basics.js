/*
    # JavaScript Sets :
        A JavaScript Set is a collection of unique values.
        Each value can only occur once in a Set.
        The values can be of any type, primitive values or objects.
        If you add equal elements, only the first will be saved.
*/
/*
    # How to Create Set : its two type -
        1) Passing an array to new Set(). OR
        2) Create an empty set and use add() to add values.
*/

// # new Set() Method : Pass an array to the new Set() method.

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

console.log(vowels); // Set(5) { 'a', 'e', 'i', 'o', 'u' }

console.log(typeof (vowels)); // object

// # Create an empty set and use add() to add values:

const consonants = new Set();

consonants.add('b');
consonants.add('c');
consonants.add('d');
consonants.add('f');

console.log(consonants); // Set(4) { 'b', 'c', 'd', 'f' }


// # create a set and variables :

const x = 'x';
const y = 'y';
const z = 'z';

consonants.add(x);
consonants.add(y);
consonants.add(z);
consonants.add(z);

console.log(consonants); // Set(7) { 'b', 'c', 'd', 'f', 'x', 'y', 'z' }


// # set using for-of loop :

for (const consonant of consonants) {
    console.log(consonant);
}


// # we can use 'instanceof set' property to check is set or Not.

let isSet = consonants instanceof Set;
console.log(isSet); // true