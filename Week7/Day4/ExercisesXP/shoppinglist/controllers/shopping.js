const {insertItem, getAllItems} = require('../modules/shopping.js');

const _insertItem = (req, res) => {
  console.log(req.body);
  insertItem(req.body)
  .then(data => {
    _getAllItems(req,res);
  })
  .catch(err => {
    console.log(err);
    res.status(404).json({msg:err.message})
  })
}

const _getAllItems = (req, res) => {
  getAllItems()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
    res.status(404).json({msg:err.message})
  })
}

module.exports = {
  _insertItem,
  _getAllItems
}
