// What does the following code return/print?
// DESTRUCTURING
const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
const {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// What does the following code return/print?
const planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

//REST Values from the object that we pack into an object
const {numPlanets: planet, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ? 
// {
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// }



// Exercise3
// Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
function getDetails(personObj) {
    const {name, house, goodstudent} = personObj
	console.log(name, house, goodstudent)
}

function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter', house: 'Gryfindor', goodstudent : false})



// Exercise4
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)
function getMoreDetails(person) {
    const {
        name,
        house,
        friend : {
            friendName,
            age
        }
    } = person
	console.log(name, house, friendName, age)
}

function getMoreDetails({name,house, friend : {friendName,age}}) {
	console.log(name, house, friendName, age)
}

const persontwo = {
    name: 'Hermione Granger', 
    house: 'Gryfindor', 
    friend :  {
        friendName : 'Harry Potter', 
        age : 20
    }
}

getMoreDetails(persontwo);


// Exercise5
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails(person){
    const {
        first : firstname,
        last : lastname,
        housesLocation : [locationOne, locationTwo],
        houses : {
            value : valueHouses
        }
    } =  person
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)
}

getElonMuskDetails(elonPerson)

// Exercise 6
// Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]

function displayEmployee () {
    const container = document.getElementById("container");
    for (let emp of employees){
        const {name, email, phone} = emp; //destructuring
        const text  = document.createTextNode(`${name} - ${email} - ${phone}`);
        container.appendChild(text)
    }
}

displayEmployee()


// Using MAP,  create a new array of objects, 
// containing the name, score and isAboveAverage 
// if the students has a score bigger that 50, 
// the key isAboveAverage will be true, 
// else the key isAboveAverage will be false. 
// Use ternary operator
// Result
// Exercise 2 : USE OBJECT DESTRUCTURING
const studentsFootball = [
 {name: 'Rich', score: 33}, 
 {name: 'Peter', score: 55}
];

const studentNew = studentsFootball.map(elem => {
    const {score} = elem;
    const isAboveAverage = score > 50 ? true : false;
    // const isAboveAverage = score > 50;
    const newObj = {...elem, isAboveAverage};
    //the same because the name of the key is the same name as the variable containing the value
    // const newObj = {...elem, isAboveAverage : isAboveAverage}
    return newObj;
})

console.log(studentNew)

//in one line
const studentNewTwo = studentsFootball.map(elem => 
    ({...elem, isAboveAverage : elem.score > 50}));

console.log(studentNewTwo)