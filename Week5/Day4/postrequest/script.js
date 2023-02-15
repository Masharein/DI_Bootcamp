// GET

// fetch("url")
// .then((res) =>)
// .then((res) =>)
// .catch((err) =>)

// POST 

//THIRD PARTY API

const form = document.forms[0];
form.addEventListener("submit", retrieveData);

function retrieveData(e){
    e.preventDefault()

    // const titleInput = e.target.title.value;
    // const bodyInput = e.target.body.value;
    // console.log(titleInput, bodyInput);

    // const details = {
    //     title : titleInput,
    //     body: bodyInput, 
    // }

    const data = new FormData(e.target);
    const details = Object.fromEntries(data.entries());
    console.log(details);

    const info = {
        method: 'POST',
        body : JSON.stringify(details),
        headers: {'Content-type': 'application/json'}
    }

    fetch("https://jsonplaceholder.typicode.com/posts", info)
    .then((res) => res.json())
    .then((resTwo) => console.log(resTwo))
    .catch((err) => console.log(err))
}


/*
CRUD
create read update delete

POST data
--> HTTP POST REQUEST
THE SERVER RECEIVES THE DATA SENT
    - USE THE DATA TO ADD IT TO THE DATABASE
    - SUCCESS MESSAGE
    - SHOW YOU WHAT ADDED (DATA IN A FORM OF AN OBJECT)

- SENT BACK TO THE SERVER

- SEND THE DATA TO THE CLIENT 
    - USE THE DATA AND APPEND ON THE PAGE8
    */

const grade = 90;

async function checkGrade () {
    if(grade>70){
        return "Great";
    } else {
        throw new Error("NO");
    }
}

async function waitCheckGrade () {
    try {
        const res = await checkGrade();
        displayResult(res);
    } catch (err) {
        console.log("AN ERROR HAPPENED");
    }
}

function displayResult(res){
    alert(res)
}


waitCheckGrade()