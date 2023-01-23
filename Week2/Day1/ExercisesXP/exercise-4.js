// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?

// Analyse the code below, what will be the outcome?
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
