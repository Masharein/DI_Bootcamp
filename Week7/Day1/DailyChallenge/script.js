// const {largeNumber} = require('./main.js');
// const b = 5;
// const c = largeNumber + b
// // console.log(c)


// const http = require('http')
// const server = http.createServer((req, res) => {
//   console.log("I am listening");
//   console.log(req.method)
//   res.end(`<p> My Module is ${c}</p> 
//     <h1>Hi there at the frontend</h1>`)
//   })

// server.listen(3000, () => {console.log('Run on port 3000')})

const{now} = require(`./main.js`)
const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text-html')
  res.end(`<p>The date and time are currently ${now}</p>`)
  })

server.listen(8080, () => {console.log('Run on port 8080')})
