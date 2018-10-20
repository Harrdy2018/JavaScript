## css选择器

***
### ID 选择器（ID selector，IS）：使用 # 标识selector
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #name{
            color: red;
        }
    </style>
</head>
<body>
    <p id="name">Hello World !!</p>
</body>
<script>

</script>
</html>
```

***
### 类选择器（class selector，CS）：使用 . 标识selector
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .name{
            text-align: center;
        }
    </style>
</head>
<body>
    <p class="name">Hello World !!</p>
</body>
<script>

</script>
</html>
```

***
### 元素选择器（element selector，ES）：又叫标签选择器，使用标签名作为selector名
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p{
            font-style: italic;
        }
    </style>
</head>
<body>
    <p>Hello World !!</p>
</body>
<script>

</script>
</html>
```

***
### 包含选择器（package selector，PS）：指定目标选择器必须处在某个选择器对应的元素内部
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p{
            color: red;
        }
        div p{
            color: yellow;
        }
    </style>
</head>
<body>
    <p>red text</p>
    <div>
        <p>yellow text</p>
    </div>
</body>
<script>

</script>
</html>
```
