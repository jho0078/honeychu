var express = require('express');
var router = express.Router();
const models = require('../../models');


// 조회
router.get('/', function(request, response) {
    // models.starmenu.findAll().then((starmenu) => {
    //     response.json(starmenu)
    models.user.findAll().then((user) => {
        response.json(user)
  });
});


module.exports = router;