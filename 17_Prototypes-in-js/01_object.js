/*
    # What is a Prototype ?
        -> In JavaScript, A prototype is an object from which other objects inherit properties and methods.

        * inherit means ->  genetic/ running in the family. that means all properties and method available for children 

    # In JavaScript, Everything is an object.
    
    * important : Array, string, etc. parent is --> Object but Object parent is Null that means there is no parent of the object.


    * function is function but also function is an object. in short Function in javaScript are both function and object.

*/


function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 2;

// console.log(multiplyBy5(5)); // 25
// console.log(multiplyBy5.prototype); // {}



function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// Can we create our own function? OR Can we declare our function ? yes, Let's see.

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
tea.printMe();


/*
    # Explaination :

    # step 1: 
    <code>
        function createUser(username, score) {
            this.username = username;
            this.score = score;
        }
    </code>

    Here, a constructor function createUser is defined. When invoked with the new keyword (new createUser("chai", 25)), it creates a new object (chai) and assigns properties (username and score) to it using this.

    username is assigned the value "chai".
    score is assigned the value 25.


    step 2: 
    <code>
        createUser.prototype.printMe = function () {
            console.log(`price is ${this.score}`);
        }
    </code>

    This adds a method printMe to the prototype of createUser. When a function is defined on the prototype of a constructor function, all instances created by that constructor function inherit that method.

    printMe is a function that logs a message to the console using the value of this.score. In this case, it will log "price is 25" because chai has a score property of 25.

    step 3: 
    <code>
        const chai = new createUser("chai", 25);
    </code>

    This line creates a new object chai using the createUser constructor function, passing "chai" as the username and 25 as the score.

    <code>
        chai.printMe();
    </code>

    This line calls the printMe method on the chai object. Since chai is an instance of createUser, it has access to the printMe method through inheritance. Therefore, when chai.printMe() is called, it logs "price is 25" to the console, utilizing the score property of the chai object.

*/




// ## about new keyword ?

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/