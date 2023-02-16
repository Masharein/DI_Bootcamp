async function getData () {
    const userOne =  await fetch("https://jsonplaceholder.typicode.com/users/1");
    const userTwo =  await fetch("https://jsonplaceholder.typicode.com/users/2");
    const resultOne = await userOne.json();
    const resultTwo = await userTwo.json();
}

const promise1 = Promise.resolve("Great");
const promise2 = Promise.resolve("Good");

const allPromise = Promise.all([promise1, promise2]);
allPromise.then((res) => console.log(res))

const promise11 = Promise.resolve("Great");
const promise22 = Promise.reject("Bad");

const allPromise2 = Promise.all([promise11, promise22]);
allPromise2.catch((err) => console.log(err))

async function getData () {
    try {
        const urlOne = "https://jsonplaceholder.typicode.com/users/1";
        const urlTwo = "https://jsonplaceholder.typicode.com/users/2";

        const promise3 = Promise.all([fetch(urlOne), fetch(urlTwo)]); 
        // --> returns a Promise, so if i want to consume this Promise, I need to use await
        const allResponses = await promise3;
        
        console.log(allResponses);

        //SAME
        // const resOne = allResponses[0].json().then((res) => console.log("resOne", res))
        
        // const resOne1 = await allResponses[0].json();
        // const resTwo = await allResponses[1].json();

        const result = await Promise.all([allResponses[0].json(), allResponses[1].json()])
        console.log(result);
    } catch (err) {
        console.log(err);
    }
    
}

getData()


//GOLD EXERCISE
const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
]


async function getDataStarWars() {
    const responseOne = await fetch(urls[0]);
    const responseTwo = await fetch(urls[1]);
    const responseThree = await fetch(urls[2]);
    const responseFour = await fetch(urls[3]);

    const resOne = await responseOne.json();
    const resTwo = await responseTwo.json();
    const resThree = await responseThree.json();
    const resFour = await responseFour.json();

}

async function getDataStarWars2() {
    const newFetchArray = urls.map(url => fetch(url));
    console.log(newFetchArray); //[Promise, Promise, Promise, Promise]

    const allResponses = await Promise.all(newFetchArray);
    console.log(allResponses); //[Response, Response, Response, Response]
    
    const newResponsesArray = allResponses.map((response)=> response.json());
    console.log(newResponsesArray); //[Promise, Promise, Promise, Promise]

    const allResults = await Promise.all(newResponsesArray);
    console.log(allResults); //[{…}, {…}, {…}, {…}]
}

getDataStarWars2()

async function getDataStarWars3() {
    const allResponses = await Promise.all(urls.map(url => fetch(url)));
    const allResults = await Promise.all(allResponses.map((response)=> response.json()));
    console.log(allResults); //[{…}, {…}, {…}, {…}]
}

getDataStarWars3()
