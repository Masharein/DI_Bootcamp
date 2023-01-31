// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// In the JS file:

// Declare a global variable named allBoldItems.
const allBoldItems = []
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
    const boldItems =  document.querySelectorAll("strong");
    for (const element of boldItems) {
        allBoldItems.push(element.firstChild.textContent);
    }
    }
getBold_items()

console.log(allBoldItems)

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(evt) {
    for (let item of allBoldItems) {
      item.style.color = "blue";
      console.log(evt)
    }
  }
 
// Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal(evt) {
    for (let item of allBoldItems) {
      item.style.color = "black";
      console.log(evt)
    }
  }

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
const boldItems = document.querySelectorAll("strong");
boldItems.addEventListener("mouseover", highlight);
boldItems.getElementById("para").addEventListener("mouseout", return_normal);