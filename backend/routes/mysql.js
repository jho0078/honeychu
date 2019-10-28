var express    = require("express");  
var mysql      = require('mysql');  
var router     = express.Router();
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',   
    password: '1234',
    database: 'test_crud'  
});  
  
var app = express();  
  
connection.connect(function(err){  
  if(!err) {  
      console.log("Database is connected ... \n\n");    
  } else {  
      console.log("Error connecting database ... \n\n");    
  }  
});  
  
app.get("/users",function(request,response){  
connection.query('SELECT * from users', function(err, rows, fields) {  
connection.end();  
  if (!err){  
    response.send(rows);   
    console.log('The solution is: ', rows);  
  }  
  else  
    console.log('Error while performing Query.');  
  });  
});  
  
app.listen(3000); 
module.exports = router;