console.log(fetch("https://jsonplaceholder.typicode.com/users/"))
//GET IS BY DEFAULT

//then method receives as an argument the result returned by the previous promise

fetch("https://jsonplaceholder.typicode.com/users/")
.then((resOne) => { //resOne is the response object
    // console.log(resOne);
    if(resOne.status !== 200) {
        throw new Error ("couldn`t receive the data")
    } else {
        const data = resOne.json(); //parse the data 
        console.log("data ; ", data);
        // json() method returns a promise
        // if I want to use the data returned by this promise
        // I need to consume it
        return data //1
    }
})
.then((resTwo) => { //restwo is the result of the json() promise
    // console.log(resTwo); //array of objects
    // displayData(resTwo) //append on the page
})
.catch((err) => console.log("IN THE CATCH", err))

// fetch("https://jsonplaceholder.typicode.com/users/")
// .then((resOne) => { 
//     console.log(resOne);
//     // resOne.json();
//     // console.log(resOne.json());
//     return resOne.json()
// })
// .then((resTwo) => {
//     console.log(resTwo);
// })
//     if(resOne.status !== 200) {
//         throw new Error ("couldn`t receive the data")
//     } else {
//         const data = resOne.json(); 
//         return data;
//     }
// })
// .then((resTwo) => { 
//     displayData(resTwo)
// })
// .catch((err) => console.log("IN THE CATCH", err))

function getUser () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((resOne) => {
        if(resOne.status !== 200) {
            throw new Error ("couldn`t receive the data")
        } else {
            const data = resOne.json();
            return data;
        }
    })
    .then((resTwo) => { 
        const username = resTwo.username;
        getGif(username);
    })
    .catch((err) => console.log("IN THE CATCH", err))
}

getUser()

function getGif (user) {
    fetch(`https://api.giphy.com/v1/gifs/random?tag=${user}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then((response) => {
        if(response.status !== 200){
            console.log("ERROR");
        } else {
            return response.json();
        }
    })
    .then((response) => {
        console.log(response.data.images.original.url);
    })
}




