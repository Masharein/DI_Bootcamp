console.log(typeof(15));
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: number
// Actual: number

console.log(typeof(NaN))
// Prediction: number
// Actual: number

console.log(typeof("hello"))
// Prediction: string
// Actual: string

console.log(typeof(true))
// Prediction: boolean 
// Actual: boolean

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction: hamburgers because there are two strings 
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: NaN we can't do such an operation
// Actual: NaN

console.log("1" + "3")
// Prediction: 13 in this situaton we can do an operation like with 2 numbers
// Actual: 13

console.log("1" - "3") 
// Prediction:-2 in this situaton we can do an operation like with 2 numbers
// Actual: -2
console.log("johnny" + 5)
// Prediction:johnny5 in this situaton we can do an operation like with 2 strings
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: NaN we can't do such an operation
// Actual: NaN

console.log(99 * "hello")
// Prediction: NaN we can't do such an operation
// Actual: NaN

console.log(1 != 1)
// Prediction: false because !before means not equals but really 1=1 and it's true
// Actual: false

console.log(1 == "1")
// Prediction: true because there are the same value 
// Actual: true

console.log(1 === "1")
// Prediction: false because there are different types: number and string
// Actual: false