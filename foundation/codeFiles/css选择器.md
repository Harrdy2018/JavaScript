 css伪类 (Pseudo-classes) CSS伪类是用来添加一些选择器的特殊效果。
* anchor伪类  在支持 CSS 的浏览器中，链接的不同状态都可以以不同的方式显示
* ***link 和 visited放在一起可能导致无效，只显示visited设置的颜色***
```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
```
* 伪类可以与 CSS 类配合使用
* ***处于安全的考虑可能无效，别人知道过你访问过的网页，你说有木有危险***
```css
a.red:visited {color:#FF0000;}
<a class="red" href="https://www.baidu.com" target="_blank">baidu</a>
```
* p:first-child 匹配第一个p元素
```html
p:first-child{color: red}
<body>
    <p>123</p>
    <p>123</p>
    <p>123</p>
</body>
```
* p>i:first-child 匹配为p的子元素i,并且是第一个i
```html
p>i:first-child{color: red}
<body>
    <p>
        <i>1</i>
        <i>1</i>
        <i>1</i>
    </p>
</body>
```
* p:first-child i 匹配所有作为第一个子元素的 <p> 元素中的所有 <i> 元素
```html
p:first-child i{color: red}
<body>
    <p>
        <i>1</i>
        <i>1</i>
        <i>1</i>
    </p>
    <p>
        <i>1</i>
        <i>1</i>
        <i>1</i>
    </p>
</body>
```

***
## css伪元素 CSS伪元素是用来添加一些选择器的特殊效果
* p:first-line{color: red} 对 p 元素的第一行文本进行格式化
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <title>Title</title>
    <style>
        p:first-line{color: red}
    </style>
</head>
<body>
   <p>
       hhha<br>
       hahha
   </p>
</body>
</html>
```
* p:first-letter{color: red} 向文本的首字母设置特殊样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <title>Title</title>
    <style>
        p:first-letter{color: red}
    </style>
</head>
<body>
   <p>
       hhha<br>
       hahha
   </p>
</body>
</html>
```
* 伪元素可以结合CSS类
```
p.article:first-letter {color:#ff0000;}
<p class="article">文章段落</p>
上面的例子会使所有 class 为 article 的段落的首字母变为红色。
```
* p:before{content: "you are a giel"} 在元素的内容前面插入新内容
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="cache-control" content="no-cache">
    <title>Title</title>
    <style>
        p:before{content: "you are a giel"}
    </style>
</head>
<body>
   <p>hhha</p>
</body>
</html>
```
* ":after" 伪元素可以在元素的内容之后插入新内容
