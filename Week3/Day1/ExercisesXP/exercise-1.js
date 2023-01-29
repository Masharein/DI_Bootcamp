// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
const divContent = document.body.firstElementChild
console.log(divContent)
// Change the name “Pete” to “Richard”.
const ulContent = document.body.children[1]
const liContentOne = ulContent.children[1]
console.log(liContentOne)
// Change each first name of the two <ul>'s to your name.
liContentOne.textContent = 'Masha'
const liContentTwo = ulContent.children[0]
liContentTwo.textContent = 'Masha'
console.log(ulContent)
// Delete the <li> that contains the text node “Sarah”.
const ulContentSarah = document.body.children[2]
const liContentSarah = ulContentSarah.children[1]
ulContentSarah.removeChild(liContentSarah)
console.log(ulContentSarah)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
ulContent.className = 'student_list';
ulContentSarah.className = 'student_list'
// Add the classes university and attendance to the first <ul>.
ulContent.classList.add = ('university', 'attendance');


