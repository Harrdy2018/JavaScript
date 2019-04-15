# vue学习笔记

## example
* [简易计算器](./simple-calculator)
* [在vue中使用样式](./style.md)
* [v-for 指令](./v-for.md)
* [v-if and v-show 指令](./v-if%20and%20v-show.md)

### vue双向绑定原理
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>test html</title>
</head>
<body>
  <input id="a"></input>
  <input id="b"></input>
</body>
<script>
  let obj={}
  Object.defineProperty(obj,'hello',{
    get: function(){
      console.log('get get')
      return val;
    },
    set: function(newVal){
      console.log(`set set ${newVal}`)
      document.getElementById('b').value=newVal
      document.getElementById('a').value=newVal
      val=newVal
      return newVal
    }
  })
  document.getElementById('a').onkeyup=function(e){
    obj.hello=e.target.value
  }
  document.getElementById('b').onkeyup=function(e){
    obj.hello=e.target.value
  }
</script>
</html>
```
## 项目经验
### 组件
* 全局组件
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
Vue.component('Test',{
  template: `<p>全局组件</p>`
})
new Vue({
  el: '#app',
  template: `<Test/>`
})
```
### 组件之间的传值
#### 父传子
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
Vue.component('Child',{
  props: ["message"],
  template: `<div>
    <h2>子组件部分</h2>
    <p>我收到了来自父组件的参数{{message}}</p>
  </div>`
})
new Vue({
  el:"#app",
  template: `<Child message="parameter"></Child>`
})
```
* 父传子 动态
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
Vue.component('Child',{
  props: ["message"],
  template: `<div>
    <h2>子组件部分</h2>
    <p>我收到了来自父组件的参数{{message}}</p>
  </div>`
})
new Vue({
  el:"#app",
  data: {
    parameter: 'hahahha',
  },
  template: `<Child v-bind:message="parameter"></Child>`
})
```
#### 子传父
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
Vue.component('Child',{
  data: function(){
    return {message: 'I am from Child!!!'}
  },
  template: 
  `<div>
    <h2>子组件部分</h2>
    <button v-on:click="sendMsgToParent">传值给父亲</button>
  </div>`,
  methods: {
    sendMsgToParent: function(){
      this.$emit('listenToChild',this.message)
    }
  }
})
new Vue({
  el:"#app",
  template: `<Child v-on:listenToChild="showMsg($event)"></Child>`,
  methods: {
    showMsg: function(e){
      console.log(e) // I am from Child!!!
    }
  }
})
```
```javascript
//test.js第二种写法
Vue.component('Child',{
  data: function(){
    return {message: 'I am from Child!!!'}
  },
  template: 
  `<div>
    <h2>子组件部分</h2>
    <button v-on:click="sendMsgToParent">传值给父亲</button>
  </div>`,
  methods: {
    sendMsgToParent: function(){
      this.$emit('listenToChild',this.message)
    }
  }
})
new Vue({
  el:"#app",
  template: `<Child v-on:listenToChild="showMsg"></Child>`,
  methods: {
    showMsg: function(data){
      console.log(data) // I am from Child!!!
    }
  }
})
```
#### 兄弟组件通信
* 子传父，父传子
* vuex管理
* 借助于一个公共的Vue的实例对象，不同的组件可以通过该对象完成事件的绑定和触发
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
let bus=new Vue();
Vue.component('ChildA',{
  data: function(){
    return {a: -1}
  },
  template: 
  `<div>
    <h2>子组件A部分</h2>
    <button v-on:click="sendMsg">传值给兄弟组件</button>
  </div>`,
  methods: {
    sendMsg: function(){
      bus.$emit('send',this.a++)
    }
  }
});
Vue.component('ChildB',{
  data(){
    return {msg: undefined}
  },
  template: 
  `<div>
    <h2>子组件B部分</h2>
    <p>{{this.msg}}</p>
  </div>`,
  created(){
    // 关键点，这里的this和下一行的this不一样
    let self=this;
    bus.$on('send',function(val) {
      self.msg=val;
    })
  }
})
new Vue({
  el:"#app",
  template:
  `<div>
    <ChildA></ChildA>
    <ChildB></ChildB>
  </div>`,
})
```
