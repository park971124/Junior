var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var app = express();

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '123456',
  database : 'cnudb',
})
connection.connect();
var sql = 'INSERT INTO admin (name,number,selector,password) VALUES(?,?,?,?)';


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.set('view engine','jade');
app.set('abc','./views');

app.get('/naver',function(req,res){
  res.writeHead(202,{"Content-Type":"text/html; charset=utf-8" });
  fs.createReadStream("./naver.html").pipe(res);
})
app.use(express.static('../public'));
app.get('/views',function(req,res){
  res.render('form');
})
app.get('/',function(req ,res){
  res.writeHead(202,{"Content-Type":"text/html; charset=utf-8" });
  fs.createReadStream("./초기화면.html").pipe(res);
});
app.post('/form_receive',function(req,res){
  var name = req.body.name1;                // 문제발생을 해결하기 위해 body-parser설치 필요
  var number = req.body.number1;
  var pass = req.body.passwd;
  var selector = req.body.selector;
  var param = [name,number,selector,pass];
  connection.query(sql,param,function(err,row,field){
    if(err) throw err;
    console.log(row);
  })
  res.send(`회원가입되었습니다!!
            <a href ="/">돌아가기 </a>`);
})
app.post('/successlogin',function(req,res){
  var number = req.body.number1;
  var password = req.body.passwd;
  var sql2 = 'SELECT * FROM admin';

  connection.query(sql2,'utf8',function(err,row,field){
    if(err) throw err;
    else{
      var check;
      for(var i = 0; i<row.length;i++){
        if(number == row[i].number && password == row[i].password){
          console.log(number == row[i].number);
          console.log(password == row[i].password);
          check = 1;
          break;
        }
        else{
          console.log(number == row[i].number);
          console.log(password == row[i].password);
          check = 2;
        }
      }
      if(check === 1){
            res.send(`<script>alert('로그인되었습니다!')</script>`);
        }
        else{
            res.send(`<script>alert('로그인에 실패하였습니다.');
                      history.back();</script>`);
        }
    }
  })

})
app.locals.pretty = true;

app.get('/html',function(req,res){
  res.writeHead(202,{"Content-Type":"text/html; charset=utf-8" });
  fs.createReadStream("./회원가입.html").pipe(res);
})
app.listen(60,function(){
  console.log('Connected 60 port!');
});
