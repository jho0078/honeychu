var express = require('express');
var router = express.Router();
const models = require('../../../models');


// 조회
router.get('/', function(request, response) {
    models.starmenu.findAll().then((starmenu) => {
    response.json(starmenu)
  });
});

// 생성
router.post('/', function(req, res) {
  models.starmenu.create({
      name: req.body.name,
      user_user_id: req.body.user_user_id,
      basic_menu: req.body.basic_menu,
      price: req.body.price,
      category: req.body.category,
      tag1: req.body.tag1,
      tag2: req.body.tag2,
      image: req.body.image,
      espresso_shot: req.body.espresso_shot,
      decaf_espresso_shot: req.body.decaf_espresso_shot,
      half_decaf_espresso_shot: req.body.half_decaf_espresso_shot,
      frappuccino_roast_shot: req.body.frappuccino_roast_shot,
      vanilla_syrup: req.body.vanilla_syrup,
      hazelnut_syrup: req.body.hazelnut_syrup,
      caramel_syrup: req.body.caramel_syrup,
      dolche_syrup: req.body.dolche_syrup,
      classic_syrup: req.body.classic_syrup,
      chocolat_syrup: req.body.chocolat_syrup,
      toffeenut_syrup: req.body.toffeenut_syrup,
      mocha_syrup: req.body.mocha_syrup,
      white_mocha_syrup: req.body.white_mocha_syrup,
      brown_sugur_syrup: req.body.brown_sugur_syrup,
      frappuccino_syrup: req.body.frappuccino_syrup,
      mint_chocolate_sauce: req.body.mint_chocolate_sauce,
      strawberry_mix: req.body.strawberry_mix,
      black_sesame_syrup: req.body.black_sesame_syrup,
      honey_grapefruit_sauce: req.body.honey_grapefruit_sauce,
      chai_syrup: req.body.chai_syrup,
      water_base: req.body.water_base,
      vanilla_cream_base: req.body.vanilla_cream_base,
      black_tea_base: req.body.black_tea_base,
      passion_tango_tea_base: req.body.passion_tango_tea_base,
      cool_lime_base: req.body.cool_lime_base,
      lemonade_base: req.body.lemonade_base,
      ice: req.body.ice,
      milk: req.body.milk,
      milk_temp: req.body.milk_temp,
      milk_bubble: req.body.milk_bubble,
      milk_quantity: req.body.milk_quantity,
      general_whipping: req.body.general_whipping,
      espresso_whipping: req.body.espresso_whipping,
      cold_foam: req.body.cold_foam,
      mugwort_whipping: req.body.mugwort_whipping,
      caramel_drizzle: req.body.caramel_drizzle,
      chocolate_drizzle: req.body.chocolate_drizzle,
      lemon_slice: req.body.lemon_slice,
      rosemary: req.body.rosemary,
      grapefruit_slice: req.body.grapefruit_slice,
      javachip: req.body.javachip,
      javachip_and_topping: req.body.javachip_and_topping,
      tong_javachip_topping: req.body.tong_javachip_topping,
      toffeenut_topping: req.body.toffeenut_topping,
      rice_topping: req.body.rice_topping,
      black_soboro_topping: req.body.black_soboro_topping,
      ricecake_topping: req.body.ricecake_topping,
      topping: req.body.topping,
      mugwort_powder_topping: req.body.mugwort_powder_topping,
      chocolat_topping: req.body.chocolat_topping,
      orange_essence: req.body.orange_essence,
      sparkling: req.body.sparkling,
      green_tea_powder: req.body.green_tea_powder,
      rice_powder: req.body.rice_powder,
      mugwort_powder: req.body.mugwort_powder,
      black_sesame_rice_cake: req.body.black_sesame_rice_cake,
      mango_juice: req.body.mango_juice,
      signature_chocolate: req.body.signature_chocolate,
      hash: req.body.hash 
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
  models.starmenu.update({
    name: req.body.name,
    user_user_id: req.body.user_user_id,
    basic_menu: req.body.basic_menu,
    price: req.body.price,
    category: req.body.category,
    tag1: req.body.tag1,
    tag2: req.body.tag2,
    image: req.body.image,
    espresso_shot: req.body.espresso_shot,
    decaf_espresso_shot: req.body.decaf_espresso_shot,
    half_decaf_espresso_shot: req.body.half_decaf_espresso_shot,
    frappuccino_roast_shot: req.body.frappuccino_roast_shot,
    vanilla_syrup: req.body.vanilla_syrup,
    hazelnut_syrup: req.body.hazelnut_syrup,
    caramel_syrup: req.body.caramel_syrup,
    dolche_syrup: req.body.dolche_syrup,
    classic_syrup: req.body.classic_syrup,
    chocolat_syrup: req.body.chocolat_syrup,
    toffeenut_syrup: req.body.toffeenut_syrup,
    mocha_syrup: req.body.mocha_syrup,
    white_mocha_syrup: req.body.white_mocha_syrup,
    brown_sugur_syrup: req.body.brown_sugur_syrup,
    frappuccino_syrup: req.body.frappuccino_syrup,
    mint_chocolate_sauce: req.body.mint_chocolate_sauce,
    strawberry_mix: req.body.strawberry_mix,
    black_sesame_syrup: req.body.black_sesame_syrup,
    honey_grapefruit_sauce: req.body.honey_grapefruit_sauce,
    chai_syrup: req.body.chai_syrup,
    water_base: req.body.water_base,
    vanilla_cream_base: req.body.vanilla_cream_base,
    black_tea_base: req.body.black_tea_base,
    passion_tango_tea_base: req.body.passion_tango_tea_base,
    cool_lime_base: req.body.cool_lime_base,
    lemonade_base: req.body.lemonade_base,
    ice: req.body.ice,
    milk: req.body.milk,
    milk_temp: req.body.milk_temp,
    milk_bubble: req.body.milk_bubble,
    milk_quantity: req.body.milk_quantity,
    general_whipping: req.body.general_whipping,
    espresso_whipping: req.body.espresso_whipping,
    cold_foam: req.body.cold_foam,
    mugwort_whipping: req.body.mugwort_whipping,
    caramel_drizzle: req.body.caramel_drizzle,
    chocolate_drizzle: req.body.chocolate_drizzle,
    lemon_slice: req.body.lemon_slice,
    rosemary: req.body.rosemary,
    grapefruit_slice: req.body.grapefruit_slice,
    javachip: req.body.javachip,
    javachip_and_topping: req.body.javachip_and_topping,
    tong_javachip_topping: req.body.tong_javachip_topping,
    toffeenut_topping: req.body.toffeenut_topping,
    rice_topping: req.body.rice_topping,
    black_soboro_topping: req.body.black_soboro_topping,
    ricecake_topping: req.body.ricecake_topping,
    topping: req.body.topping,
    mugwort_powder_topping: req.body.mugwort_powder_topping,
    chocolat_topping: req.body.chocolat_topping,
    orange_essence: req.body.orange_essence,
    sparkling: req.body.sparkling,
    green_tea_powder: req.body.green_tea_powder,
    rice_powder: req.body.rice_powder,
    mugwort_powder: req.body.mugwort_powder,
    black_sesame_rice_cake: req.body.black_sesame_rice_cake,
    mango_juice: req.body.mango_juice,
    signature_chocolate: req.body.signature_chocolate,
    hash: req.body.hash 
  },
    {where: {starmenu_id: menuID}, returning: true}).then(function(result) {
         res.json(result[1][0]);
    }).catch(function(err) {
         //TODO: error handling
    });
})


// 삭제
router.delete('/:id', function(req, res) {
  let menuID = req.params.id;
  models.starmenu.destroy({
    where: {starmenu_id: menuID}
  })
  .then( result => {
    res.redirect("/board")
  })
  .catch( err => {
    console.log("데이터 삭제 실패");
  });
});

// 기본 메뉴 조회
router.get('/basic', function(req, res) {
    models.starmenu.findAll({
      where: {
        basic_menu: 1
      }
    }).then((starmenu) => {
      starmenu["e"]
      res.json(starmenu)
      console.log(res.json(starmenu))
  });
});

// 커스텀 메뉴 조회
router.get('/custom', function(req, res) {
    models.starmenu.findAll({
      where: {
        basic_menu: 0
      }
    }).then((starmenu) => {
      res.json(starmenu)
  });
});

// 메뉴 상세정보 조회
router.get('/detail/:id', function(req, res) {
  let menuID = req.params.id;
  models.starmenu.findAll({
      where: {
          starmenu_id: menuID
      }
  }).then((starmenu) => {
      res.json(starmenu)
  });
});

// 카테고리 별 메뉴 조회
router.post('/category', function(req, res) {
  let categoryName = req.body.category;
  models.starmenu.findAll({
    where: {
      category: categoryName
    }
  }).then((starmenu) => {
      res.json(starmenu)
  });
});


module.exports = router;