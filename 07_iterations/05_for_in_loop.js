// # The for-in loop : The JavaScript for in statement loops through the properties of an Object:

// snytax:
// for (const iterator of object) {
// }


const person = {
    fname: 'Prajwal',
    lname: 'Nikam',
    age: 24
}

// let text = '';

for (const key in person) {

    console.log(key); // fname lname age

    console.log(person[key]); // Prajwal nikam 24

    console.log(`${key} : ${person[key]}`);
    // output :-
    // fname : prajwal
    // lname: Nikam
    // age: 24
}
