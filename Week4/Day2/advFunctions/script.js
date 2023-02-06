// (function () {
//     console.log("hello");
// })()


// (function (username) {
//     console.log(`Hello ${username}`);
// })("John")


// function sayHello (username) {
//     console.log(`Hello ${username}`);
// }

// sayHello("john");
// sayHello("john");
// sayHello("john");

// // coloring game
// // USE CASE : IIFE initiaze stuff on the page
// function creates colors on the left
// function creates grid right

// // BENEFITS
// // memory
// // avoid pulluting the global polluting the global namespace 

(function (username){
    const container = document.getElementById("container");
    const text = document.createTextNode(`Hello ${username}`);
    container.appendChild(text);
})("John");

function prepareHoumous () {
    const allIngredients = [];

    function addIngredient (ingredient) {
        allIngredients.push(ingredient);
        const numPpl = 5;
    }

    // we can call the function only in the scope where we declared it
    addIngredient("chickpeas");
    addIngredient("lemon juice");
    addIngredient("garlic");
    console.log(allIngredients);
    // console.log(`I prepare houmous for ${numPpl}`); //numPpl undefined
};

prepareHoumous()
// addIngredient("chickpeas"); //undefined



// function createLayout (){

//     function createPallet (){

//     }

//     function createGrid (){

//     }

//     createPallet()
//     createGrid()
// }

// createLayout();

// Create a function named starWars that takes no parameter.
// The function should declare a variable characters equal to an empty array
// In the startWars function, create a function named createCharacter. 
// It receives two parameters, the first name and last name of a character. 
// If the character doesn't have a last name, the default should be "Smith" 
// and push the fullname to the characters array.
// In the startWars function, create a function named displayCharacter 
// should display in the body the fullname of the characters,
// Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once

function startWars () {
    const characters = [];

    function createCharacter(fname, lname="Smith") {
        const fullname = `${fname} ${lname}`;
        characters.push(fullname);
    }

    function displayCharacters () {
        const container = document.getElementById("container");
        characters.forEach(person => {
            const para = document.createElement("p");
            const text = document.createTextNode(person);
            para.appendChild(text);
            container.appendChild(para)
        })
    }

    createCharacter("Chubaka");
    createCharacter("Han", "Solo");
    console.log(characters);
    displayCharacters()
}

startWars()


//CLOSURES
function getNumber (num) {
    let calculation = num; //local variable
    
    function multiplyNumber () {
        calculation *= 2;
        console.log(calculation);
    }

    return multiplyNumber; //return reference to the function
}

const inner = getNumber(5);
// calculation = 5
inner() //10 calculation = 5*2 = 10 , calculation = 10
inner() //20 calculation = 10*2 , 
// console.log(calculation); //undefined


// getNumber(5)() //--> calling the inner function
// // calculation = 10
// getNumber(5)()






// const result = getNumber(5);
// result() //--> calling the inner function




// const result = getNumber(5);
// // result is the inner function
// // result is the reference to the multiplyNumber () function
// console.log(result);
// result()