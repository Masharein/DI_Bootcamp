const age = 35;//global variable
//avoid creating too many global variable
//code more efficient with local variable

function sayHello (){ //2
    const age = 34; // local variable
    const username = "John"; //3
}

sayHello() //1

// ----------- MEMORY

let num = 23;
let favNum = num;
console.log("num ", num, "favNum ", favNum);
            //      23              23    
num = 100;
console.log("num ", num, "favNum ", favNum);
            //     100              23    


// data is passed by value
let username = "Alice"; //allocate a place in the memory for the variable
let myName = username;
username += " In Wonderland";
console.log("username ", username, "myName ", myName);
            //  Alice in Wonderland         // Alice

// --- Complex data type
// arrays
// objects
// functions

// PASS BY REFERENCE

const colors = ["blue", "red"];
const favColors = colors;
colors.push("green");
console.log("colors ", colors, "favColors ", favColors);
            // ["blue", "red", "green"]    //["blue", "red", "green"]

const family = {
    lastName : "Smith",
}

const myFam = family;
myFam.lastName = 'Roi';
console.log("family ", family, "myFam ", myFam);
// {
//     lastName : "Roi",   
// }

// {
//     lastName : "Roi",
// }
