var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var app = express();
var app2 = express();

app.use(express.static(__dirname + "/views/FullCalendar-Example-master"));
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
app.set('view engine','ejs');
app2.set('view engine','ejs');

app2.set('FullCalendar-Example-master','/FullCalendar-Example-master');
app.get('/naver',function(req,res){
  res.writeHead(202,{"Content-Type":"text/html; charset=utf-8" });
  fs.createReadStream("./naver.html").pipe(res);
})
app.use(express.static('../public'));

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
  var sql2 = `CREATE TABLE ${name} (월 VARCHAR(255) NOT NULL, 일정기간 VARCHAR(255) NOT NULL, 일정 VARCHAR(255) NOT NULL)`;
  var param2 = name;
  connection.query(sql,param,function(err,row,field){
    if(err) throw err;
    console.log(row);
  })
  connection.query(sql2,function(err,row,field){
    if(err) throw err;
    console.log(1);
  })
  res.send(`회원가입되었습니다!!
            <a href ="/">돌아가기 </a>`);
})
  var name;
  var selector1;
  var number;
  var password;
app.post('/api',function(req,res){
  number = req.body.number1;
  password = req.body.passwd;
  var sql2 = 'SELECT * FROM admin';
  connection.query(sql2,'utf8',function(err,row,field){

    if(err) throw err;
    else{
      var check;
      for(var i = 0; i<row.length;i++){
        if(number == row[i].number && password == row[i].password){
          name = row[i].name;
          selector1 = row[i].selector;
          number = row[i].number;
          check = 1;
          break;
        }else{check = 2;}
      }
      if(check === 1){
        console.log(selector1);
        console.log(number);
        console.log(password);
        console.log(name);
        res.render('index',{
          name : name,
          number : number,
          selector : selector1,
          password1 : password,
        });
        }
        else{
            res.send(`<script>alert('로그인에 실패하였습니다.');
                      history.back();</script>`);
        }
    }
  })
});
app.post('/successlogin',function(req,res){
  var name = req.body.name1;
  console.log(name);
  var selector = req.body.selector;
  console.log(selector);
  var number = req.body.number1;
  console.log(number);
  var password = req.body.passwd;
  console.log(password);
  res.render('a',{
    name : name,
    number : number,
    selector : selector1,
    password1 : password,
  })
})
app.post('/out',function(req,res){
  var name = req.body.name1;
  console.log(name);
  var selector = req.body.selector;
  console.log(selector);
  var number = req.body.number1;
  console.log(number);
  var password = req.body.passwd;
  console.log(password);
  res.render('b',{
    name : name,
    number : number,
    selector : selector1,
    password1 : password,
  })
})
app.locals.pretty = true;
app.post('/html',function(req,res){
  res.writeHead(202,{"Content-Type":"text/html; charset=utf-8" });
  fs.createReadStream("./회원가입.html").pipe(res);
})

app.listen(60,function(){
  console.log('Connected 60 port!');
});
