// forEach() method : The forEach() method calls a function once for each array element.

// syntax : 
// array.forEach(element => {  
// });

const numbers = [3, 12, 89, 8, 3];

numbers.forEach((element, index) => {
    // console.log(element, index);
    element = element + 2;
    console.log(element);
});