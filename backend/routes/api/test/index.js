var express = require('express');
var router = express.Router();
const models = require('../../../models');


// 조회
router.get('/:id', function(req, res) {
    let menuID = req.params.id;
    models.starmenu.findAll({
        where: {
            starmenu_id: menuID
        }
    }).then((starmenu) => {
        res.json(starmenu)
    });
});

// // 삭제
// router.delete('/:id', function(req, res) {
//     let menuID = req.params.id;
//     models.starmenu.destroy({
//       where: {starmenu_id: menuID}
//     })
//     .then( result => {
//       res.redirect("/board")
//     })
//     .catch( err => {
//       console.log("데이터 삭제 실패");
//     });
//   });

module.exports = router;