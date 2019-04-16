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
## 插槽
### 单个插槽/默认插槽
```
我们一般在父组件中引用子组件的时候，是这样做的<Child></Child>
现在在父组件中引入的时候有内容了，是这样的<Child>data</Child>
那么在子组件中定义的slot会将data显示出来
```
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.7.2/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.7.2/lib/index.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
let child={
  template:
  `<div>
    <p>这里是子组件</p>
    <slot></slot>
  </div>`
}
let parent={
  template:
  `<div>
    <p>这里是父组件</p>
    <Child>
      <p>菜单一</p>
      <p>菜单二</p>
      <p>菜单三</p>
      <p>菜单四</p>
      <p>菜单五</p>
    </Child>
  </div>`,
  components: {'Child': child}
}
new Vue({
  el: "#app",
  components: {'Parent': parent},
  template: `<Parent/>`
})
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
* 局部组件
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
let Test={
  template: `<p>局部组件</p>`
}
new Vue({
  el: '#app',
  components: {'LK': Test},
  template: `<LK/>`
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
### element-ui
#### el-table组件的操作类按钮
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.7.2/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.7.2/lib/index.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
let child={
  template: 
  `<div>
    <el-table :data="tableData" style="width: 60%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="280"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)">删除</el-button>
          <el-button size="mini" @click="handleAdd(scope)">新增</el-button>
          <el-button size="mini" @click="handleShiftUp(scope)">上移</el-button>
          <el-button size="mini" @click="handleShiftDown(scope)">下移</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>`,
  data(){
    return {
      tableData: [{
        name: 'zz',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: 'ycg',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        name: 'sff',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        name: 'lk',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    /*
    scope.$index 数据行的索引 0,1,2,3,4
    scope.row.addresss
    scope.row.name
    */
    //edit
    handleEdit(scope){
      console.log(scope)
    },
    //delete
    handleDelete(scope){
      this.tableData.splice(scope.$index,1);
    },
    //add
    handleAdd(scope){
      let d={
        name: 'qqq',
        address: '南京市鼓楼区南京邮电大学三牌楼校区'
      }
      this.tableData.splice(scope.$index+1,0,d);
    },
    //handleShiftUp
    handleShiftUp(scope){
      let d=this.tableData[scope.$index];
      this.tableData.splice(scope.$index,1);
      this.tableData.splice(scope.$index-1,0,d);
    },
    //handleShiftDown
    handleShiftDown(scope){
      let d=this.tableData[scope.$index];
      this.tableData.splice(scope.$index,1);
      this.tableData.splice(scope.$index+1,0,d);
    }
  }
}
new Vue({
  el: '#app',
  components: {'Child':child},
  template: `<Child/>`
})
```
#### MessageBox 弹框
* 最基本的弹框
```
如果你想修改弹框里面的样式style,请使用深度作用选择器/deep/
```
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>my project</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.7.2/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app"></div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@2.7.2/lib/index.js"></script>
<script src="./test.js"></script>
</html>
```
```javascript
let child={
  template:
  `<div>
    <el-button @click="open">删除</el-button>
  </div>`,
  methods: {
    open(){
      const h=this.$createElement;
      let con=h('p',null,[
        h('span',null,'此操作将永久删除此需求，是否'),
        h('i',{style: 'color: red'},'继续?')
      ])
      this.$msgbox({
        title: '删除需求',
        message: con,
        showCancelButton: true,
        showConfirmButton: true,
        showClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        //是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分
        distinguishCancelAndClose: true,
        beforeClose: (action,instance,done)=>{
          //点击确定 action=>confirm
          //点击取消 action=>cancel
          //点击xx action=>close
          //ESC action=>cancel
          //点击遮罩层 action=>close
          console.log(action)
          //instance相当于弹出框的实例
          console.log(instance)
          console.log(instance.cancelButtonText)//取消
          console.log(instance.confirmButtonText)//确定
          if(action==='confirm'){
            /*执行点击确定之后的代码*/
            done();
          }else{
            done();//相当于退出
          }
        }
      }).then(action=>{
        //确定动作成功的回调
        console.log(action);
      },action=>{
        //取消动作成功的回调
        console.log(action)
      }).catch(e=>{})
    }
  }
}
new Vue({
  el: "#app",
  components: {'Child': child},
  template: `<Child/>`
})
```
* [复杂的弹框](https://harrdy2018.github.io/demo/MessageBox/dist/index.html)
