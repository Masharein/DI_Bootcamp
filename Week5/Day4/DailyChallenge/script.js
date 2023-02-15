// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  }); // The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

//   2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242


function getSunrise() {
    const city1Lat = document.getElementById("city1-lat").value;
    const city1Lon = document.getElementById("city1-lon").value;
    const city2Lat = document.getElementById("city2-lat").value;
    const city2Lon = document.getElementById("city2-lon").value;

    Promise.all([
      fetch(`https://api.sunrise-sunset.org/json?lat=${city1Lat}&lng=${city1Lon}&date=today`),
      fetch(`https://api.sunrise-sunset.org/json?lat=${city2Lat}&lng=${city2Lon}&date=today`)
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const sunrise1 = data[0].results.sunrise;
      const sunrise2 = data[1].results.sunrise;

      const sunriseTimes = document.getElementById("sunrise-times");
      sunriseTimes.innerHTML = `City 1 Sunrise: ${sunrise1}<br>City 2 Sunrise: ${sunrise2}`;
    })
    .catch(error => {
      console.error(error);
      const sunriseTimes = document.getElementById("sunrise-times");
      sunriseTimes.innerHTML = "An error occurred while fetching sunrise times.";
    });
  }