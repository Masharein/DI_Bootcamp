// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
const sphereform = document.querySelector("#MyForm");
// document.forms[0]
// document.forms.MyForm

sphereform.addEventListener("submit", calculateVolume);

function calculateVolume(evt) {
    evt.preventDefault(); //needed with a submit event
    // evt.target // form that was submitted
    // radius // id of the first input
    // value // value of the input
    //evt.target.radius.value
    const inputRadiusValue = evt.target.radius.value;
    const volumeResult = inputRadiusValue**3;
    // inputRadiusValue*inputRadiusValue*inputRadiusValue
    const inputVolume = evt.target.volume;
    inputVolume.value = volumeResult;
    // inputVolume.setAttribute("value", volumeResult);
}
