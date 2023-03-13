import React from 'react';

const Card = ({ name, email, id}) => {
    const cardStyle = {
        backgroundColor: 'lightgreen',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '0.5rem',
        display: 'inline-block',
        width: '300px',
        height: '400px',
    }

    return (
        <div style={cardStyle}>
            <img alt = 'robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div style={{textAlign: 'center'}}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;