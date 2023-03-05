import React from "react"
import './Exercise4.css';
const Exercise4 = () => {
    return (
        <>
        {/* <h1 style={{ color: 'red', 
                      backgroundColor: 'lightblue' }}>This is a header</h1> */}
        <h1 style = {style_header}>This is a header</h1>
        <p className="para">This is a paragraph</p>
        <a>This is a link</a>
        <form><input type="text"></input><button type="submit">Submit</button></form>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGDVIMGjWpzsLwPHuTEjcXfDlBe8PjMpsTBD9yYyH&s"></img>
        <ul>
            <li>This is a link1</li>
            <li>This is a link2</li>
            <li>This is a link3</li>
        </ul>
        </>
    )
}

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
export default Exercise4