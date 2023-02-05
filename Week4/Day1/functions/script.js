/* FUNCTION DECLARATION
function declaration is hoisted to the top of their scope, 
prior to execution of the code.
--> so we can call it before the initialization of the function
*/ 

sayHello(); //ok

function sayHello(){
    //statement
}

sayHello() //ok

/* FUNCTION EXPRESSION
Function expressions in JavaScript are not hoisted, unlike function declarations. 
You can't use function expressions before you create them.
*/

// sayHelloSecond() -- not possible, cannot call the function before initialization

const sayHelloSecond = function () {
    console.log("test");
}

sayHelloSecond()

/* ANONYMOUS FUNCTION 
In function expression, an anonymous function is assigned to a variable
*/

//anonymous function
// function () {
//     alert("hello")
// }

const getNumber = function (a, b){
    console.log(a+b);
}

getNumber(2,4);
//anonymous function assigned to a variable

/* Example with the DOM */

button.addEventListener("click", alertUser);

function alertUser() {
    alert("hello")
}

//anonymous function
button.addEventListener("click", function () {
    alert("hello")
});

// ARROW FUNCTION

function () {
    alert("hello")
}

//anonymous arrow function
() => {
    alert("hello")
}

/* FUNCTION EXPRESSION WITH ARROW FUNCTION */

const getAddition = (a,b) => {
    return (a+b);
}

getAddition(2,4);

// the same as
// function getAddition (a,b) {
//     return a+b
// }

//by default an arrow function returns a value
const getAdditionSecond = (a,b) => a+b;
getAdditionSecond(2,4);

//1  parameter // the same
const getUsernameFirst = (user) => user.toUpperCase();
const getUsernameSecond = user => user.toUpperCase();

getUsernameSecond("john");

// 0 parameter
const returnHello = () => "hello";
// return "hello"

//if the arrow function does more than returning a value
// we need the block scope {}
// amd we need an explicit return
const calculator = (a, b, operator) => {
    if(operator === "+") {
        return a + b;
    } else if (operator === "+") {
        return a - b;
    }
}

calculator(2,4, "-");