// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)


const jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

const objDetails = JSON.parse(jsonString); //convert it to a JS OBJECT
const objOptions = objDetails.quiz.sport.q1.options; //retrieve the array of options
objOptions.forEach(element => {
    console.log(element); //show the values from the array
});

const stringDetails =  JSON.stringify(objDetails);
console.log(stringDetails); //not very readable

const stringDetailsTwo =  JSON.stringify(objDetails, null, 2);
console.log(stringDetailsTwo); //readable //indent each nested object