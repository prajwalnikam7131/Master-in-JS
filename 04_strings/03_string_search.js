// ## String search Method :

// # indexOf(position) : returns the index(Position) of the first occurence of a string in a string, or it retruns -1 if string is not found.

let text = "The cat that got the cat food was very happy";

let textIndexOf = text.indexOf("cat");
console.log(textIndexOf); // 4 (search first occrance Not second.)

//second parameter as the starting position for the search.
let textIndexOf2 = text.indexOf('cat', 2); // 2 means start searching at 2 position to end.
console.log(textIndexOf2); // 4


// # lastIndexOf() : returns the index of the last occurrence of a specified text in a string, or it returns -1 if string is not found.

let lastIndexOf = text.lastIndexOf('cat');
console.log(lastIndexOf); // 21 

// The lastIndexOf() methods searches backwards. if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
let lastIndexOf2 = text.lastIndexOf("cat", 15);
console.log(lastIndexOf2); 


// ## search() method : serach() method searches a string for a string and returns the position of the match. search() method and indexOf() method are not equal search() method is more than powerful of indexOf() method and search() method cannot accept second argument.

let searchString = text.search('food');
console.log(searchString); // 25

let searchString2 = text.search(/food/); // or you can find this way
console.log(searchString2); // 25


// ## match() Method : match() method returns an array containing the results of matching a string agianst a string.

let text3 = "The rain in SPAIN stays mainly in the plain";

let count1 = text3.match('ain');
console.log(count1);

let count2 = text3.match(/ain/);
console.log(count1);

let count3 = text3.match(/ain/g); // g for Gobal search.
console.log(count3); // [ 'ain', 'ain', 'ain' ]

let count4 = text3.match(/ain/gi); // i for case-insensitive search for "ain"
console.log(count4); // [ 'ain', 'AIN', 'ain', 'ain' ]


// ## matchAll() Method : returns an iterator containing the results of matching a string against a string.     (matchAll() method is old method.)

let text4 = "I love cats. Cats are very easy to love. Cats are very popular.";

const iterator = text4.matchAll('Cats');
console.log(iterator);

const iterator2 = text4.matchAll(/Cats/g);
console.log(iterator2);

const iterator3 = text4.matchAll(/Cats/gi);
console.log(iterator3);


// ## String includes() : The includes() method returns true if a string contains a specified value. Otherwise it returns false. includes() is case sensitive.

let checkInclue1 = text4.includes('love');
console.log(checkInclue1); // true

let checkInclue2 = text4.includes('code');
console.log(checkInclue2); // false


// startsWith() Method : The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false. startsWith() is case sensitive.

text4 = "I love cats. Cats are very easy to love. Cats are very popular.";

let checkStartWith1 = text4.startsWith('I');
console.log(checkStartWith1); // true

let checkStartWith2 = text4.startsWith('L');
console.log(checkStartWith2); // false

// A start position for the search can be specified:

let checkStartWith3 = text4.startsWith('l', 2);
console.log(checkStartWith3); // true

let checkStartWith4 = text4.startsWith('l', 0);
console.log(checkStartWith4); // false


// ## endsWith() Method : The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false. endsWith() is case sensitive.

text4 = "I love cats. Cats are very easy to love. Cats are very popular";

let checkEndsWith1 = text4.endsWith('popular');
console.log(checkEndsWith1); // true

let checkEndsWith2 = text4.endsWith('r');
console.log(checkEndsWith2); // true

