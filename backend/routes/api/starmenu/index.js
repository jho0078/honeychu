var express = require('express');
var router = express.Router();
const models = require('../../../models');


// 조회
router.get('/', function(request, response) {
    models.star_menu.findAll().then((starmenu) => {
    response.json(starmenu)
  });
});

// 생성
router.post('/', function(req, res) {
  models.star_menu.create({
    name: req.body.name, 
    beverage: req.body.beverage,
    price: req.body.price,
    image: req.body.image,
    user_user_id: 1
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

// 수정
router.put('/:id', function(req, res) {
  let menuID = req.params.id;
  models.star_menu.update({
    name: req.body.name, 
    beverage: req.body.beverage,
    price: req.body.price,
    image: req.body.image,
    user_user_id: 1
  },
    {where: {star_menu_id: menuID}, returning: true}).then(function(result) {
         res.json(result[1][0]);
    }).catch(function(err) {
         //TODO: error handling
    });
})


// 삭제
router.delete('/:id', function(req, res) {
  let menuID = req.params.id;
  models.star_menu.destroy({
    where: {star_menu_id: menuID}
  })
  .then( result => {
    res.redirect("/board")
  })
  .catch( err => {
    console.log("데이터 삭제 실패");
  });
});

module.exports = router;





