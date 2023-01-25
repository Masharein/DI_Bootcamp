// function sayHello ()  {
//     console.log("Hello");
// }
// sayHello()

// var sayBye = function () {
//     console.log("Bye");
// }
// sayBye() //calling a function

// function sing(song) {
//     console.log(song);
// }
// sing("lalalaal");

// function multiply(a, b) {    // function declaration
//     if (a > 10 || b > 10) {
//         return "that's too hard"
//     } else {
//         return a * b
//     }                   // после return ничего не выполняется
// }
  
// function multiply(a, b) { //a, b- parameters   // this is a fubction
//         return a * b // expression
// }   
// alert(multiply(3, 4))     // calling a function

// var total = multiply(4,5); //4, 5 -arguments //expression
// alert(total);

// var newFunction = function() {  //anonimus function
//                             // function expression
// };

// var a = true; // assign a variable
// var obj = {
//     thisIsAMethod: function() {
//                                 // this is a method
//     }
// }
// // вызываются по-разному функции и методы
// // thisIsAFunction() 
// // obj.thiIsAMethod()


// function age(myAge) {
//     var momAge = myAge * 2;
//     console.log(momAge);
//     var fatherAge = momAge * 1.2;
//     console.log(fatherAge);
// }
// age(5)

// function age(myAge) {
//     var momAge = myAge * 2;
//     return momAge;
// }
// age(5)


// facebook

var database = [
    {
        username: "masha1",
        password: "supersecret"
    }
    {
        username: "sally",
        password: "123"
    }
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "bobby",
        timeline: "So tired of this"
    },
    {
        username: "Sarah",
        timeline: "I love Javascript"
    }
];

var userNamePrompt = prompt("what's your username?");
var passWordPrompt = prompt("what's your password?");

function isUserValid(username, password) {
    for(var i=0; i < database.length; i++) {
        if (database[1].username === username &&
            database[1].password === password) {
            return true;
            } 
       }
       return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)){
        console.log(newsFeed);  
    } else {
        alert("sorry");
    }
}
signIn(userNamePrompt, passWordPrompt);



