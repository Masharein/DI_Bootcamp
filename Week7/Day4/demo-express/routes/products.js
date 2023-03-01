const express = require('express')
const {_getAllProducts} = require('../controllers/products.js')

const router = express.Router();

router.get('/api'