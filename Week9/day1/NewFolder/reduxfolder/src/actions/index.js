//to move on to the next day
const forward = weekday => {
    return {
        type: "FORWARD_DAY",
        day: weekday
    }
}

//to go back to the previous day
const backward = weekday => {
    return {
        type: "BACKWARD_DAY",
        day: weekday
    }
}

//we export the two functions
export {
    forward,
    backward,
}