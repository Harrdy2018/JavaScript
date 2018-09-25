# Object对象

***
### Object.assign()
* 通过复制一个或多个对象来创建一个新的对象
***Object.assign(target, ...sources)  返回目标对象***
* 复制一个对象
```js
let obj={a:1};
let copy=Object.assign({},obj);
console.log(copy);//{a:1}
```
