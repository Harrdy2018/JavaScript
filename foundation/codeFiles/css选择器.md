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
* 包含选择器除了有 A B{...} 的形式外（A和B都是标签），还可以有这种形式：.A B{...} 的形式（A是类名，B是标签）。
* 作用与上面介绍的相同，会使 class 名为 A 的标签里面所有名为 B 的子代标签的内容按照设定的内容显示。

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
* 子选择器除了有 A >B{...} 的形式外（A和B都是标签），还可以有这种形式：.A >B{...} 的形式（A是类名，B是标签）。
* 作用与上面介绍的相同，会使 class 为 A 的标签里面所有名为 B 的直接子代标签的内容按照设定的内容显示。而非直接子代的 B 标签的内容是不会改变的。

***
### 兄弟选择器（brother selector，BS）：BS是CSS3.0新增的一个选择器，语法格式：A~B{...}
* 因为是兄弟，div+p 选择每个div紧邻后的所有兄弟即p标签
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

***
### 相邻选择器，语法格式：div+p
*  选择每个div紧邻后的一个元素p 因为是相邻的，所以只选择一个p
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div+p{
            color: red;
        }
    </style>
</head>
<body>
    <div>
        <p>not red text</p>
        <p>not red text</p>
    </div>
    <p>red text</p>
    <p>not red text</p>
</body>
<script>

</script>
</html>
```

***
### 通用选择器 语法形式为：*{属性：属性值}。它的作用是匹配 html 中的所有元素标签
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            color: red;
        }
    </style>
</head>
<body>
    <p>red text</p>
    <h3>red text</h3>
</body>
<script>

</script>
</html>
```

***
## css伪类 (Pseudo-classes) CSS伪类是用来添加一些选择器的特殊效果。
* anchor伪类  在支持 CSS 的浏览器中，链接的不同状态都可以以不同的方式显示
```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
```

***
## css伪元素 CSS伪元素是用来添加一些选择器的特殊效果。
