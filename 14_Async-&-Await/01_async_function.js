/*
    # Async Functions: When you declare a function with async, it automatically returns a Promise.

    -> async makes a function return a Promise.
    -> await makes a function wait for a Promise.

    # What is Asynchronous or(Async) :-

    Asynchronous (or async) execution refers to execution that doesn’t run in the sequence it appears in the code. In async programming the program doesn’t wait for the task to complete and can move on to the next task.
*/

// The keyword async before a function makes the function return a promise.

async function greet() {
  //   throw "Under maintains";
  return "hello...!";
}

greet()
  .then((result) => {
    console.log("promise was resolved.", result);
  })
  .catch((err) => {
    console.log("promise was rejected.", err);
  });

/* 
  Await keyword :
    -> The 'await' keyword can only be used inside an async function.

    -> The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
*/

// for e.g.-
let h1 = document.querySelector("h1");

// function UpdateColor(color, dealy) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve(); // call back
//     }, dealy);
//   });
// }

// async function changeColor() {
//   await UpdateColor("red", 2000);
//   await UpdateColor("green", 2000);
//   await UpdateColor("yellow", 2000);
//   await UpdateColor("orange", 2000);
// }

// changeColor();

// Handling error :

function UpdateColor(color, dealy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 6) {
        reject("promise rejected");
      }
      console.log(`color change to ${color}.`);
      h1.style.color = color;
      resolve("color changed"); // call back
    }, dealy);
  });
}

async function changeColor() {
  try {
    await UpdateColor("red", 2000);
    await UpdateColor("green", 2000);
    await UpdateColor("yellow", 2000);
    await UpdateColor("orange", 2000);
  } catch (err) {
    console.log(err);
  }

  let a = 5;
  console.log(a);

  console.log(a + 3);
}

changeColor();
