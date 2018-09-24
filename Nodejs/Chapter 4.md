# Nodejs笔记 Chapter 2
## http模块
***http 模块主要用于搭建 HTTP 服务端和客户端***

## 搭建http服务端
* 第一种方法
```js
var http=require("http");
//首先用http.createServer函数创建了一个服务器对象
http.createServer(function(req,res) {
  res.writeHead(200,{
    'content-type':"text/html"
  });
  res.write("Hello world<br>");
  res.write("<p>hahahah</p>");
  res.end();
}).listen(3000);

console.log('server running at http://localhost:3000');

[harrdy@HJX myNodejs]$ node ./serverA.js
server running at http://localhost:3000
```

***
* 第二种方法
```js
var http=require("http");
var server=new http.Server();
server.on("request",function(req,res){
  res.writeHead(200,{
    'content-type':'text/html'
  })
  res.write("<h1>I love you very much!!!</h1>");
  res.end();
})
server.listen(3000);

console.log("server running at http://localhost:3000");
```

## 搭建http客户端
* 客户端相当于爬虫的意思，下面是请求cn.bing.com 网页的实例
```js
//get request
var http=require("http");
var options={
  hostname:'cn.bing.com',
  port:80
};
var req=http.request(options,function(res){
  res.setEncoding("utf-8");
  res.on("data",function(chunk){
    console.log(chunk.toString());
  });
  console.log(res.statusCode);
});

req.on("error",function(err){
  console.log("failed!!");
  console.log(err.message);
});
req.end();
```

***
## Example
* 前端页面设计
```html
<!DOCTYPE html>
<html>
<head>
  <title>test my app</title>
  <meta charset="utf-8">
</head>
<body>
  <h1>Hello World!!!</h1>
  <p>my first html example!!!</p>
  <form action="https://www.baidu.com" target="_blank">
    <p>user: <input type="text" name="user"></p>
    <p>password: <input type="password" name="password"></p>
    <input type="submit" value="submit">
  </form>
</body>
</html>
```

***
* 服务端脚本
```js
var http=require("http");
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){
  console.log(req.url);
  console.log(url.parse(req.url));
  var pathname=url.parse(req.url).pathname;
  console.log('request filename '+pathname);
  fs.readFile(pathname.substr(1),function(err,data){
      if(err){
        console.log(err);
        res.writeHead(404,{'Content-Type':'text/html'});
      }
      else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data.toString());
      }
      res.end();
  });
}).listen(8080);

console.log('server running at http://localhost:8080')

运行之后结果
/usr/local/bin/node server.js 
server running at http://localhost:8080
```

***
* 在浏览器输入网址，得到一个页面，服务端控制台也有相应的输出
```js
/usr/local/bin/node server.js 
server running at http://localhost:8080
/index.html
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/index.html',
  path: '/index.html',
  href: '/index.html' }
request filename /index.html
```

***
* 运行客户端脚本，爬去网页面
```js
//get request
var http=require("http");
var options={
  hostname:'localhost',
  port:8080,
  path:'/index.html'
};
var req=http.request(options,function(res){
  res.setEncoding("utf-8");
  res.on("data",function(chunk){
    console.log(chunk.toString());
  });
  console.log(res.statusCode);
});

req.on("error",function(err){
  console.log("failed!!");
  console.log(err.message);
});
req.end();

[harrdy@HJX myNodejs]$ ls
client.js  data.txt  index.html  server.js
[harrdy@HJX myNodejs]$ node ./client.js
200
<!DOCTYPE html>
<html>
<head>
  <title>test my app</title>
  <meta charset="utf-8">
</head>
<body>
  <h1>Hello World!!!</h1>
  <p>my first html example!!!</p>
  <form action="https://www.baidu.com" target="_blank">
    <p>user: <input type="text" name="user"></p>
    <p>password: <input type="password" name="password"></p>
    <input type="submit" value="submit">
  </form>
</body>
</html>
[harrdy@HJX myNodejs]$
```
