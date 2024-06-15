// ## JavaScript String Methods :

// # Note : JavaScript Strings are primitive and imputable that means All strings methods produces a new string without alternating the original string.

// # string length : the length property returns the length of a string.

let text = 'ABCDEFGHIJKLMN';

let textLenght = text.length;
console.log(textLenght); // 14

// ## Extracting String characters :- There are 4 methods for extracting characters : at() method, charAt() method, charCodeAt() method and using property access 

// # charAt(position) : The charAt() method returns the character at a specified index(Position) in a string.

let str = 'I Love Coding.';

let strChar = str.charAt(2);
console.log(strChar); // L (Index start with 0(zero))


// at(position) : returns the character at a specified index(position) in a string. and It allows the use of neagative index while charAt() method do Not.

let characterAt = str.at(0);
console.log(characterAt); // I

let characterAt_2 = str.at(-2);
console.log(characterAt_2); // g


// # charCodeAt(position) : returns the code of the character at a specified index in string.

let charCode = str.charCodeAt(0);
console.log(charCode); // 73


// ## Extracting String Part :- There are 3 methods for extracting a part of string : slice(start, end), substring(start, end), substr(start, lenght).


// # slice(start, end) : slice extract a part of string and returns the extracted part in a new string. this method take 2 parameters: start position and, end position (end Not included).

let slicepart = str.slice(2, 6);
console.log(slicepart); // Love


// # substring(start, end) : substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

let substringpart = str.substring(2, 6);
console.log(substringpart); // Love


// ## slice() method & substring() method give same result. the difference between slice and substring are as follow:

let sentence_1 = 'I Love coding'; // length is 13


// if start == stop, both return as an empty string.
console.log(sentence_1.slice(3, 3)); // empty
console.log(sentence_1.substring(3, 3)); // empty

// if stop is ommited, both extracts characters till the end of the string.
console.log(sentence_1.slice(5)); // e coding
console.log(sentence_1.substring(5)); // e coding

// if any argument is greater than the string length, then till the end of the string print.
console.log(sentence_1.slice(0, 15)); // I love coding

// In substring(), if start > stop then the function swaps both arguments.
console.log(sentence_1.substring(15, 0)); // I love coding
console.log(sentence_1.slice(15, 0)); // empty (in slice)

// In substring(), if any arguments is negative or NaN, it is treated as 0.
console.log(sentence_1.substring(-3, 7)); // I love
console.log(sentence_1.substring(7, 3)); // ove

// In slice(), If start > stop, This function will return an empty string.
console.log(sentence_1.slice(9, 3)); // empty

// In slice(), If the start is negative, It sets char from the end of the string, like substr().
console.log(sentence_1.slice(-6)); // coding
console.log(sentence_1.slice(-6, -1)); // codin
console.log(sentence_1.slice(-6, 3)); // empty


// ## Converting to Upper and Lower case :- A string is converted to upper case with toUpperCase(), A string is converted to lower case with toLowerCase().

let sentence_2 = 'I Love Programming';

// # toUpperCase() :
console.log(sentence_2.toUpperCase()); // I LOVE PROGRAMMING

// # toLowerCase() :
console.log(sentence_2.toLowerCase()); // i love programming


// ## concat() method : join two or more string.

let concatStr = sentence_1.concat(", " + sentence_2);
console.log(concatStr);


// # trim() method:  to remove white-spaces both sides.

const trimSentence = sentence_1.trim();
console.log(trimSentence); // "I Love Coding."


// # trimStart() method : to remove white-spaces only from the start of the string.

const trimStartSentence = sentence_1.trimStart();
console.log(trimStartSentence); // "I Love Coding.  "

// # trimEnd() method : to remove white-spaces only from the end of the string.

const trimEndSentence = sentence_1.trimEnd();
console.log(trimEndSentence); // "  I Love Coding."

/*
    # padding: The padEnd () method in JavaScript is used to pad a string with another string until it reaches the given length. 
        i) padStart():
        ii) padEnd():
*/
const strNumber = `15`;

const padStartNumber = strNumber.padStart(4, `0`);
console.log(padStartNumber); // 0015

const padEndNumber = strNumber.padEnd(4, `0`);
console.log(padEndNumber); // 1500

// # Example: for understanding padStart() method.

const debitCardNumber = '2131 6484 4735 9794';

let last4Digit = debitCardNumber.slice(-4); // 9794

let disableNumber = last4Digit.padStart(debitCardNumber.length, '*');
console.log(disableNumber); // ***************9794


// # repeat() : The repeat() method returns a string with a number of copies of a string.

let repeatSentence = sentence_1.repeat(3);
console.log(repeatSentence); // I love codingI love codingI love coding


// # replace() : the replace() method replace a specified value with another value in a string.

let replaceSentence = sentence_1.replace('coding', 'Programming');
console.log(replaceSentence); // I love Programming


// # replaceAll() : the replaceAll() method allows you to specifiy a regular expression instead of a string to be replaced.

let text2 = `I love cats. Cats are very easy to love. Cats are very populars.`

text2 = text2.replaceAll(`cats`, `dogs`);
text2 = text2.replaceAll(`Cats`, `dogs`);
console.log(text2);


// # split() : A string can be converted to an array with the split() method. split() splits a string into an array of substrings, and returns the array.

text2 = `I love cats. Cats are very easy to love. Cats are very populars.`

const newArr = text2.split();
console.log(newArr); // ['I love cats. Cats are very easy to love. Cats are very populars.']

const newArr2 = text2.split(" ");
console.log(newArr2); // ['I', 'love', 'cats.', 'Cats', 'are', 'very', 'easy', 'to', 'love.', 'Cats', 'are', 'very']
