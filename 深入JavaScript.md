# 深入JavaScript
* [函数返回值](#函数返回值)
* [函数传参](#函数传参)
  * [不定参](#不定参)

***
## 函数返回值
**可以没有return，但是只能返回一个值，这和Python不一样**

***
* Ex.1
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
function show() {
    return 12;
}
var a=show();
alert(a);
alert(show());
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.2 返回两个数的和
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
function show(a,b) {
    return a+b;
}
alert(show(1,2));
</script>
</head>
<body>

</body>
</html>
```

***
## 函数传参
### 不定参

***
* Ex.1 求和 arguments是个数组，可以直接遍历，从里面找东西！！！
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
function sum() {
    var result=0;
    for(var i=0;i<arguments.length;i++)
    {
        result+=arguments[i];
    }
    return result;
}
alert(sum(1,2,3));
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.1 CSS函数
```
CSS(oDiv,width)当是两个参数的时候，获取样式
CSS(oDiv,width,'200px')当是三个参数的时候，设置样式
```
**注意：实际上obj===argument[0],name===argument[1],value===argument[2]**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
function CSS(obj,name,value) {
    if(arguments.length===2)//获取行间样式
    {
        return obj.style[name];
    }
    else//设置行间样式
    {
        obj.style[name]=value;
    }
}
window.onload=function () {
    var oDiv=document.getElementById('div1');
    alert(CSS(oDiv,'width'));
    CSS(oDiv,'background','green');
}
</script>
</head>
<body>
<div id="div1" style="width: 200px;height: 20px;background: red;"></div>
</body>
</html>
```

***
* Ex.2 获取非行间样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<style>
    #div1
    {
        width: 200px;
        height: 20px;
        background: red;
    }
</style>
<script>
function getStyle(obj,name) {
    //获取非行间样式
    if(obj.currentStyle)
    {
        //IE
        return obj.currentStyle[name];
    }
    else
    {
        //chrome
        return getComputedStyle(obj,null)[name];
    }
}
window.onload=function () {
    var oDiv=document.getElementById('div1');
    alert(getStyle(oDiv,'width'));
    alert(getStyle(oDiv,'backgroundColor'))
}
</script>
</head>
<body>
<div id="div1" style=""></div>
</body>
</html>
```
```
只能获取单一样式。
复合样式：background,border
单一样式:width,height,position
非要取复合样式，例如`background`则应该使用`backgroundColor`
```
