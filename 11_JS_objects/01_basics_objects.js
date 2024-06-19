// JavaScript Objects : object most important javascript data type and the building block of moder javaScript.

// javaScript objects contain many values/properties.

const countryCode = {
    IN: 'India',
    UAE: 'United Arab Emirates',
    USA: 'United State of America',
    FR: 'France'
};

console.log(typeof (countryCode)); // object

/*
    # define JavaScript object using an object Literal:

        -> An object literal is a list of name:value pairs inside curly braces {}.
        -> name:value pairs are also called key:value pairs.
        -> object literals are also called object initializers.
        -> an object literal could also be empty, or contain a single name-value pair.

*/
// object Literal e.g.-
const course = {
    courseName: 'JavaScript',
    // courseFee: 999,
    courseDuration: '3 months'
}

// single name-value pair object.
const dogs = {
    name: 'Naya'
}

// empty object.
const dog = {};

// # define JavaScript object using new Keyword : But, there is no need to use new Object().

const cars = new Object();



/* 
    ## Important Notes : 
        * If you Understand Objects, you Understand JavaScript.
        * In JavaScript, almost "everything" is an object.
          for e.g.-
                -> Objects are objects
                -> Maths are objects
                -> Functions are objects
                -> Dates are objects
                -> Arrays are objects
                -> Maps are objects
                -> Sets are objects
        * All JavaScript values, except primitives, are objects.
        * A primitive value is a value that has no properties or methods.
        * A primitive data type is data that has a primitive value.
        * JavaScript defines 7 types of primitive data types:
                -> string
                -> number
                -> boolean
                -> null
                -> undefined
                -> symbol
                -> bigint
        * Primitive values are immutable that means they are hardcoded and cannot be changed.
        
        * JavaScript Objects are Mutable.
        * Objects are mutable: They are addressed by reference, not by value.
*/
