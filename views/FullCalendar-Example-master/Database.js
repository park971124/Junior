var mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '123456',
  database : 'cnudb',
})

connection.connect();

var sql = 'SELECT * FROM test';

connection.query(sql,'utf8',function(err,row,field){
  console.log(row);
})
