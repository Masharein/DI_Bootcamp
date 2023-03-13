const reducer = (state, action) => {
    //list of days
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    //action.day is the payload from the actions folder
    let currentDay = week.indexOf(action.day)

    //set this variable for later
    let chosenDay;

    switch (action.type) {

        //if we want to get the next day
        case "FORWARD_DAY":
            //some logic about the array above
            if (currentDay == week.length - 1) {
                chosenDay = week[0]
            } else {
                chosenDay = week[currentDay + 1]
            }

            return {
                ...state, //copying the original state
                weekday: chosenDay, //update the weekday key from the state
            }

        //if we want to get the previous day
        case "BACKWARD_DAY":
            //some logic about the array above
            if (currentDay == 0) {
                chosenDay = week[week.length - 1]
            } else {
                chosenDay = week[currentDay - 1]
            }

            return {
                ...state, //copying the original state
                weekday: chosenDay, //update weekday key from the state
            }
        default:
            return state; //Otherwise, return the existing state unchanged
    }
}

export { reducer };