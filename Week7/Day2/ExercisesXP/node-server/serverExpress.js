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