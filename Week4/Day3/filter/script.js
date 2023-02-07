const numbers = [2,3,4,5,6];

// create a new array, if only even numbers
// result [2,4,6]
// const evenNumbers = [];

// function findEvenNumbers () {
//     for(let num of numbers){
//         if(num%2 == 0) {
//             evenNumbers.push(num);
//         }
//     }
//     console.log(evenNumbers);
// }

// findEvenNumbers()

///---- FILTER

const evenNumbers = numbers.filter((elem) => elem%2 === 0);
console.log(evenNumbers);

const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55},
	{name: 'John', score: 75}
];

// create a new array, 
// with only the students that have a score bigger than 50 
// and the number of letters in his name bigger or equal than 4

const correctStudents = students
                        .filter(elem => (elem.name.length >= 4 && elem.score > 50));

// array of object containing only the object that pass the test
console.log(correctStudents);

const bestStudents = correctStudents
                    .map(elem => elem.name);

//from the array of object, map returns an array
// containing only the name of each object           
console.log(bestStudents);

const goodstudents = students
                    .filter(elem => (elem.name.length >= 4 && elem.score > 50))
                    .map(elem => elem.name)

console.log(students);