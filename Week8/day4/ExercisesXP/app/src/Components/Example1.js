import React from 'react';
import datapost from './datapost.json';

class Example1 extends React.Component {
    render() {
      return (
        <div>
          <h2>Social Media Links:</h2>
          <ul>
            {datapost.SocialMedias.map((link, index) => (
              <li key={index}><a href={link}>{link}</a></li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  export default Example1;
