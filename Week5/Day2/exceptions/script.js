const a = 1;
console.log(b); //undefined error
console.log(a);

function test () {
    const num = 2;
    const operator = "/";
    operator = "-";
}

test()

//not reached
function sayHello () {
    console.log("HELLO");
}

sayHello()

// const err = new TypeError("Something bad happened!");
console.log(err.message); //"Something bad happened!"
console.log(err.stack); //where it happened
console.log(err.name); //TypeError

// throws an error : creating an exception
// and it crashed the execution of the code 
throw new TypeError("Something bad happened!");
console.log("hello");


//try catch finally

function test () {
    try {
        const operator = "/";
        operator = "-";
        //all the code that potentially create an error
    } catch (err) {
        // err is the error that occured in the try
        //catch the error and what we want
        console.log(`An error occured ${err.message}`);
    } finally {
        //runs if there is an error or if there is no error
    }
}

test()

//reached
function sayHello () {
    console.log("HELLO");
}

sayHello()

function test (numOne, numTwo) {
    try {
        if (numTwo === 0) {
            throw new RangeError("Cannot divide by Zero")
        } else {
            const total = numOne/numTwo;
        }   
    } catch (err) {
        // err is the error that occured in the try
        //catch the error and what we want
        console.log(`An error occured : ${err.message}`);
    } 
}

test(2, 0);


function checkEmail (userEmail) {
    try {
        if(!userEmail.includes("@")) {
            throw new Error ("your email is incorrect")
        }
        console.log("EVERYTHING OK");
    } catch (err) {
        console.log(`An error happened 
        ${err.message}`);
    }
}

checkEmail("johnsmith.com") // throw an exception that is caught
checkEmail("john@smith.com")  // will still run because the exception was caught

console.log("HELLO");
