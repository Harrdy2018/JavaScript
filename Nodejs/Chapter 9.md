# Nodejs笔记 Chapter 9
## util模块

***
### util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数
```js
let util=require('util');
//定义Base构造函数
function Base(){
    this.name='base';
    this.base=1991;
    this.sayHello=function(){
        console.log("Hello "+this.name);
    }
};
Base.prototype.showName=function(){
    console.log(this.name);
};
//定义Sub构造函数
function Sub(){
    this.name='sub';
};
//让Sub的实例继承Base实例原型上的东西
util.inherits(Sub,Base);

let objBase=new Base();
console.log(objBase);
console.log(objBase.showName());

let objSub=new Sub();
console.log(objSub);
console.log(objSub.showName());

//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
//同时，在原型中定义的属性不会被console.log 作为对象的属性输出
```
