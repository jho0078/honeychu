var express = require('express');
var router = express.Router();
const models = require('../../models');
var Sequelize = require('sequelize');

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
  var like_user_email = req.body.like_user_email
  var like_starmenu_id = req.body.like_starmenu_id
  models.user.findAll({
    where: {
      email: like_user_email,
    }
  }).then((result) => {
    var user_id = result[0].user_id
    models.like.findAll({
      where: {
        like_user_id: user_id,
        like_starmenu_id: like_starmenu_id
      }
    }).then((result) => {
      console.log(result)
      if (result.length) {        
        models.like.destroy({
          where: {
            like_user_id: user_id,
            like_starmenu_id: like_starmenu_id
          }
        })
      } else {
        models.like.create({
          like_user_id: user_id,
          like_starmenu_id: like_starmenu_id,
        })
      }
    })

  })
  // models.like.create({
  //     like_user_id: req.body.like_user_id,
  //     like_starmenu_id: req.body.like_starmenu_id,
  //   }).then((result) => {
  //   res.json(result);
  // }, (validation) => {
  //   res.json({
  //     errores: validation.errors.map((error) => {
  //       return {
  //         attribute: error.path,
  //         message: error.message
  //       };
  //     })
  //   });
  //   //TODO: error handling
  // });
});

// 좋아요 갯수 그룹
router.get('/count', function(req, res) {
  models.like.findAll({
    attributes: ['like_starmenu_id', [Sequelize.fn('count', Sequelize.col('like_starmenu_id')), 'like_count']], 
    group: ['like_starmenu_id'],
  })
  .then((result) => {
    res.json(result)
  })
})

// 특정 메뉴 좋아요 갯수
router.get('/count/menu/:id', function(req, res) {
  var star_menu_id = req.params.id
  models.like.findAll({
    attributes: ['like_starmenu_id', [Sequelize.fn('count', Sequelize.col('like_starmenu_id')), 'like_count']], 
    group: ['like_starmenu_id'],
    where: {
      like_starmenu_id: star_menu_id
    }
  })
  .then((result) => {
    res.json(result)
  })
})

// 유저가 좋아요 누른 메뉴
router.get('/user/:id/menu', function(req, res) {
  let userID = req.params.id
  models.like.findAll({
    include: [{
      model: models.starmenu,
      where: {
        like_user_id: userID
      }
    }]
  }).then((likeMenus) => {

  res.json(likeMenus)
  });
});

// models.Foo.find({
//   include: [models.boo]
// });

// models.contracts.findAll({
//   attributes: ['id', [models.sequelize.fn('sum', models.sequelize.col('payments.payment_amount')), 'total_cost']],
//   include: [
//   {
//       model: models.payments,
//       attributes: []
//   }
//   ],
//   group: ['contracts.id']
// })





module.exports = router;