"use strict";
console.log("Welecome to the Facotrial College");
let r3 = require('readline-sync');
let choice2 = 'y';
while (choice2 == 'y') {
    let int = r3.questionInt("Enter an integer that's greater than 0 and less than 10: ");
    let f: number = 1;
    for (let i = 1; i <= int; i++) {
         (f *= i);
        }
        console.log(`The Facotrial of ${int} is ${f}`);
    choice2 = r3.question('Continue? (y/n) ').toLowerCase();
}