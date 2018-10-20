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

***
### 子选择器（sub-selector，SS）：类似于PS，指定目标选择器必须处在某个选择器对应的元素内部
* 两者区别在于PS允许"子标签"甚至"孙子标签"及嵌套更深的标签匹配相应的样式，而SS强制指定目标选择器作为 包含选择器对应的标签 内部的标签，
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div>p{
            color: red;
        }
    </style>
</head>
<body>
    <div>
        <p>red text</p>
        <span>
            <p>not red text</p>
        </span>
    </div>
</body>
<script>

</script>
</html>
```

***
### 兄弟选择器（brother selector，BS）：BS是CSS3.0新增的一个选择器，语法格式：A~B{...}
* （A、B为HTML元素/标签，表示A标签匹配selector的A，B标签匹配selector的B时，B标签匹配样式）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div~p{
            color: red;
        }
    </style>
</head>
<body>
    <div>
        <p>no red text</p>
        <div>no red text</div>
        <p>red text</p>
    </div>
</body>
<script>

</script>
</html>
```
