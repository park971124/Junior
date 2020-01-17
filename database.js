const mysql = require('mysql');
const http = require('http');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '123456',
  database : 'cnudb',
})

connection.connect();
var a = [];
var sql = 'SELECT * FROM 편의시설';
connection.query(sql,'utf8',function(err,row,field){
  if(err) {
    console.log(err);
  }
  else{
    for(var i = 0; i<row.length; i++){
    a.push({
      번호 : row[i].번호,
      이용시간 : row[i].시간,
      이름 : row[i].이용시설,
      설명 : row[i].설명,
      });
    }
  }
});
const app = http.createServer(function(request,respond){

  respond.writeHead(202 ,{'Content-Type':'text/plain; charset=utf-8'});
  respond.end(
    `${a[0].번호}
     ${a[0].이름}
     ${a[0].이용시간}
     ${a[0].설명}`);
})

app.listen(2968);
