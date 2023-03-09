import React from 'react';
import data from './data.json';

const PostList = () => {
  return (
    <div>
      <h1>Hi this is a title</h1>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;