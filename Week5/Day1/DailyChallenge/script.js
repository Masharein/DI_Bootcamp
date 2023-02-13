let theForm = document.forms.theForm;
console.log(theForm)
theForm.addEventListener("submit", checkTheValue);
function checkTheValue(evt) {
    evt.preventDefault(); 
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastname').value;
    const stringifiedObject = JSON.stringify({name, lastName})
    const para =  document.createElement("p");
    const text = document.createTextNode(stringifiedObject)
    para.appendChild(text);
    document.body.appendChild(para)
}