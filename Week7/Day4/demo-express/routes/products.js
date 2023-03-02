const express = require('express')
const {_getAllProducts} = require('../controllers/products.js');
const { getProductById } = require('../modules/products.js');

const router = express.Router();

router.get('/', _getAllProducts)
router.get('/:id', _getProductById)


module.exports = router
