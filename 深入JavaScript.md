# 深入JavaScript
* [函数返回值](#函数返回值)
* [函数传参](#函数传参)
  * [不定参](#不定参)
* [数组基础](#数组基础)
  * [定义](#定义)
  * [数组的属性](#数组的属性)
  * [数组使用原则](#数组使用原则)
  * [数组添加元素](#数组添加元素)
  * [数组删除元素](#数组删除元素)
  * [splice用法](#splice用法)
  * [转换](#转换)
  * [排序](#排序)

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

***
## 数组基础
### 定义
* var arr=[12,5,8,9];
* var arr=new Array(12,5,8,9);
* 没有任何差别,[]的性能略高，因为代码短。
### 数组的属性
* length
* 既可以获取，又可以设置
* 例子：快速清空数组
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[1,2,3,4,5,6];//新建一个数组
alert(arr);//弹出数组信息
alert(arr.length);//弹出数组长度信息
arr.length=3;//设置数组的长度
alert(arr);
arr.length=0;//清空数组
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
### 数组使用原则
**数组中应该只存一种类型的变量**

***
### 数组添加元素
* Ex.1 push(element),从尾部添加
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[1,2,3,4,5,6];//新建一个数组
alert(arr);
arr.push(4);
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.2 unshift(element),从头部添加
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[1,2,3,4,5,6];//新建一个数组
alert(arr);
arr.unshift(4);
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
### 数组删除元素
* Ex.1 pop(),从尾部删除
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[1,2,3,4,5,6];//新建一个数组
alert(arr);
arr.pop();
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.2 shift(),从头部删除
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[1,2,3,4,5,6];//新建一个数组
alert(arr);
arr.shift();
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
### splice用法
* Ex.1 splice()
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[1,2,3,4,5,6];
//删除：splice(起点,长度)
//arr.splice(2,3);
//alert(arr);//[1,2,6]
//插入；splice(起点，长度，元素...)
//arr.splice(2,0,'a','b','c');//[1,2,'a','b','c',3,4,5,6]
//替换
arr.splice(2,2,'a','b');
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
### 转换
* Ex.1 数组连接concat()
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr1=[1,2,3];
var arr2=[4,5,6];
alert(arr1.concat(arr2));
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.2 join(分割符) 用分割符把数组拼成字符串
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr1=[1,2,3,4,5,6];
alert(arr1.join('**'));
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.3 字符串split(分隔符)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var str='Har-rdy2-018';
arr1=str.split('-');
alert(arr1)
</script>
</head>
<body>

</body>
</html>
```

***
### 排序
* Ex.1 字符串数组排序
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
    var arr=['float','width','alpha','zoom','left'];
    arr.sort();
    alert(arr);
</script>
</head>
<body>
</body>
</html>
```

***
* Ex.2 数字数组排序，需要加比较函数，不然的话sort()默认也是按照字符串数组方式排序的！！！
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[12,8,99,19,112];
arr.sort(function (a,b) {
    if(a<b)
    {
        return -1;
    }
    else if(a>b)
    {
        return 1;
    }
    else
    {
        return 0;
    }
});
alert(arr);
</script>
</head>
<body>

</body>
</html>
```

***
* Ex.3 怎么样改进呢？其实只要在比较函数里判断是否小于0和大于0和等于0就可以了！！！
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
<script>
var arr=[12,8,99,19,112];
arr.sort(function (a,b) {
    return a-b;
});
alert(arr);
</script>
</head>
<body>

</body>
</html>
```
