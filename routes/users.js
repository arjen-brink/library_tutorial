var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Test
router.get('/cool/', function(req, res, next) {
  res.send('respond with cool');
});

module.exports = router;
