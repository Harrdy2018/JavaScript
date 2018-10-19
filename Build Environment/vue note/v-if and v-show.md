### v-if and v-show指令

***
* 区别  在浏览器中检查元素查看
* v-if  每次都会重新删除和创建元素 切换性能消耗严重
* v-show 每次不会进行DOM的删除操作 只是切换了元素的 display属性  有较高的初始渲染性能消耗
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div id="app">
      <input type="button" value="toggle" @click="toggle">
      <p v-if="flag">this is v-if control</p>
      <p v-show="flag">this is v-show control</p>
    </div>
  </body>
</html>
```
```js
import Vue from "vue";

var vm=new Vue({
  el: "#app",
  data: {
    flag: true
  },
  methods: {
    toggle(){
      this.flag=!this.flag;
    }
  }
});
```
