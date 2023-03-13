import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{textAlign: 'center', overflowY: 'scroll', border: '3px solid black', height: '600px'}}>
            {props.children}
        </div>
    )
}

export default Scroll