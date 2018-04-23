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
