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


var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study",
    "eat"
];
for (var i=0; i < todos.length; i++) {
todos[i] = todos[i] + "!";
}
console.log(todos)

var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}
var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
}
while (counterTwo > 0);
function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);    

const basket = ['apples', 'oranges', 'grapes']
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i])
}

basket.forEach(item => {
    console.log(item);
})
// Iterating - arrays and strings 
for(item of basket) {
    console.log(item);
}
//for in - properties
// enumerating- objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
for (item in detailedBasket) {
    console.log(item);
}

const colors = ["blue", "red", "green"];
for (let i = 0; i < colors.length; i++){
    for (let j = 0; j < colors[i].length; j++){
        const letter = colors[i][j];
        console.log(letter);
}
}   // первый луп выводит слова, а второй луп выводит по буквам с каждой строки