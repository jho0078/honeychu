// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const router = require('express').Router()

const user = require('./user')

router.use('/user', user)

module.exports = router;