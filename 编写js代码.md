# 编写js代码
* HTML中嵌入js代码
  * 在页面中直接嵌入JS代码
  * 链接外部JavaScript文件
  * 测试js代码准备工作

## HTML中嵌入js代码
### 在页面中直接嵌入JS代码
* 在页面的任何位置（head部分、body部分、body的后面较好），插入script标签,对于该标签必要的type属性，描述文档的类型
* 在script标签内部编写js语句，alert("要提示的内容！！！")作用是在页面中弹出一个提示框，起到提醒和警告的作用
* 在JavaScript中单引号和双引号没有差别，都是用来表示字符串的。
* 每条语句写完最好加分号结束。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <script type="text/javascript">
        alert("Hello World!!!");
    </script>
</head>
<body>

</body>
</html>
```

***
* 扩展
* document.write()字段是标准的javascript命令，用来向页面写入输出
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
</head>
<body>
<script type="text/javascript">
    document.write("Hello World!!!");
</script>
</body>
</html>
```
* 如果我们不写script标签，浏览器就会将命令当作纯文本来处理。页面显示：`document.write("Hello World!!!");`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
</head>
<body>
document.write("Hello World!!!");
</body>
</html>
```

***
### 链接外部JavaScript文件
* 新建一个js文件  test.js
```javascript
alert('Hello World!!!');
```
* 新建一个html文档 test.html  链接test.js
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <script type="text/javascript" src="test.js"></script>
</head>
<body>

</body>
</html>
```
* 运行test.html
* 如果引入的外部文件依然不能满足编程要求，则再在html中添加script标签来编写语句！！！
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <script type="text/javascript" src="test.js"></script>
</head>
<body>

</body>
<script type="text/javascript">
    alert("引入外部js文件依然不能满足我的要求！！！")
</script>
</html>
```

***
### 测试js代码准备工作
**在一个文件夹里新建一个html和js文件，单独作为学习过程中的测试用！！！**
