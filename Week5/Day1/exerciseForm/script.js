const formMarvel = document.forms.formMarvel;
formMarvel.addEventListener("submit", validateData);

function validateData(e){
    //limit is 10
    //query not empty
    //at least 4 characters
    const limitInfo = Number(e.target.elements[0].value); //need to convert to a number for the condition to be ok
    const queryInfo = e.target.elements[1].value;
    if(queryInfo.length < 4 || limitInfo === "" || limitInfo !== 10) {
        console.log("wrong");
        e.preventDefault();
    }
}