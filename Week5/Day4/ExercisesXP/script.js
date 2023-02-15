// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function getResponse () {
try {
    const response = await fetch('https://www.swapi.tech/api/starships/9/');
    if(response.status !== 200) {
        throw new Error ("bad result")
    }
    const objectStarWars = await response.json(); 
    console.log(objectStarWars);
} catch (err) {
  console.log("ERROR");
}
}

// 🌟 Exercise 2: Analyze
// Instructions
// Analyse the code provided above before executing it - what will be the outcome?
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling
// Promise {<pending>}
// after 2 sec resolved