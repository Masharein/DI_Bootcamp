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
