const numbers = [10,20,35,40];

//find the sum

const result = numbers.reduce((accumulator, elem) => {
    return accumulator + elem;
})

console.log("result" , result);

//1st loop
// accumulator = 10;
// elem = 20;
// return accumulator+elem = 30;

// //2nd loop
// accumulator = 30
// elem = 35
// return accumulator+elem = 65

// //3rd loop
// accumulator = 65
// elem = 40
// return accumulator+elem = 105


const numbersTwo = [10,20,35,40];

const resultTwo = numbers.reduce((accumulator, elem) => {
    return accumulator + elem;
}, 100)

console.log("resultTwo" , resultTwo);

// 1st loop
// accumulator = 100;
// elem = 10
// return accumulator + elem = 110;

// // 2nd loop
// accumulator = 110
// elem = 20
// return accumulator + elem =  130

// //3rd loop
// accumulator = 130
// elem = 35
// return accumulator + elem =  165

const people = ["John","Lea","Tom"];
// secret society is JLT

const secretSociety = people.reduce((acc, username) => {
    return acc + username[0];
}, "")

console.log(secretSociety);

const secretSocietyTwo = people.reduce((acc, username) => acc + username[0], "")

// 1st loop
// acc = ""
// return ""+"J"

// //2nd loop
// acc = "J"
// return "J"+"L"

// //3rd loop
// acc = "JL"
// return "JL" + "T"
