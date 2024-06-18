// ## Conditional statements are used to perform different actions based on different conditions.


// # The if statement : if statement to specify a block of JavaScript code to be executed if a condition is true.

let temp = 33;

if (temp < 40) {
    console.log('temperature is less than 40.');
}


// # The else statement : the if statement to specify a block of JavaScript code to be executed if a condition is true. or if a condition is false then else block executed.
temp = 43;

if (temp < 40) {
    console.log('temperature is less than 40.');
} else {
    console.log('temperature is more than 40.');
}


// # The else if Statement : the else if statement to specify a new condition if the first condition is false. then check the else-if condition.

let age = 19;

if (age <= 6) {
    console.log('child');
} else if (age <= 12) {
    console.log('boy');
} else if (age <= 18) {
    console.log('adult');
} else {
    console.log('you are more than 18');
}
