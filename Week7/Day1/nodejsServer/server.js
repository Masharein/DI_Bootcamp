const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Hello, get your request');
  console.log(req.method)
  if(req.url === '/') {
    if(req.method === 'GET'){
    res.end('<h1>Home Page</h1>')
  }
}
  else if (req.url === '/about') {
  res.end('<h1>About Page</h1>')
  }
})

server.listen(5001, () => {console.log('Run on port 5001')})