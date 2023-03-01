// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal
const fs = require('fs');

fs.readFile('myTextFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.
// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
// Use the Node js File System to delete the file.

const fs = require('fs');

fs.writeFile('myFile.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File created!');
});
fs.appendFile('myFile.txt', '\nBuy orange juice', function (err) {
    if (err) throw err;
    console.log('Text appended!');
  });
  fs.unlink('myFile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });