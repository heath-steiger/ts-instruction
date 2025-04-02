console.log("The Wizard Inventory Game\n");
console.log("COMMAND MENU");
console.log("show - Show all items");
console.log("grab - Grab an item");
console.log("edit - Edit an item ");
console.log("drop - Drop an item ");
console.log("exit - Exit program ");
let r4  = require('readline-sync');
let choice3: string = '';

let inventory: string[] = ['wooden staff', 'wizard hat', 'cloth shoes'];

while (choice3 != 'exit') {
let command: string = r4.question("\nCommand: ").toLowerCase();
switch(command) {
    case "show":
        for(let i = 0; i < inventory.length; i++){
            
            console.log(`${i+1}. ${inventory[i]}`);
        }

        break;
    case "grab":
        if (inventory.length >= 4){
            console.log("You can't carry any more items. Drop something first.");
            break;
        }
        let item: string = r4.question("Name: ");
        inventory.push(item);
        console.log(`${item} was added.`)
        break; 
    case "edit":
        let nbr1: number = r4.question("Number: ");
        let name: string = r4.question("Updated name: ");
        inventory.splice((nbr1-1),1,name);
        console.log(`Item number ${nbr1} was updated.`)
        inventory.pop
        break;
    case "drop":
        let nbr: number = r4.question("Number: ");
        console.log(`${inventory[nbr-1]} was dropped.`);
        inventory.splice((nbr-1),1);
        break; 
    case "exit":
        choice3 = 'exit';
        break;
    default: 
        console.log("Command not found. Try again.");
        
}
}