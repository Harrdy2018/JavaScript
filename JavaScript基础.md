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
