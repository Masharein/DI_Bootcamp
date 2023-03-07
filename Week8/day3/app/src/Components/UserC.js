import React from 'react'

class UserC extends React.Component {
    // constructor() {

    // }
    render() {
        return (
            <div style = {{
                display: 'inline-block',
                 padding: '10px',
                  margin: '20px',
                   border: '1px solid #ccc',
                    textAlign: 'center'
                }}>
                   <h2>{this.props.name}</h2>
                   <p>{this.props.email}</p>
                   <h3>{this.props.username}</h3>
            </div>
         )
    }
}

export default UserC 