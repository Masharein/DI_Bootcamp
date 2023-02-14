const grade = 50;

const myPromise = new Promise(function(resolve, reject){
    if(grade > 70) {
        resolve("Your mum buys you a phone")
    } else {
        reject("Nothing")
    }
})

console.log(myPromise);

const gradeTwo = 90;

const myPromiseTwo = new Promise(function(resolve, reject){

    setTimeout (function () {
        if(grade > 70) {
            resolve("Your mum buys you a phone")
        } else {
            reject("Nothing")
        }
    }, 2000)

})

//THE PROMISE IS PENDING FOR 2 SECONDS
//THEN ITS RESOLVED WITH THE RESULT OF "Your mum buys you a phone"

//while we wait 2 seconds the call stack is free to call other tasks
//because a promise is Asynchronous
function checkNumber () {
    for(let i = 0; i<100; i++){
        console.log(i);
    }
}

checkNumber()


const gradeThree = 90;
let gift;

const myPromiseThree = new Promise(function(resolve, reject){
    setTimeout(function (){
        if(grade > 70) {
            gift = "Phone";
            resolve(gift);
        } else {
            reject("You receive nothing")
        }
    }, 2000)
})

// use the result of a promise : I need to consume it
// then will be called if the promise is resolved
// the callback of the then method takes as an argument the result of the promise
// the then() method is also returning a promise so if I want to consume the returned
// value of the promise I need to use another then()
myPromiseThree
.then((resOne) => {
    console.log("IN THE THEN");
    console.log(resOne); //Phone
    console.log(a);
})
.then((resTwo) => {
    console.log("IN THE SECOND THEN");
    console.log(resTwo);
})
.catch((err) => {
    console.log("THE ERROR IN THE CATCH IS");
    console.log(err);
})
.finally(() => {
    console.log("IN THE FINALLY");
})