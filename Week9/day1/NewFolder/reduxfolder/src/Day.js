import React from "react";
import './Day.css';
import { store } from "./store";
import { forward, backward } from "./actions";

const Day = ({ weekday }) => {

    const handleSubmit = event => {
        event.preventDefault();
        //get button dataset
        const buttonType = event.target.dataset.button
        //get H1 dataset
        const day = event.target.parentElement.firstElementChild.dataset.day

        switch (buttonType) {
            case "next":
                store.dispatch(forward(day));
                break;
            case "back":
                store.dispatch(backward(day));
                break;
            default:
                console.log("wrong button")
        }
    }


    return (
        <>
            <h1 data-day={weekday}>Today is <span>{weekday}</span></h1>
            <button type="submit" onClick={handleSubmit} data-button="next">Next Day</button>
            <button type="submit" onClick={handleSubmit} data-button="back">Previous Day</button>
        </>
    );
};

export default Day;
