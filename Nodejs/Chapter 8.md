# Nodejs笔记 Chapter 8
## 全局对象

***
### 全局对象
* global是全局对象 每一个全局对象都有一个global属性  而又是全局对象  如此循环
```js
console.log(toString.call(global));
console.log(toString.call(global.global));
console.log(toString.call(global.global.global));

[harrdy@localhost myNodejs]$ node ./test.js
[object global]
[object global]
[object global]
[harrdy@localhost myNodejs]$
```

***
###  __filename 表示当前正在执行的脚本的文件名。
* 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
