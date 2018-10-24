## div居中问题

### 如何居中div？
```
首先我们要知道   margin:25px 50px; 代表的意思
                上下边距为25px
                左右边距为50px
我们只要设置上下边距为任意值，左右边距为 auto 即可，也就是自动依赖浏览器                
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>test my Javascript</title>
    <style>
       #div1 {
           margin: 10px auto;
           border: 1px solid red;
           width: 80px;
           height: 50px;
       }
    </style>
</head>
<body>
    <div id="div1"></div>
</body>
<script>
</script>
</html>
```

### 如何居中一个浮动元素？
```html
```
