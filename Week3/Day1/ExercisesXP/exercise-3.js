// 🌟 Exercise 3 : Change The Navbar
// Instructions
{/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */}


// Add the code above, to your HTML file

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

document.getElementById('navBar').id = "socialNetworkNavigation"
// We are going to add a new <li> to the <ul>.
const divContent = document.getElementById('socialNetworkNavigation')
const ulContent = divContent.firstElementChild
// First, create a new <li> tag (use the createElement method).
const newLi = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
const content = document.createTextNode('Logout');
// Append the text node to the newly created list node (<li>).
newLi.appendChild(content);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
ulContent.appendChild(newLi);
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).