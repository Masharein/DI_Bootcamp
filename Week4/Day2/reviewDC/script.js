// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

// //function expression
// // anonymous function
// // (a, b) => {
// //     //statement
// //     //for loop
// //     //if 
// // }

// // assign a anonymous arrow function to a variable
// const displayGroceries = () => {
//     groceries["fruits"].forEach((elem) => console.log(elem));
// };

// // displayGroceries //reference to the function
// displayGroceries()

// // (a, b) => a+b
// // (a, b) => {return  a+b}

// const cloneGroceries = () => {
//     let user = client;
//     //user = "John"
//     client = "Betty";
//     //user = "John"
//     console.log("client ", client, "user ", user);
//     // as soon as client is redefined, it points to a new adress
//     // meaning user and client point to different adresses, so they don't have the same value

//     const shopping = groceries;
//     groceries.totalPrice = "$30"; 
//     //both changed because they point to the same reference in the heap
//     // console.log("shopping ", shopping, "groceries ", groceries);
//     groceries.other.payed = "false";
//     console.log("shopping ", shopping, "groceries ", groceries);
// }

// cloneGroceries()


// EX5 NESTED FUNCTION

function makeJuice (size) {
    const ingredients = [];

    function addIngredients (ingre) {
        ingredients.push(...ingre)
        // ingredients.push(ingre2)
        // ingredients.push(ingre3)
    }

    function displayJuice () {
        const section = document.getElementById("container");
        let sentence = `The client wants a ${size} juice, containing : `
        
        ingredients.forEach((elem, index, array) => 
            index === array.length-1 ? sentence += `and ${elem}.` : sentence += `${elem}, `)
        
        const text = document.createTextNode(sentence);
        section.appendChild(text);
    } 

    addIngredients(["apple", "orange", "pinapple"]);
    addIngredients(["banana", "milk", "sugar"]);
    displayJuice()

}

makeJuice("Medium");

(function () {
    console.log("test");
})();