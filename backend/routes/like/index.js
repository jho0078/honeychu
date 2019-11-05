var express = require('express');
var router = express.Router();
const models = require('../../models');

// 모든 유저 조회
router.get('/', function(req, res) {
    models.like.findAll().then((like) => {
    res.json(like)
  });
});

// 특정 유저 조회
router.get('/user/:id', function(req, res) {
    let userID = req.params.id
    models.like.findAll({
        where: {
            like_user_id: userID
        }
    }).then((like) => {
    res.json(like)
  });
});

// 특정 메뉴 조회
// count 추가 가능?
router.get('/menu/:id', function(req, res) {
    let starmenuID = req.params.id
    models.like.findAll({
        where: {
            like_starmenu_id: starmenuID
        }
    }).then((like) => {
    res.json(like)
  });
});

// DB에 좋아요 추가
// 유저 id 어떻게 받나?
router.post('/add', function(req, res) {
  models.like.create({
      like_user_id: req.body.like_user_id,
      like_starmenu_id: req.body.like_starmenu_id,
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


module.exports = router;