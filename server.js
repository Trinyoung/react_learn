const http = require('http');
const fs = require('fs');
const app = http.createServer(function (req, res) {
  //req表示请求，request;  res表示响应，response
  //设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
  // console.log(req.url);
  let data;
  if (req.url!== '/favicon.ico') { 
    data = fs.readFileSync(__dirname+req.url);
  }
  res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
  res.end(data);
});
app.listen(80);