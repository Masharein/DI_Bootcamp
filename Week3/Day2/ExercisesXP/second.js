// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.


const form = document.querySelector("form");
console.log(form);

const fnameInput = document.getElementById("fname");
console.log(fnameInput);

const inputsByName = document.getElementsByName("fname");
console.log(inputsByName);

form.addEventListener("submit", function(event) {
event.preventDefault();

const fname = form.elements.fname.value;
const lname = form.elements.lname.value;

if (fname === "" || lname === "") {
alert("Please enter both first name and last name");
return;
}

const list = document.querySelector(".usersAnswer");
const fnameItem = document.createElement("li");
fnameItem.textContent = fname;
list.appendChild(fnameItem);

const lnameItem = document.createElement("li");
lnameItem.textContent = lname;
list.appendChild(lnameItem);
});

