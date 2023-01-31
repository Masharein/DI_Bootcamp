// EXERCISE 4 XP

// const sphereform = document.querySelector("#MyForm");
// // document.forms[0]
// // document.forms.MyForm

// sphereform.addEventListener("submit", calculateVolume);

// function calculateVolume(evt) {
//     evt.preventDefault(); //needed with a submit event
//     // evt.target // form that was submitted
//     // radius // id of the first input
//     // value // value of the input
//     //evt.target.radius.value
//     const inputRadiusValue = evt.target.radius.value;
//     const volumeResult = inputRadiusValue**3;
//     // inputRadiusValue*inputRadiusValue*inputRadiusValue
//     const inputVolume = evt.target.volume;
//     inputVolume.value = volumeResult;
//     // inputVolume.setAttribute("value", volumeResult);
// }

//1. retrieve the form
const sphereform = document.querySelector("#MyForm");
const rectangleform = document.querySelector("#MySecondForm");

//2. Add an event listener of submit ON THE FORM NOT ON THE BUTTON
sphereform.addEventListener("submit", calculateVolume);
rectangleform.addEventListener("submit", calculateVolume);

//3. When the form is submitted this function is called
function calculateVolume(evt) {
    evt.preventDefault(); //prevent the form submission from refreshing the page
    console.log(evt);
    const inputRadiusValue = evt.target[0].value; //retrieve the value of the 1st input
    const volumeResult = inputRadiusValue**3; //calculate some kind of formula
    const inputVolume = evt.target[1]; // retrieve the second input
    inputVolume.value = volumeResult; //set the value of the input to the calculation above
}

//OTHER FORM

const formDC = document.querySelector("#libform");

formDC.addEventListener("submit", retrieveData);

function retrieveData(evt){
    evt.preventDefault();
    const allInputs = formDC.querySelectorAll("input");
    let allValues = [];
    //loop to find the values
    for (let input of allInputs) {
        if(input.value == ""){
           allValues.splice(0, allValues.length);
           console.log("TRY AGAIN TO FILL EVERYTHING");
           return;
        } else {
            allValues.push(input.value);
        } 
    }
    const sentence = `bla ${allValues[0]}, bla ${allValues[1]}, bla ${allValues[2]}, , bla ${allValues[3]}, , bla ${allValues[4]}`;
    console.log(sentence);
}




