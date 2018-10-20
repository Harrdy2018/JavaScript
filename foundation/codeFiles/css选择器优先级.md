## css选择器优先级
* ***内联>ID>calss>元素/标签选择器***

### class选择器和元素选择器比较
* calss选择器强
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <title>Title</title>
    <style>
        p{
            color: red;
            font-size: 30px;
            font-style: italic;
        }
        .p1{
            color: #00b3ff;
            font-size: 50px;
        }
    </style>
</head>
<body>
   <p class="p1">you are a very goor girl</p>
</body>
</html>
```

***
###  id选择器和class选择器比较
* id选择器更强
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <title>Title</title>
    <style>
        p{
            color: red;
            font-size: 30px;
            font-style: italic;
        }
        .p1{
            color: #00b3ff;
            font-size: 50px;
        }
        #ppa{
            color: #ffc002;
            font-size: 90px;
        }
    </style>
</head>
<body>
   <p class="p1" id="ppa">you are a very goor girl</p>
</body>
</html>
```

***
### 内联样式和id选择器比较
* 内联样式更强
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <title>Title</title>
    <style>
        p{
            color: red;
            font-size: 30px;
            font-style: italic;
        }
        .p1{
            color: #00b3ff;
            font-size: 50px;
        }
        #ppa{
            color: #ffc002;
            font-size: 90px;
        }
    </style>
</head>
<body>
   <p class="p1" id="ppa" style="font-size: 60px;color: black">you are a very goor girl</p>
</body>
</html>
```
