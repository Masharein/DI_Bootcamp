// Exercise 3 : Express
// Instructions
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/


const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use('/', express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.listen(3000, () => {
    console.log('run on port')
})

app.get('/', (req, res) => {
    res.send('<html><body><h1>This a an HTML Tag</h1></body></html>')
})