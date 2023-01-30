// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:
// Retrieve the form and console.log it.
const form = document.forms[0]
console.log(form)

// Retrieve the inputs by their id and console.log them.
const inputOne = document.querySelector("#fname")
console.log(inputOne)
const inputTwo = document.querySelector("#lname")
console.log(inputTwo)
const inputThree = document.querySelector("#submit")
console.log(inputThree)
// Retrieve the inputs by their name attribute and console.log them.
const inputForms = document.querySelectorAll("input")
console.log(inputForms)
// When the user submits the form (ie. submit event listener) use event.preventDefault(), why ?
// get the values of the input tags,
inputOne.value 




// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// form.addEventListener("submit", retrieveValue);
// function retrieveValue (evt) {
//     evt.preventDefault(); 
//     const valueInput = evt.target.username.value;
//     const list =  document.createElement("li");
//     const text = document.createTextNode(`the user types ${valueInput}`)
//     list.appendChild(text);
//     const ulForm = document.createElement("ul");
//     ulForm.classList.add = ('useranswer');
//     ulForm.appendChild(list)
// }