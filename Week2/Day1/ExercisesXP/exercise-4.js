let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34+21=55
// Actual: 55
a = 2;

console.log(a+b) //second expression
// Prediction:  It will output 23, because a has changed and now 2+21=23
// Actual: 23

console.log(c) // What is the value of c
// Prediction: c is undefined because there is now value
// Actual: undefined

console.log(3 + 4 + '5');
// Prediction: 75, but 7 is a number and '5' is a string, but they will stand together to each other and we get 75
// Actual: 75
