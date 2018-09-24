# Nodejs笔记 Chapter 5
## express框架

***
## express 框架环境配置
以下几个重要的模块是需要与 express 框架一起安装的：
* body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。  这个在express框架里面本来就存在！！！！
* cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
* multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
### 几个重要的npm命令
```linux
[harrdy@HJX node_modules]$ npm list express cookie-parser multer
/home/harrdy/mySoftware/node-v10.8.0-linux-x64/lib
├── cookie-parser@1.4.3 
├── express@4.16.3 
└── multer@1.3.1 

[harrdy@HJX node_modules]$ npm v multer

multer@1.3.1 | MIT | deps: 8 | versions: 33
Middleware for handling `multipart/form-data`.
https://github.com/expressjs/multer#readme

keywords: form, post, multipart, form-data, formdata, express, middleware

dist
.tarball: https://registry.npmjs.org/multer/-/multer-1.3.1.tgz
.shasum: c3fb3b35f50c7eefe873532f90d3dde02ce6e040
.integrity: sha512-JHdEoxkA/5NgZRo91RNn4UT+HdcJV9XUo01DTkKC7vo1erNIngtuaw9Y0WI8RdTlyi+wMIbunflhghzVLuGJyw==
.unpackedSize: 26.1 kB

dependencies:
append-field: ^0.1.0  concat-stream: ^1.5.2 object-assign: ^3.0.0 type-is: ^1.6.4       
busboy: ^0.2.11       mkdirp: ^0.5.1        on-finished: ^2.3.0   xtend: ^4.0.0         

maintainers:
- hacksparrow <captain@hacksparrow.com>
- jpfluger <japes@aberlorn.com>
- linusu <linus@folkdatorn.se>

dist-tags:
latest: 1.3.1        next: 2.0.0-alpha.6  

published 2 months ago by linusu <linus@folkdatorn.se>
[harrdy@HJX node_modules]$ 
```

***
## simple example
```js
let express=require('../mySoftware/node-v10.8.0-linux-x64/lib/node_modules/express');
//the express is a Function!!!
console.log(toString.call(express));
let app=express();

app.get('/',function(req,res){
  console.log(req);
  console.log(res);
  res.send('Hello World!!!');
});

let server=app.listen(8000,function(){
  console.log(server.address());
  let host=server.address().address;
  let port=server.address().port;
  console.log('The server is running at https://%s:%s',host,port);
})
```
