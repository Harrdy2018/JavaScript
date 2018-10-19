### v-for 指令

***
* 迭代数组
```
import Vue from "vue";

var vm=new Vue({
  el: "#app",
  data: {
    list: [1,2,3,4]
  },
  methods: {
  }
});

//普通循环
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="app">
     <p>{{ list[0] }}</p>
     <p>{{ list[1] }}</p>
     <p>{{ list[2] }}</p>
     <p>{{ list[3] }}</p>
    </div>
  </body>
</html>

//v-for指令循环
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="app">
     <p v-for="item in list">{{ item }}</p>
    </div>
  </body>
</html>
```
