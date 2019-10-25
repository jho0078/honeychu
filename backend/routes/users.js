var express = require('express');
var router = express.Router();

router.get('/api/v1/users', function (req, res) {
  res.locals.connection.query('SELECT * FROM users', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/api/v1/users', function(req, res, next) {
// 	res.locals.connection.query('SELECT * FROM users', function (error, results, fields) {
// 	// res.locals.connection.query('SELECT * FROM users', function (error, results, fields) {
// 	// res.locals.connection.query('SELECT * from test_crud.users', function (error, results, fields) {
// 		if (error) throw error;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     console.log(results)
// 	});
// });

module.exports = router;
