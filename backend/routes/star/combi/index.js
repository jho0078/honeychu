var express = require('express');
var router = express.Router();
const models = require('../../../models');


// 조회
router.get('/', function(request, response) {
  models.starmenu.findAll({
    where: {
      basic_menu: 1
    }
  }).then((starmenu) => {
  response.json(starmenu)
  });
});

module.exports = router;