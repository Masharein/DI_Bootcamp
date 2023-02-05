const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array
// 2. Using the for each method, find the sum of the array


function getSum () {
    let sum = 0;
    for(let price of prices) {
        sum += price;
    }
    return sum;
}

const result = getSum()
console.log(result);

// FOR EACH
function getSumSecond () {
    let sum = 0;
    prices.forEach((elem) => sum += elem);
    return sum;
}

const resultSecond = getSum()
console.log(resultSecond);


// Exercise 2
const ageClient = [5, 8, 40, 18];

function checkAge () {
    const value = ageClient.some((age) => age >= 18);
    if(value === true) {
        alert("you are in charge")
    } else {
        alert("no adult in the group")
    }
}

checkAge()

//same
function checkAge () {
    const value = ageClient.some((age) => age >= 18);
    //ternary operator : 
    // condition ? true : false
    (value === true) ? alert("you are in charge") :  alert("no adult in the group");

}

checkAge()

function checkAdult () {
    const value = ageClient.every((age) => age >= 18);
    console.log("result of the every method", value);
}

checkAdult() 