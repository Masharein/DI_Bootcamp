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
    const sentence = `${allValues[0]} ${allValues[1]} ${allValues[2]} ${allValues[3]} ${allValues[4]}`;
    console.log(sentence);
}