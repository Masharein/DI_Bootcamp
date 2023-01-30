//     <form>
//         <input id="button" type="button" name="test" value="Click me">
//     </form>

//     <script>
//        document.getElementById('button').onclick = function() {
//             alert('Click!');
//         };
//     </script>


// Обработчик Событий

// onclick()	вызывать JavaScript при нажатии (ссылка или поля формы)
// onload()	вызывать JavaScript после завершения загрузки страницы или изображения.
// onmouseover()	вызывать JavaScript, если мышь проходит по какой-либо ссылке
// onmouseout()	вызывать JavaScript, если мышь проходит по какой-то ссылке
// onunload()	вызывать JavaScript сразу после того, как кто-то покинет эту страницу.

// Exercise 2 - using the event object
// const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Using a loop, add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

const colors = ["blue", "yellow", "green", "pink"]

function addButton() {

const container = document.getElementById('container');

for (const color of colors) {
   const button = document.createElement('button');
   const content = document.createTextNode(color)
   button.setAttribute("value", color)
   button.appendChild(content)
   container.appendChild(button)
   button.addEventListener("click", changeColor)
}
}

addButton()

function changeColor(evt) {
    console.log(evt);
    document.body.style.backgroundColor = evt.target.value
}
changeColor()



    // const button = document.querySelector("#btn");

    // //syntax
    // // Element.addEventListener(event, callback function);
    // button.addEventListener("click", sayHello);
    // button.addEventListener("mouseover", hover);
    // //sayHello is the reference to the sayHello function
    
    // function sayHello () {
    //     alert("HELLO");
    // }
    
    // function hover () {
    //     console.log("HOVER");
    //     button.textContent = "I was hovered";
    // }
    
    // //click on the button, I want to change the background color of the body to blue
    // const buttonTwo = document.querySelector("#btn2");
    
    // buttonTwo.addEventListener("click", changeToYellow)
    
    // function changeToYellow () {
    //     console.log("hello");
    //     document.body.style.backgroundColor = "yellow";
    // }
    
    // const buttonFirst = document.querySelector("#btnfirst");
    // const buttonSecond = document.querySelector("#btnsecond");
    
    // function changeToBlue () {
    //     document.body.style.backgroundColor= "blue";
    // }
    
    // function changeToRed () {
    //     document.body.style.backgroundColor= "red";
    // }
    
    // buttonFirst.addEventListener("click", changeToBlue);
    // buttonSecond.addEventListener("click", changeToRed);
    
    // const buttonA = document.querySelector("#btnA");
    // const buttonB = document.querySelector("#btnB");
    
    // // evt object is a JS object filled with information about the event
    // // for example we can have the information : what type of event it was, 
    // // what was clicked, and a lot more 
    // function changeBackground (evt) {
    //     console.log(evt); //evt is the object
    //     console.log(evt.pointerType);
    //     console.log("evt.target :", evt.target);
    //     console.log("evt.target.textContent :", evt.target.textContent);
    //     document.body.style.backgroundColor = evt.target.textContent.toLowerCase();
    // }
    
    
    // buttonA.addEventListener("click", changeBackground);
    // buttonB.addEventListener("click", changeBackground);

