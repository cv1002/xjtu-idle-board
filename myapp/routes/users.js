var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource!');
});
router.get('/about', function(req, res){
  res.send('<h1>this is a response page.</h1>')
})

module.exports = router;
