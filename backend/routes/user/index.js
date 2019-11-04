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

// 로그인 POST
router.post("/login", function(req, res, next){
  // let body = req.body;

  models.user.findOne({
    where: {
      email : req.body.email
    }
  }).then((result) => {
    if (result) {
      result.redirect("http://localhost:8080/honeyChu")
    } else {
      models.user.create({
        email: req.body.email
      }).then((result) => {
        result.redirect("http://localhost:8080/honeyChu")
      })
    }
  })
});


// 로그인 POST
router.post("/login", async function(req,res,next){
  // let body = req.body;

  let result = await models.user.findOne({
    where: {
      email : req.body.email
    }
  });

  // let result = models.user.findOne({
  //   where: {
  //     email: req.body.email
  //   }
  // });

  // let dbEmail = result.dataValues.email;
  if(result){
    console.log("회원입니다.")
    // 세션 설정
    req.session.email = req.body.email;
    res.redirect("http://localhost:8080/honeyChu");
  }
  else{
    console.log("회원이 아닙니다.")
    res.redirect("http://localhost:8080/honeyChu");
    // res.redirect("")
  }
});

// 로그아웃
router.get("/logout", function(req,res,next){
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect("http://localhost:8080/honeyChu");
})

module.exports = router;