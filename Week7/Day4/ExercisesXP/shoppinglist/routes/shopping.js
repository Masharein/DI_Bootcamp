const express = require('express');
const {_insertItem,
      _getAllItems} = require('../controllers/shopping.js');


const router = express.Router();

router.post('/', _insertItem);
router.get('/', _getAllItems);

module.exports = router
