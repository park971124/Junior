var express = require('express');
var fs = require('fs');
const app = express();

app.get('/', function(req, res) {
  res.writeHead(202, {
    "Content-Type": "text/html; charset=utf-8"
  });
  fs.createReadStream("./map.html").pipe(res);
})
app.listen(60);
