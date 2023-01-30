const firstBtn = document.querySelector("#btn1");
const secondBtn = document.querySelector("#btn2");

firstBtn.addEventListener("click", changeToBlue);
secondBtn.addEventListener("click", changeToRed);

function changeToBlue() {
    document.body.style.backgroundColor = "blue";
}

function changeToRed() {
    document.body.style.backgroundColor = "red";
}

//BETTER WAY WITH EVT OBJECT
firstBtn.addEventListener("click", changeColor);
secondBtn.addEventListener("click", changeColor);

function changeColor(evt) {
    console.log(evt);
    document.body.style.backgroundColor = evt.target.value;
}

// Exercise2
const colors = ["blue", "yellow", "green", "pink"];

// add the buttons on the page
function addButtons () {
    //retrieve the container from the DOM
    const divContainer = document.querySelector("#container");
    // loop through all the colors with a for of loop
    for (let color of colors) {
        // for each color -->

        //1. create a button
        const button = document.createElement("button");
        //2. create a text content
        const content = document.createTextNode(`Click here to change to ${color}`);
        //3. add a value attribute equal to the color
        button.setAttribute("value", color);
        //4. add the text content to the button
        button.appendChild(content);
        //5. add each button to the container
        divContainer.appendChild(button);
        //6. for every button, I want to make it clickable
        //when the button is clicked, we call the function changeColor
        button.addEventListener("click", changeColor);
    }
}

addButtons()

//function changeColor
function changeColor(evt) {
    console.log(evt);
    // changes the background body depending on the value attribute
    // or the button that was click (ie. evt.target)
    document.body.style.backgroundColor = evt.target.value;
}