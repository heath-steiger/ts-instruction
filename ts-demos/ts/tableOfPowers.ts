console.log("Welecome to the Table of Powers");
let r2  = require('readline-sync');
let choice1: string = 'y';

while (choice1 == 'y') {
    
    let int: number = readline.questionInt("Enter an integer: ");
    for (let i = 0; i <= int; i++) {
        console.log(i);
        console.log(i * i);
        console.log(i * i * i);
        
    }






    choice1 = r2.question('Continue? (y/n) ').toLowerCase();
}