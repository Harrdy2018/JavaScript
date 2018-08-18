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
