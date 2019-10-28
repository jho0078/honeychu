var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', require('./routes/api'))

// 추가
// var sequelize = require('./models/index').sequelize; // mysql 시퀄라이저 모델
// sequelize.sync(); //서버가 실행될때 시퀄라이저의 스키마를 DB에 적용시킨다.
// sequelize 연습-----------------------
// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('honeychu', 'semin', 'gjslqjxjclq', {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3307,
// });
// var StarMenu = sequelize.define('starMenu', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   name: {type: Sequelize.STRING(45)},
//   beverage:{type: Sequelize.STRING(45)},
//   price: {type: Sequelize.INTEGER},
//   image: {type: Sequelize.TEXT},
// }, {
//   timestamps: false
// });
// const { Person } = require('../models');
// app.get('/api/starmenu', function(request, response) {
//   starmenu.findAll().then((starmenu) => {
//     response.json(starmenu)
//   });
// });
// var bodyParser = require('body-parser');//
// app.use(bodyParser.urlencoded({extended:false}));
// app.locals.pretty = true;
// // app.use(express.static('public'))
// app.use(express.static('static'))
// // Connection 객체 생성
// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3307,
//   user: 'semin',
//   password: 'gjslqjxjclq',
//   database: 'honeychu'
// });
// // Connect
// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... \n\n");
// } else {
//     console.log("Error connecting database ... \n\n");
// }
// });
// app.get("/",function(request,response){
// connection.query('SELECT * from star_combi', function(err, result, fields) {
// connection.end();
//   if (!err){
//     response.send(result);
//     console.log('The solution is: ', result);
//   }
//   else
//     console.log('Error while performing Query.');
//   });
// });
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// app.post('/regist', function (req, res) {
//   var user = {
//     'userid': req.body.userid,
//     'name': req.body.name,
//     'address': req.body.address
//   };
//   var query = connection.query('insert into users set ?', user, function (err, result) {
//     if (err) {
//       console.error(err);
//       throw err;
//     }
//     res.status(200).send('success');
//   });
// });
module.exports = app