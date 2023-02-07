// Exercise 1: create a new array that filters only the positive value
const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const allPositive = numbers.filter(elem => elem>0);
console.log(allPositive);

// Exercise 2 : filter
const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ]; 

const nextGenerationCharacters = characters.filter(elem => elem.series.includes('Star Trek: The Next Generation'));
console.log(nextGenerationCharacters);

// with some
const nextGenerationCharactersTwo = characters.filter(elem => elem.series.some(serie => serie === 'Star Trek: The Next Generation'));
console.log(nextGenerationCharactersTwo);