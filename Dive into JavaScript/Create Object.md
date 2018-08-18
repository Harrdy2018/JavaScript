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
***
## 原型模式
```js
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
}
Person.prototype.job="student";
Person.prototype.sayHello=function ()
{
    console.log("Hello,I'am a student.");
};
var person1=new Person("Harrdy");
var person2=new Person("harrdy");

console.log(person1.constructor);//构造函数Person
console.log(Person.prototype.constructor);//构造函数Person

//第二种写法  更加简单的写法
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
}
Person.prototype=
    {
        job:"student",
        sayHello:function ()
        {
            console.log("Hello,I'am a student.");
        }
    };
var person1=new Person("Harrdy");
var person2=new Person("harrdy");
console.log(person1.constructor);//构造函数Object
console.log(Person.prototype.constructor);//构造函数Object
```
* 优点
```
1,方法和属性共享  解决内存泄漏问题
console.log(person1.job==person2.job);//true
console.log(person1.sayHello==person2.sayHello);//true

2,可以动态的添加原型对象的方法和属性，并直接反映在对象实例上
var person1=new Person("Harrdy");
Person.prototype.showLove=function ()
{
    console.log("I love you very much!!!");
};
person1.showLove();//I love you very much!!!
```
* 缺点
```js
使用原型，所有的属性都将被共享，这是个很大的优点，同样会带来一些缺点
原型中所有属性实例是被很多实例共享的，这种共享对于函数非常合适。对于那些包含基本值的属性也勉强可以，
毕竟实例属性可以屏蔽原型属性。但是引用类型值，就会出现问题了
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
}
Person.prototype=
    {
        job:"student",
        friends:['A','B']
    };
var person1=new Person("Harrdy");
var person2=new Person("harrdy");
console.log(person1.constructor);//构造函数Object
console.log(Person.prototype.constructor);//构造函数Object

person1.friends.push('C');
console.log(person1.friends); //["A", "B", "C"]
console.log(person2.friends); //["A", "B", "C"]
console.log(person1.friends === person2.friends); //true
friends存在与原型中，实例person1和person2指向同一个原型，person1修改了引用的数组，也会反应到实例person2中

在用第二种写法的时候
将Person.prototype设置为等于一个以对象字面量形式创建的对象，但是会导致.constructor不在指向Person了。
使用这种方式，完全重写了默认的Person.prototype对象，因此 .constructor也不会存在这里
Person.prototype.constructor === Person  // false
如果需要这个属性的话，可以手动添加

//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
}
Person.prototype=
    {
        constructor: Person,
        job:"student",
        sayHello:function ()
        {
            console.log("Hello,I'am a student.");
        }
    };
var person1=new Person("Harrdy");
var person2=new Person("harrdy");
console.log(person1.constructor);//构造函数Person
console.log(Person.prototype.constructor);//构造函数Person

不过这种方式还是不够好，应为constructor属性默认是不可枚举的，这样直接设置，它将是可枚举的。
所以可以时候，Object.defineProperty方法
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
}
Person.prototype=
    {
        job:"student",
        sayHello:function ()
        {
            console.log("Hello,I'am a student.");
        }
    };
Object.defineProperty(Person.prototype, 'constructor',
    {
        enumerable: false,
        value: Person
    });
var person1=new Person("Harrdy");
console.log(person1.constructor);//构造函数Person
console.log(Person.prototype.constructor);//构造函数Person
```
***
## 组合使用构造函数模式和原型模式
```
这是使用最为广泛、认同度最高的一种创建自定义类型的方法。它可以解决上面那些模式的缺点
使用此模式可以让每个实例都会有自己的一份实例属性副本，但同时又共享着对方法的引用
这样的话，即使实例属性修改引用类型的值，也不会影响其他实例的属性值了
```
```js
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
    this.friends=['A','B'];
}
Person.prototype.job="student"
var person1=new Person("Harrdy");
var person2=new Person("harrdy");
person1.friends.push('C');
console.log(person1.friends); //["A", "B", "C"]
console.log(person2.friends); //["A", "B"]
console.log(person1.friends === person2.friends); //false
```
***
## 动态原型模式
```js
//下面创建对象的职业全为学生
function Person(name)
{
    this.name=name;
    if(typeof this.showLove !="function")
    {
        Person.prototype.showLove=function ()
        {
            console.log("I love you very much!!!");
        }
    }
}
var person1=new Person("Harrdy");
person1.showLove();
```
```
动态原型模式将所有信息都封装在了构造函数中，初始化的时候，通过检测某个应该存在的方法时候有效，来决定是否需要初始化原型
只有在showLove方法不存在的时候，才会将它添加到原型中。这段代码只会初次调用构造函数的时候才会执行。
此后原型已经完成初始化，不需要在做什么修改了
这里对原型所做的修改，能够立即在所有实例中得到反映
其次，if语句检查的可以是初始化之后应该存在的任何属性或方法，所以不必用一大堆的if语句检查每一个属性和方法，只要检查一个就行
```
