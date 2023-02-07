const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

const namesFamousPpl = famousPeople.map((person) => person.name);
console.log(namesFamousPpl);

const namesAndJobs = famousPeople.map((person) => {
    const newObj = {
        name : person.name,
        job : person.job,
    }

    return newObj;
})

console.log(namesAndJobs)


//chaining methods
//first use the map method to create an array of objects
//map returns this array
//forEach will loop on this array and log the name and job of each object 

famousPeople
.map((person) => ({name : person.name, job : person.job}))
.forEach((elem) => {
    console.log(elem.name, elem.job);
})


const arr3 = famousPeople.map(elt => {
    const obj = {...elt}
    delete obj.age;
    return obj;
});
console.log(arr3);
console.log(famousPeople);