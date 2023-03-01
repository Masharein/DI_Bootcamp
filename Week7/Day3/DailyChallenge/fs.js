const fs = require('fs');

fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  let position = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === '>') {
      position++;
    } else if (data[i] === '<') {
      position--;
    }
  }

  console.log(`Final position: ${position} steps to the right`);

  position = 0;
  let steps = 0;

  while (position !== -1) {
    if (data[steps] === '>') {
      position++;
    } else if (data[steps] === '<') {
      position--;
    }

    steps++;
  }

  console.log(`Steps to hit position -1: ${steps}`);
});
