// JS is a Single Threaded Language.

// JS is a 'single threaded' which means only one statement is executed at a time.

// Javascript engine runs on a V8 engine that has a memory heap and a call stack.

/*

Its important to know about 'synchronous or (sync)' and Asynchronous or(Async).

# what is synchronous or sync :- 
    Synchronous (or sync) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.


# What is Asynchronous or(Async) :-
    Asynchronous (or async) execution refers to execution that doesn’t run in the sequence it appears in the code. In async programming the program doesn’t wait for the task to complete and can move on to the next task.

*/


// let's take a example of async function:

// Explaination : when you see the example first print a sentence then color is red. beacause function takes 2 seconds after work. always remember javascript never handle this type of function i.e. setTimeout() etc. this type of function handles browsers.

const h1 = document.querySelector('h1');

setTimeout(() => {
    h1.style.color = 'red';
}, 2000)

console.log('red color');

            /* ----------------------------------------------------------------------------------------------------------------------------------------- */

// another example : let's create a multi color change function:

// Explaination : In this example always change the dealy with calculation and it is a very bad way to write this type of function.

function changeColor(color, dealy) {
    setTimeout(() => {
        h1.style.color = color;
    }, dealy);
}

changeColor('red', 1000);
changeColor('green', 2000);
changeColor('blue', 3000);
changeColor('orange', 4000);

            /* ----------------------------------------------------------------------------------------------------------------------------------------- */

// let's take one more example with upgraded version : 

function changeColor(color, dealy, nextColorChange) {

    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange(); // if function is false then exit.
    }, dealy);

}

changeColor('red', 1000, () => {
    changeColor('green', 1000, () => {
        changeColor('blue', 1000, () => {
            changeColor('purple', 1000, () => {
                changeColor('orange')
            });
        });
    });
});
