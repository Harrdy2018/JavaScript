# 深入JavaScript系列之创建对象的7种方法
## 工厂模式
```js
//下面创建对象的职业全为学生
function cPerson(name)
{
    var o=new Object();
    o.name=name;
    o.job="student";
    o.sayHello=function ()
    {
        console.log("Hello,I'am a student.");
    };
    return o;
}
var person1=cPerson("Harrdy");
var person2=cPerson("harrdy");
```
* 优点
```
解决了创建多个相似对象的问题,每次都会返回一个包含两个属性和一个方法的对象
```
* 缺点
```
1,有人说是无法通过constructor识别对象，也有人说是没有解决对象识别问题，实际上是一个意思：
console.log(person1.constructor);//构造函数Object
console.log(person2.constructor);//构造函数Object
console.log(person1.constructor==person2.constructor);//true
console.log(person1 instanceof Object);//true
console.log(person2 instanceof Object);//true
也就是说，从表面上看是person1和person2来自于cPerson,但是实际上他们都来自于Object

2,内存泄漏。每次通过cPerson创建对象的时候，所有的job属性和sayHello方法都是一样的，但是却存储了多次，浪费资源。
```
***
## 构造函数模式
```js
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
    this.job="student";
    this.sayHello=function ()
    {
        console.log("Hello,I'am a student.");
    };
}
var person1=Person("Harrdy");
var person2=Person("harrdy");
```
* 优点
```
object instanceof constructor
object:要检测的对象
constructor:某个构造函数
instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

1,通过constructor或者instanceof可以识别对象实例的类别
console.log(person1.constructor);//构造函数Person
console.log(person1 instanceof Person);//true  Person.prototype在对象person1的原型链上
console.log(person1 instanceof Object);//true  Person.prototype在对象person2的原型链上
2,可以通过new 关键字来创建对象实例，更像OO语言中创建对象实例
```
* 缺点：内存泄漏
