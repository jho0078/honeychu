router.get('/create', function(req, res, next) {
    client.query("SELECT * FROM products;", function(err, result, fields){
      if(err){
        console.log("쿼리문에 오류가 있습니다.");
      }
      else{
        res.render('create', {
          results: result
        });
      }
    });
});