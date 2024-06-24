/* 
    # Object Literal :
    -> An 'Object Literal' is an object value that you literally in your program.

    * An Object Literal usually consists of a list of comma-separated name-value pairs (property:value), wrapped inside curly braces {}.
*/

const user = {
    userName: 'Prajwal',
    loginCount: 6,
    signedIn: true,

    getUserDetails: function () {
        console.log('got user details from database.');
        console.log(`UserName : ${this.userName}`);
        console.log(this);
    }
}

console.log(user);
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this); //  {}


// In this object literal, 'this' keyword means current context.