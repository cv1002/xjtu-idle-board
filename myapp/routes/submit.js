let express = require('express');
let router = express.Router();

/* GET home page. */
router.use(function(req, res, next){
    res.render('submit');
})


module.exports = router;