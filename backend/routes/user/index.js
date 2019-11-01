var express = require('express');
var router = express.Router();
const models = require('../../models');


// 조회
router.get('/', function(req, res) {
    models.user.findAll().then((user) => {
        res.json(user)
  });
});

// 생성
router.post('/', function(req, res) {
  models.user.create({
      user_id: req.body.user_id,
      email: req.body.email
    }).then((result) => {
      res.json(result)
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

// // 탈퇴
// router.delete('/:id', function(req, res) {
//   let menuID = req.params.id;
//   models.starmenu.destroy({
//     where: {starmenu_id: menuID}
//   })
//   .then( result => {
//     res.redirect("/board")
//   })
//   .catch( err => {
//     console.log("데이터 삭제 실패");
//   });
// });

module.exports = router;