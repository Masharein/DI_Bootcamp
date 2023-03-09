import React from 'react';
import datapost from './datapost.json';

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Skills:</h2>
        {datapost.Skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.Area}</h3>
            <ul>
              {skill.SkillSet.map((item, index) => (
                <li key={index}>{item.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
