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
