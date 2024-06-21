// Js Promises : The Promise object represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// In short, if the promise was resolve then resolve function executed otherwise rejected.

// following example is not promises (without promises). The purpose of the following example is to demonstrate how difficult it is without promises.

// Example 1:

// function savetoDb(data, success, failure) {
//   let internateSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internateSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "prajwal",
//   () => {
//     console.log("success 1: first data save.");
//     savetoDb(
//       "hello world..!",
//       () => {
//         console.log("success 2: second data save.");
//         savetoDb(
//           "world is Yours...",
//           () => {
//             console.log("success 3: third data save.");
//           },
//           () => {
//             console.log("failure 3: weak connnection, data not saved.");
//           }
//         );
//       },
//       () => {
//         console.log("failure 2: weak connection, data not save.");
//       }
//     );
//   },
//   () => {
//     console.log("failure 1: weak connection data not save.");
//   }
// );

// # The Promises Example 2 :

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internateSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internateSpeed > 4) {
//       resolve("success: data was saved.");
//     } else {
//       reject("failure: data not saved.");
//     }
//   });
// }

// savetoDb("hello")
//   .then(() => {
//     console.log("promise was resolved.");
//   })
//   .catch(() => {
//     console.log("promise was rejected.");
//   });

// Example 3 : the chaning of promises.

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internateSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internateSpeed > 4) {
//       resolve("success: data was saved.");
//     } else {
//       reject("failure: data not saved.");
//     }
//   });
// }

// savetoDb("Prajwal Nikam") // first data
//   .then(() => {
//     console.log("data 1 saved"); // complete first data/promise.
//     return savetoDb("welcome to world"); // then second data save.
//   })
//   .then(() => {
//     console.log("data 2 saved"); // complete second data/promise.
//     return savetoDb("neha"); // then third data save.
//   })
//   .then(() => {
//     console.log("data 3 saved"); // complete third data/promise.
//   })
//   .catch(() => {
//     console.log("promise was rejected"); // any promise rejected then print this.
//   });

/* 
  ## Result and Errors in Promises:
      promises are rejected and resolved with some data (valid or errors).

      In then() function set by default argument.

   # why argument return or why argument rejected, that why use arguments.
*/

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internateSpeed = Math.floor(Math.random() * 10) + 1;

    if (internateSpeed > 4) {
      resolve("success: data was saved.");
    } else {
      reject("failure: data not saved.");
    }
  });
}

// savetoDb("hello world !")
//   .then((result) => {
//     console.log("data 1: saved");
//     console.log("result of promise: ", result);
//     return savetoDb("welcome to new world");
//   })
//   .then((result) => {
//     console.log("data 2: saved");
//     console.log("result of promise: ", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected.");
//     console.log("error of promise : ", error);
//   });

/* 
    ## Let's renew the old code:
*/

const h1 = document.querySelector("h1");

function updateColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

updateColor("red", 1000)
  .then(() => {
    console.log("red color was completed.");
    return updateColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed.");
    return updateColor("yellow", 1000);
  })
  .then(() => {
    console.log("yellow color was completed.");
    return updateColor("orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed.");
    console.log("Finish");
  })
  .catch((err) => {
    console.log("color not updated some error", err);
  });
