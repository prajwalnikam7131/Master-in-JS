// # JavaScript Date Objects : By default, JavaScript will use the browser's time zone and display a date as a full text string.


// const d = new Date();
// console.log(d); // 2024-06-19T05:43:34.518Z

const d = new Date('2024-06-20');
console.log(d); // 2024-06-20T00:00:00.000Z



// # Creating Date Objects : Date objects are created with the new Date() constructor. & There are 9 ways to create a new date object

// new Date() : new Date() creates a date object with the current date and time.
const d1 = new Date();
console.log(d1); // 2024-06-19T05:52:25.234Z


// new Date(date string) : new Date(date string) creates a date object from a date string.
const d2 = new Date("january 15, 2025 11:00:00");
console.log(d2); // 2025-01-15T05:30:00.000Z


// # toDateString() method : converts a date to a more readable format.

const d3 = new Date();
console.log(d3.toDateString()); // Wed Jun 19 2024


// # toUTCString() method : converts a date to a string using the UTC standard.

const d4 = new Date();
console.log(d4.toUTCString()); // Wed, 19 Jun 2024 06:01:18 GMT


// # toISOString() method : converts a date to a string using the ISO standard.

const d5 = new Date();
console.log(d5.toISOString()); // 2024-06-19T06:02:16.670Z