
// # What is string : strings are storing text and written with quotes.

const doubleQuotes_string = "I am single line text with double quotes.";
const singleQuotes_string = 'A';
const singleQuotes_WithNumber = '42';

// # quotes inside quotes:

let str1 = " It's alright! ";
let str2 = " He is called 'Prajwal' ";
let str3 = ' He is called also "Prajwal" ';

/*
    # Template Strings:
        Templates were introduced with ES6.
        Templates are strings enclosed in backticks ``.
        Templates allows single and double quotes inside a string:
*/

let templateString = `this is the template method to write`;

// # Escape Characters: (\), ('), (") :

let templateStringOne = `This is Template\\ string.` // This is Template\ string.
console.log(templateStringOne);

let templateStringtwo = `This is Template\'s string.` // This is Template's string.
console.log(templateStringtwo);

let templateStringThree = `we are the \"vikings\" of the north.` // we are the "vikings" of the north.
console.log(templateStringThree);
