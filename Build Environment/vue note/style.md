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

***
* 直接传递一个数组进行绑定
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
      <h1 v-bind:class="['red','thin','italic','active']">She is a very pretty girl !!!</h1>
    </div>
  </body>
</html>
```

***
* 在数组里面使用三元表达式
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
      <h1 v-bind:class="['red','thin','italic',flag ? 'active':'']">She is a very pretty girl !!!</h1>
    </div>
  </body>
</html>
```
```js
import Vue from "vue";

var vm=new Vue({
  el: "#app",
  data: {
    flag: false
  },
  methods: {
  }
});
```

***
* 数组中嵌套对象，避免三元表达式的麻烦
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
      <h1 v-bind:class="['red','thin','italic',{'active': flag}]">She is a very pretty girl !!!</h1>
    </div>
  </body>
</html>
```

***
* 直接使用一个对象
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
      <h1 v-bind:class="{red: true,thin: false}">She is a very pretty girl !!!</h1>
    </div>
  </body>
</html>
```

***
* 改进，将对象放在vue data里面去
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
      <h1 v-bind:class="classObj">She is a very pretty girl !!!</h1>
    </div>
  </body>
</html>
```
```js
import Vue from "vue";

var vm=new Vue({
  el: "#app",
  data: {
    classObj: {
      red: true,
      thin: false
    }
  },
  methods: {
  }
});
```

***
#### 使用内联样式
* 直接在元素上通过 :style 书写样式对象
```
<h1 v-bind:style="{color: 'red','font-size': '25px'}">She is a very pretty girl !!!</h1>
```
