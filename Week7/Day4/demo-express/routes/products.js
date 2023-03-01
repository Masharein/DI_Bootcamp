const express = require('express')
const {_getAllProducts} = require('../controllers/products.js')

const router = express.Router();

router.get('/', _getAllProducts)


module.exports = router
