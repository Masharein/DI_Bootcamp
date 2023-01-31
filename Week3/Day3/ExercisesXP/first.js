// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(hello, 2000);
function hello() {
    alert("Hello World");
}

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(helloSecond, 2000);
function helloSecond() {
const divContainer = document.querySelector('#container');
const para = document.createElement("p");
const content = document.createTextNode("Hello World");
para.appendChild(content);
divContainer.appendChild(para);
}


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
const id = setInterval(helloThird, 2000);
let counter = 5;
function helloThird() {
    counter --;
    if(counter >= 0){
        helloSecond()   
    }
    else {
        clearInterval(id); 
    }
}
const button = document.querySelector('button')
console.log(button)
button.addEventListener("click", hide)
function hide() {
        clearInterval(id)
    }
    