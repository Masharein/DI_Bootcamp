// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// Using a DOM property, retrieve the h1 and console.log it.
const title = document.querySelector("h1")
console.log(title)
// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.body.firstElementChild
const lastParagraph = article.lastElementChild
article.removeChild(lastParagraph)
console.log(article)

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const hTwo = document.querySelector("h2")
hTwo.addEventListener("click", changecolor);

function changecolor(evt) {
console.log(evt);
hTwo.style.backgroundColor = "red";
}


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const hThree = document.querySelector("h3")
hThree.addEventListener("click", hide);

function hide(evt) {
console.log(evt);
hThree.style.display = "none";
}
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement("button");
const content = document.createTextNode('button makes bolder');
button.appendChild(content);
article.appendChild(button);

button.addEventListener("click", makeBolder);

const paragraphs = document.querySelectorAll("p")
console.log(paragraphs);
function makeBolder (evt) {
for (let element of paragraphs) {
    element.style.fontWeight = "bold";
}
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


