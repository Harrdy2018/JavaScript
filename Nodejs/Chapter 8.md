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
```js
console.log(__filename);  //   /home/harrdy/myNodejs/test.js
```

***
### __dirname 表示当前执行脚本所在的目录
```js
console.log(__dirname);  //  /home/harrdy/myNodejs
```

***
### setTimeout(cb, ms)
* setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
* 返回一个代表定时器的句柄值  这个句柄值是一个对象，包含了这个定时器的信息
```js
let id=setTimeout(()=>{
    console.log("Hello wolrd !!"),1000
});
console.log(toString.call(id));

[harrdy@localhost myNodejs]$ node ./test.js
[object Object]
Hello wolrd !!
[harrdy@localhost myNodejs]$
```

***
### clearTimeout(t)
* 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
```js
let id=setTimeout(()=>{
    console.log("Hello wolrd !!"),1000
});
clearTimeout(id);
```

***
### setInterval(cb, ms)
```
setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
```
