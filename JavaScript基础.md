# JavaScript基础
* [JavaScript组成](#JavaScript组成)
* [变量类型](#变量类型)
* [变量作用域](#变量作用域)
* [闭包](#闭包)
* [命名规范](#命名规范)
* [运算符](#运算符)
* [程序流程控制](#程序流程控制)

***
## JavaScript组成
* ECMAScript解释器、翻译
* DOM:Document Object Model 操作html的能力
* BOM:Browser Object Model 操作浏览器的能力
  * 各组成部分兼容性、兼容性问题由来
  * ECMA几乎没有兼容性问题
  * DOM有一些操作不兼容
  * BOM没有兼容问题（完全不兼容，基本不用）

***
## 变量类型
* 类型typeof运算符
  * 用法、返回值
  * 常见类型
    * number,string,boolean,undefinde,object,function
* 一种变量应该只存一种类型的数据
* 数据类型转换
* 例子：计算两个文本框的和
* 显示类型转换（强制类型转换）
  * parseInt() parseFloat()
  * NaN的意义和检测
* 隐式类型转换
  * ==,===
  * 减法

***
* Ex.1 undefined出现在，变量真的没定义；定义了，但是没有赋值。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
<script>
    //var a=12;alert(typeof a);//number
    //var a='Hrrrdy2018';alert(typeof a);//string
    //var a=true;alert(typeof a);//boolean
    /*
    a=function () {
        alert('Harrdy2018');
    };
    alert(typeof a);//function*/
    //a=document;alert(typeof a);//object
    //alert(typeof b);//undefined
    //var b;alert(typeof b)//undefined
</script>
</head>
<body>
</body>
</html>
```

***
* Ex.2 将字符串转为数字 parseInt(string)用法，该方法从左向右检索字符串，一旦碰到一个非数字的字符，就跳出来
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>将字符串转为数字</title>
<script>
    var a='12';
    alert(parseInt(a)+1);//13
    var b='12px';
    alert(parseInt(b));//12
    var c='12px12';
    alert(parseInt(c));//12
    var d='abc';
    alert(parseInt(d))//NaN Not a Number非数字
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.3 点击sum按钮，实现两个文本框的求和
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>求和</title>
<script>
    window.onload=function (){
        var oTxt1=document.getElementById('txt1');
        var oTxt2=document.getElementById('txt2');
        var oBtn1=document.getElementById('btn1');
        oBtn1.onclick=function () {
            alert(parseInt(oTxt1.value)+parseInt(oTxt2.value));
        };
    };
</script>
</head>
<body>
<input id="txt1" type="text"/>
<input id="txt2" type="text"/>
<input id="btn1" type="button" value="sum"/>
</body>
</html>
```

***
* Ex.4 NaN和NaN是不相等的
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>title</title>
<script>
    var a=parseInt('abc');
    var b=parseInt('def');
    alert(a===b);
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.5 改进例3，当用户输入的不是数字怎么办？当用户输入的是小数怎么办？
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>求和</title>
<script>
    window.onload=function (){
        var oTxt1=document.getElementById('txt1');
        var oTxt2=document.getElementById('txt2');
        var oBtn1=document.getElementById('btn1');
        oBtn1.onclick=function () {
            var n1=parseFloat(oTxt1.value);
            var n2=parseFloat(oTxt2.value);
            if (isNaN(n1)){
                alert('你输入的第一个数字有误！！！');
            }
            else if(isNaN(n2)){
                alert('你输入的第二个数字有误！！！');
            }
            else {
                alert(n1 + n2);
            }
        };
    };
</script>
</head>
<body>
<input id="txt1" type="text"/>
<input id="txt2" type="text"/>
<input id="btn1" type="button" value="sum"/>
</body>
</html>
```

***
* Ex.6 ==先转换再比较；===不转换类型直接比较。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>title</title>
<script>
    var a=5;
    var b='5';
    alert(a==b);//true
    alert(a===b);//false
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.7 隐式类型转换 字符串相加时，字符串连接；字符串相减时，数字相减。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>隐式类型转换</title>
<script>
    var a='12';
    var b='7';
    alert(a+b);//127 1,字符串连接  2，数字相加
    alert(a-b);//5  只有数字相减功能
</script>
</head>
<body>

</body>
</html>
```

***
## 变量作用域
* 变量作用域(作用范围)
* Ex.1 局部变量和全局变量
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
    var a=12;//全局变量，在任何地方都能用
    function bbb() {
        var b=4;//局部变量，只能在定义它的函数里使用
        alert(b);
    }
    alert(a);
    bbb();
</script>
</head>
<body>

</body>
</html>
```

***
## 闭包
**定义：子函数可以使用父函数中的局部变量**
* Ex.1 我们把下面的`aaa()`函数叫做父函数，`bbb()`函数叫做子函数。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
    function aaa() {
        var a=12;
        function bbb() {
            alert(a);
        }
        bbb();
    }
    aaa();
</script>
</head>
<body>

</body>
</html>
```

***
## 命名规范
* 可读性
* 规范性
* 类型前缀
* 首字母大写
***
|类型|前缀|类型|实例|
|:------:|:------:|:------:|:------:|
|数组|a|Array|aItems|
|布尔值|b|Boolean|bIsComplete|
|浮点数|f|Float|fPrice|
|函数|fn|Function|fnHandler|
|整数|i|Integer|iItemCount|
|对象|o|Object|oDiv1|
|正则表达式|re|RegExp|reEmailCheck|
|字符串|s|String|sUserName|
|变体变量|v|Variant|vAnything|

***
## 运算符
* 算术：+加、-减、`*`乘、/除、%取模

***
* Ex.1 取模
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
alert(7%5);
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.2 隔行变色
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
window.onload=function ()
{
    var aLi=document.getElementsByTagName('li');
    for (var i=0;i<aLi.length;i++)
    {
        //i=0,1,2,3,4,5,6...
       if(i%2===0)
       {
            //i=0,2,4,6,8...
           aLi[i].style.background='#ccc';
       }
       else
       {
            //i=1,3,5,7,9...
            aLi[i].style.background='';
       }
    }
}
</script>
</head>
<body>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
</body>
</html>
```

***
* Ex.3 秒转时间
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var a=156;
alert(parseInt(a/60)+'分'+a%60+'秒');
</script>
</head>
<body>

</body>
</html>
```

***
* 赋值：=,+=,-=,*=,/=,%=

***
* 关系:<,>,<=,>=,==,===,!=,!==

***
* 逻辑：&&与，||或，!非

***
* 运算符优先级：括号

***
## 程序流程控制
* 判断：if,switch,?:

***
* Ex.1 switch用法
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var name='Harrdy';
var sex='男';
switch(sex)
{
    case '男':
        alert(name+'先生，您好！！！');
        break;
    case '女':
        alert(name+'女士，您好！！！');
        break;
    default:
        alert(name+'您好！！！')
}
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.2 `?:`三目运算符 **条件?语句1:语句二** 判断偶数和奇数
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var a=35;
a%2===0?alert('偶数'):alert('奇数');
</script>
</head>
<body>

</body>
</html>
```

***
* 循环：while,for

***
* 跳出：break,continue
```
break:直接跳出循环，再也不进入循环了
continue:跳出此次循环，继续进行下一次循环
```

***
* 什么是真，什么是假
```
真：true、非零数字、非空字符串、非空对象
假：false、数字零、空字符串、空对象/null、undefined
```

***
* Json
```

```
