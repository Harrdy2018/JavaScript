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

//提取数组的key value
 <p v-for="(item,i) in list">key: {{i}}---value: {{ item }}</p>
```

***
* 循环对象数组
```
  data: {
    list: [
      {'id':1,'name':'a'},
      {'id':2,'name':'b'},
      {'id':3,'name':'c'},
      {'id':4,'name':'d'},
    ]
  },
  
<p v-for="(user,i) in list">key: {{i}}---id: {{user.id}}---name: {{user.name}}</p>
```

***
* v-for 循环对象
```
//遍历是对象的时候 有 key,value,index三个属性
  data: {
    user: {
      id: 1,
      name: 'harrdy',
      age: 18
    }
  },
  
  <p v-for="(value,key,index) in user">key: {{key}}---value: {{value}}---index: {{index}}</p>
```

***
* v-for迭代数字
```
//count 从1开始
<p v-for="count in 10">{{count}}</p>
```

***
* **2.2.0+的版本里，当在组件里使用v-for的时候，key值是必须的**
