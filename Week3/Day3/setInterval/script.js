// settimeout call the function once after a certan nb of ms
// setinterval EVERY SECOND THE FUNCTION WILL BE CALLED


const id = setInterval(sayHello, 1000);
console.log(id);

function sayHello () {
    console.log("Hello");
    clearInterval(id)
}


const idInterval = setInterval(sayHelloAgain, 1000);
console.log(idInterval);

let counter = 10;

function sayHelloAgain () {
    counter --;
    if(counter >= 0){
        console.log("hello");
    } else {
        clearInterval(idInterval); //clear the interval from the memory
    }
}

