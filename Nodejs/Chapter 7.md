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
