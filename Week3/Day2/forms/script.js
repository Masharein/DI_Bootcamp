//manipulation of forms

//list of all the forms on the page
// document.forms

// the first form on the page
// document.forms[0]

// //list of elements in the form
// document.forms[0].elements

// // the first element in the list of all the elements
// document.forms[0].elements[0]

// // use the id of the element
// document.forms[0].elements.username


//1st I want to retrive the form
const firstForm = document.forms[0];

//on the form, we add a submit event
firstForm.addEventListener("submit", retrieveValue);

function retrieveValue (evt) {
    evt.preventDefault(); 
    //it stops the default action of the submission
    //the page will not refresh
    const valueInput = evt.target.username.value;
    const para =  document.createElement("p");
    const text = document.createTextNode(`the user types ${valueInput}`)
    para.appendChild(text);
    document.body.appendChild(para)
    //evt.target : the form that was submitted
    //username its the id of the input
    //value is the value of the input : whatever I write in the input
}


