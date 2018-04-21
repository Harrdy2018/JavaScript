# JavaScript教程-从入门到精通
![Alt text](https://github.com/Harrdy2018/JavaScript/blob/master/js.png)
## 目录
## 初识JavaScript
* 改变div的一种样式
```JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    #div1{
        width: 200px;
        height: 200px;
        background: red;
    }
</style>
<script>
    function setColor(color) {
        var oDiv=document.getElementById('div1');
        oDiv.style.background=color;
    }
</script>
<body>
<input type="button" value="变绿" onclick="setColor('green');"/>
<input type="button" value="变黄" onclick="setColor('yellow');"/>
<input type="button" value="变黑" onclick="setColor('black');"/>
<div id="div1"></div>
</body>
</html>
```
