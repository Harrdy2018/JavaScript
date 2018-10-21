# Nodejs笔记 Chapter 7
## path模块

***
### 导入模块
* let path=require('path');

***
### path 对象
```js
[harrdy@localhost myNodejs]$ node ./test.js
{ resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: format],
  parse: [Function: parse],
  sep: '/',
  delimiter: ':',
  win32:
   { resolve: [Function: resolve],
     normalize: [Function: normalize],
     isAbsolute: [Function: isAbsolute],
     join: [Function: join],
     relative: [Function: relative],
     toNamespacedPath: [Function: toNamespacedPath],
     dirname: [Function: dirname],
     basename: [Function: basename],
     extname: [Function: extname],
     format: [Function: format],
     parse: [Function: parse],
     sep: '\\',
     delimiter: ';',
     win32: [Circular],
     posix: [Circular],
     _makeLong: [Function: toNamespacedPath] },
  posix: [Circular],
  _makeLong: [Function: toNamespacedPath] }
[harrdy@localhost myNodejs]$
```

***
### 常见方法
* path.normalize(p)    规范化路径，注意'..' 和 '.'
```js
let path=require('path');
console.log(path.normalize('.////data.txt'));   // data.txt
console.log(path.normalize('./data.txt'));      // data.txt
```
* path.join([path1][, path2][, ...])
* 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"
```js
let path=require('path');
console.log(path.join("./a.txt",'b.txt','aa','jj.js'));  //a.txt/b.txt/aa/jj.js
```
* path.resolve([from ...], to)   将 to 参数解析为绝对路径。
```js
let path=require('path');
console.log(path.resolve('data.txt'));   //    /home/harrdy/myNodejs/data.txt
```
* path.extname(p)
* 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。
* 如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
```js
let path=require('path');
console.log(path.extname('data.txt'));
console.log(path.extname('data'));

[harrdy@localhost myNodejs]$ node ./test.js
.txt

[harrdy@localhost myNodejs]$
```

***
### 属性
```
path.sep
平台的文件路径分隔符，'\\' 或 '/'。
path.delimiter
平台的分隔符, ; or ':'.
path.posix
提供上述 path 的方法，不过总是以 posix 兼容的方式交互。
path.win32
提供上述 path 的方法，不过总是以 win32 兼容的方式交互。
```
