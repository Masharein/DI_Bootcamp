import React from 'react';
import datapost from './datapost.json';

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experience:</h2>
        {datapost.Experiences.map((exp, index) => (
          <div key={index}>
            <img src={exp.logo} alt={exp.companyName} />
            <h2>{exp.companyName}</h2>
            <div>
              {exp.roles.map((role, index) => (
                <div key={index}>
                  <h4>{role.title}</h4>
                  <p>{role.startDate}{' '}{role.location}</p>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;