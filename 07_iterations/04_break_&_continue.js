// # break statement : The break statement "jumps out" of a loop.


for (let i = 0; i <= 10; i++) {

    console.log(i); // 1 2 3

    if (i == 3) {
        break;
    }
}


// # The continue Statement : The continue statement "jumps over" one iteration in the loop.

for (let i = 11; i <= 20; i++) {

    if (i == 15) {
        continue;
    }

    console.log(i); // 11 12 13 14 16 17 18 19 20
}