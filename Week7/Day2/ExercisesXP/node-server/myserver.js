// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Hello, get your request');
  if(req.url === '/') {
    {
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1>This is my first response.<br>This is my second response.</h1><h2>This is my third response</h2></body></html>')
  }
}

})

server.listen(3000, () => {console.log('Run on port 3000')})