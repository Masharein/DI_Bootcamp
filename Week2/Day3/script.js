for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even')
    } else {
        console.log(i + ' is odd')
    }
}

let names = ["john", "sarah", 23, "Rudolf", 34]
for (let i of names) {
    if (typeof i !== "string") {
        continue;
    } 
    if (i.charAt(0) == i.charAt(0).toUpperCase()) {
        console.log(i);
    }
    else {
        console.log(i.charAt(0).toUpperCase() + i.slice(1)) }
}

let names = ["john", "sarah", 23, "Rudolf", 34]
for (let i of names) {
    if (typeof i !== "string") {
        break;
    } 
    console.log(i)
}

const prices = [23, 15, 34, 10];
for  (let sum === 0) {

}

// Create a variable sum equals to 0
// Loop over this array, to get the sum of all the numbers
// Where should you console log the sum ?