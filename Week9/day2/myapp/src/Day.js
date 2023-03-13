import React from "react";
import './Day.css';
import { connect } from 'react-redux';
import { forward, backward } from "./actions";

const Day = (props) => {

    const handleSubmit = event => {
        event.preventDefault();
        const button = event.target.dataset.button
        const day = event.target.parentElement.firstElementChild.dataset.day

        switch (button) {
            case "next":
                //new
                props.next(day)
                break;
            case "back":
                //new
                props.back(day)
                break;
            default:
                console.log("wrong button")
        }
    }


    return (
        <>
            <h1 data-day={props.weekday}>Today is <span>{props.weekday}</span></h1>
            <button type="submit" onClick={handleSubmit} data-button="next">Go forward in the week</button>
            <button type="submit" onClick={handleSubmit} data-button="back">Go backward in the week</button>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { working } = ownProps;
    return { working, weekday: state.weekday };
};

//new
const mapDispatchToProps = dispatch => {
    return {
        next: (day) => {
            dispatch(forward(day))
        },
        back: (day) => {
            dispatch(backward(day))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Day);