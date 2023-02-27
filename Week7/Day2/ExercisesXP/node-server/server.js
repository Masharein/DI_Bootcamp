// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
const json = JSON.stringify(user)
console.log(json)
const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Hello, get your request');
  if(req.url === '/') {
    {
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><p>${json}</p></body></html>`)
  }
}

})

server.listen(8080, () => {console.log('Run on port 8080')})

