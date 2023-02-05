const classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

// with regular loops
function getNames () {
    for(let user of classmates) {
        console.log(user);
    }
}

function getNamesTwo () {
    for(let i = 0; i<classmates.length; i++) {
        console.log(classmates[i]);
    }
}

/* FOR EACH */
//for each array method

// classmates.forEach(function)
// for each element of the array, execute this function

classmates.forEach(function (element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);
})

classmates.forEach(function (user, position, currentArray) {
    console.log(user);
    console.log(position);
    console.log(currentArray);
})

classmates.forEach((user, position, currentArray) => {
    console.log(user);
    console.log(position);
    console.log(currentArray);
})


// Use for each and arrow function, to add a "&" after Sophie and a "!"
// after all the other names the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!'] 
classmates.forEach((elem, index) => {
    if(elem === "Sophie"){
        classmates[index] += "&";
    } else {
        classmates[index] += "!";
    }
})

console.log(classmates);

//some

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// want to check if at least one element is bigger than 4
const result = myArr.some((elem) => {
    console.log(elem);
    return elem > 4;
});
//return the condition
// if the condition is false, the loop continues running and return false
// if the condition is true, the loop stops and returns true

console.log(result); //true