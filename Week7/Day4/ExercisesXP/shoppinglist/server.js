const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const shoppnig_router = require('./routes/shopping.js');

dotenv.config();

const app = express();
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// express.static
app.use('/',express.static(__dirname+'/public'));

app.listen(process.env.PORT || 8080, ()=>{
  console.log(`run on port ${process.env.PORT || 8080}`);
})

app.use('/api/shopping', shoppnig_router);
