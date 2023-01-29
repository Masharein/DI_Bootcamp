// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>


// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.
const divContent = document.body.firstElementChild
divContent.id = 'newId'
let item = document.getElementById('newId');
item.style.background = "lightblue";
item.style.padding = "50px";


// Do not display the <li> that contains the text node “John”.
const ulContent = document.body.children[1]
const liContentJohn = ulContent.children[0]
liContentJohn.id = 'johnId'
console.log(liContentJohn)
let itemJohn = document.getElementById('johnId');
itemJohn.style.display = "none";


// Add a border to the <li> that contains the text node “Pete”.
const liContentPete = ulContent.children[1]
liContentPete.id = 'peteId'
let itemPete = document.getElementById('peteId');
itemPete.style.border = "5px solid red";


// Change the font size of the whole body.
const bodyContent = document.body
bodyContent.id = 'bodyId'
let itemBody = document.getElementById('bodyId')
itemBody.style.fontSize = "30px"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).