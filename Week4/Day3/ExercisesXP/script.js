// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

// ------2------
const country = "USA";
console.log([...country]); // [ 'U', 'S', 'A' ]

// ------Bonus------
let newArray = [...[,,]]; 
console.log(newArray); // [ undefined, undefined ]

// 🌟 Exercise 2 : Employees
// Instructions
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const welcomeStudents = users.map((user) => `Hello ${user.firstName}`)
console.log(welcomeStudents)

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackStudents = users.filter((user) => user.role === 'Full Stack Resident')
console.log(fullStackStudents)

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const lastNameFullStack = fullStackStudents.map((user) => user.lastName)
console.log(lastNameFullStack)

// 🌟 Exercise 3 : Star Wars
// Instructions
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']
const reduceMethod = epic.reduce((acc, curr) => `${acc} ${curr}`);
console.log(reduceMethod)