// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length 
// console.log(myWatchedSeriesLength);
let myWatchedSeriesSentence = "black mirror, money heist and the big bang theory";
console.log('I watched ' + myWatchedSeriesLength + ' series : ' + myWatchedSeriesSentence);
myWatchedSeries.splice(2, 1, "friends");
// console.log(myWatchedSeries);
myWatchedSeries.push("desperate hosewives");
// console.log(myWatchedSeries);
myWatchedSeries.unshift("sex in the city");
// console.log(myWatchedSeries);
myWatchedSeries.splice(1, 1);
// console.log(myWatchedSeries);
console.log(myWatchedSeries[1].substring(2, 3));
console.log(myWatchedSeries);
