var express = require('express');
var router = express.Router();
const models = require('../../models');


// 조회
router.get('/', function(req, res) {
    models.user.findAll().then((user) => {
        res.json(user)
  });
});

// // 이메일로 유저 찾기
// router.get('/findid/:email', function(req, res) {
//   var user_email = req.params.email
//   models.user.findAll({
//     where : {
//       email : user_email
//     }
//   }).then((user) => {
//       res.json(user)
//   });
// });

// // 생성
// router.post('/', function(req, res) {
//   models.user.create({
//       email: req.body.email
//     }).then((result) => {
//       res.json(result)
//   }, (validation) => {
//     res.json({
//       errores: validation.errors.map((error) => {
//         return {
//           attribute: error.path,
//           message: error.message
//         };
//       })
//     });
//     //TODO: error handling
//   });
// });

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

// 로그인 POST
router.post("/login", function(req, res, next){
  // let body = req.body;

  models.user.findAll({
    where: {
      email : req.body.email
    }
  }).then((result) => {
    console.log(result.length)
    if (result.length) {
      result.redirect("http://localhost:8080/honeyChu")
    } else {
      console.log(req.body.email)
      models.user.create({
        email: req.body.email
      }).then((result) => {
        result.redirect("http://localhost:8080/honeyChu")
      })
    }
  })
});


// 로그아웃
router.get("/logout", function(req,res,next){
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect("http://localhost:8080/honeyChu");
})

// 유저삭제
// router.delete('/:id', function(req, res) {
//   let id = req.params.id;
//   models.user.destroy({
//     where: {user_id: id}
//   })
//   .then( result => {

//   })
//   .catch( err => {
//     console.log("데이터 삭제 실패");
//   });
// });

// email로 유저 조회
router.post('/userid', function(req, res, next){
  models.user.findAll({
    where: {
      email: req.body.email
    }
  }).then((user) => {
    res.json(user)
  })
})
module.exports = router;