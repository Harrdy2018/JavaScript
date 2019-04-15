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
### 组件之间的传值
* 父传子
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
* 子传父
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
