// Async Await
// Exercise Game - The word game You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

async function receiveFamousName(stringOne, stringTwo) {
    const stringArray = [];
    if (typeof stringOne === "string" && typeof stringTwo === "string") {
      stringArray.push(stringOne, stringTwo);
      return stringArray;
    } else {
      throw new Error("NO");
    }
  }
  
  async function receiveNoun(noun) {
    if (noun.length >= 3) {
      return noun;
    } else {
      throw new Error("There should be more letters");
    }
  }
  
  async function receiveCity(city) {
    if (city[0] === city[0].toUpperCase()) {
      return city;
    } else {
      throw new Error("First letter is not uppercase");
    }
  }
  
  async function receiveVerb(verb) {
    if (verb.endsWith('ing')) {
      return verb;
    } else {
      throw new Error("Verb doesn't finish with -ing");
    }
  }
  
  async function checkfinallyReceive() {
    try {
      const stringArray = await receiveFamousName("Beyonce", "Obama");
      const noun = await receiveNoun("football");
      const verb = await receiveVerb("playing");
      const city = await receiveCity("Paris");
      console.log(`${stringArray[0]} is ${verb} ${noun} with ${stringArray[1]} in ${city}`);
    } catch (err) {
      console.log("AN ERROR HAPPENED");
    }
  }
  