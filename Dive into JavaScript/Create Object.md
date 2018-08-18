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
console.log(person1.constructor);
console.log(person2.constructor);
console.log(person1.constructor==person2.constructor);
console.log(person1 instanceof Object);
console.log(person2 instanceof Object);

ƒ Object() { [native code] }
ƒ Object() { [native code] }
true
true
true
也就是说，从表面上看是person1和person2来自于cPerson,但是实际上他们都来自于Object

2,内存泄漏。每次通过cPerson创建对象的时候，所有的job属性和sayHello方法都是一样的，但是却存储了多次，浪费资源。
```
