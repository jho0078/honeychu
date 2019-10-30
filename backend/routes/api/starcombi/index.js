var express = require('express');
var router = express.Router();
const models = require('../../../models');


// 조회
router.get('/', function(request, response) {
    models.star_combi.findAll().then((starcombi) => {
    response.json(starcombi)
  });
});

// 생성
router.post('/', function(req, res) {
  models.star_combi.create({
    name: req.body.name, 
    beverage: req.body.beverage,
    price: req.body.price,
    image: req.body.image,
    date: req.body.date,
    user_user_id: req.body.user_user_id
  }).then((result) => {
    res.json(result);
  }, (validation) => {
    res.json({
      errores: validation.errors.map((error) => {
        return {
          attribute: error.path,
          message: error.message
        };
      })
    });
    //TODO: error handling
  });
});

// 삭제
router.delete('/:id', function(req, res) {
  let starCombiId = req.params.id;
  models.star_combi.destroy({
    where: {star_combi_id: starCombiId}
  })
  .then( result => {
    res.redirect("/board")
  })
  .catch( err => {
    console.log("데이터 삭제 실패");
  });
});

module.exports = router;