var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'+ ' usando as coisas na aba de ususarios');
});

/* Ger users/cool. */
router.get('/cool', function(req, res, next){
  res.send('eu sou legal pra caramba');
});
module.exports = router;
