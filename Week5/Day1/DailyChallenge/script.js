let theForm = document.forms.theForm;
console.log(theForm)
theForm.addEventListener("submit", checkTheValue);
function checkTheValue(evt) {
    evt.preventDefault(); 
    const valueInputName = evt.target.name.value;
    const valueInputLastName = evt.target.lastname.value;
    let newObject = []
    newObject.push(valueInputName, valueInputLastName)
    const stringifiedObject = JSON.stringify(newObject)
    const para =  document.createElement("p");
    const text = document.createTextNode(stringifiedObject)
    para.appendChild(text);
    document.body.appendChild(para)
}