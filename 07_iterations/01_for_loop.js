/*
    # for loop syntax :-

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
        }
*/

// e.g.- print array.
const languages = ['js', 'java', 'cpp', 'cp', 'py'];

for (let i = 0; i < languages.length; i++) {
    // console.log(i, languages[i]);
}


// e.g.- print 1 to 15 Numbers.
for (let i = 0; i <= 10; i++) {
    // console.log(i);
}


// # if-else in for loop:

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log('5 is the best number.');
    }
    // console.log(element);
}


// # break keyword: The break statement terminates the curret loop.

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log('5 is the best number.');
        break;
    }
    // console.log(element);
}


// # continue keyword: the continue satement terminates execution of the statements in the current iteration labeled loop.

for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        continue;
    }
    // console.log(i); // 5 Not print
}


// # loop in loops : e.g. Print a table 1 to 100.

for (let i = 1; i <= 10; i++) {

    console.log(`table of ${i} is :`);

    for (let j = 1; j <= 10; j++) {

        let table = i * j;
        console.log(table);
    }
}

