### 在Vue中使用样式

* 传统的样式设置
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <style>
      .red{
        color: red;
      }
      .thin{
        font-size: 25px;
      }
      .italic{
        font-style: italic;
      }
      .active{
        letter-spacing: 0.5em;
        word-spacing: 0.1em;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <h1 class="red thin italic active">She is a very pretty girl !!!</h1>
    </div>
  </body>
</html>
```
