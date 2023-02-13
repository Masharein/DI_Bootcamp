let xhr = new XMLHttpRequest(); //create an object

const button = document.querySelector("button");
button.addEventListener("click", makeRequest);

function makeRequest () {
    //GET REQUEST
    xhr.open("GET", "http://universities.hipolabs.com/search?country=Israel") //open the request

    xhr.send() //request is send

    // xhr.responseType = "json"; // second possibility
}

// event executed only after the server sent the data back
xhr.onload = function () {
    console.log(xhr);
    if (xhr.status !== 200) {
        console.log("error");
    } else {
        // console.log(xhr.response);
        const data = JSON.parse(xhr.response);
        displayRobots(data);
    }
}

xhr.onprogress = function (event) {
    // console.log("checking");
    // progressbar
    let percentComplete = parseInt((event.loaded / event.total) * 100);
    console.log("Upload: " + percentComplete + "% complete")
}

//if the request couldnt be made (no internet) or problem in the server side
xhr.onerror = function (){
    console.log("error on error");
}


const section = document.getElementById("container");

function displayRobots(allRobots){
    allRobots.forEach(elem => {
        const {
            name, 
            address : {city}
        } = elem;

        const card = document.createElement("div");
        card.classList.add("robot");
        const nameR = document.createElement("p");
        const addressR = document.createElement("p");
        const textName = document.createTextNode(name);
        const textAddress = document.createTextNode(city);
        nameR.appendChild(textName);
        addressR.appendChild(textAddress);

        card.appendChild(nameR);
        card.appendChild(addressR);

        section.appendChild(card);
    })
}

