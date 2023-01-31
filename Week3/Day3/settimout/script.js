setTimeout(sayHello, 2000); // the function will be called after 2 sec

function sayHello () {
    alert('hello');
}

// SETTIMEOUT IS SOMETHING THAT HAPPENDS ONCE
// AFTER A CERTAIN NUMBER OF MS (timer)

function advertise () { //2
    console.log("in the advertise function");
    setTimeout(sayHello, 2000); //2000ms = 2sec //3
}

advertise(); //1

function sayHello () {//4
    alert("hello")
}

//AT THE BEGINNING, the background color is pink
//4 times I flash another color //green
//toggle

const buttonFirst = document.querySelector("#btn");
buttonFirst.addEventListener("click", flash);

let counter = 10;

function flash () {
    counter = counter - 1; 
    if(counter > 0){
        document.body.classList.toggle("flash");
        setTimeout(flash, 1000); //should stop when I reach 0
    } else {
        counter = 10;
    }
}



// TOGGLE
const buttonTwo =  document.querySelector("#btn2");
buttonTwo.addEventListener("click", changeColor);

function changeColor () {
    document.body.classList.toggle("flash");
    if(document.body.classList.contains("flash")){
        buttonTwo.textContent ="change to pink";
    } else {
        buttonTwo.textContent = "change to blue";
    }
    //method that modifies classes of element
    //if the class flash doesnt exist in the body, the toggle adds it
    //if the class flash exists in the body, the toggle deletes it
}


