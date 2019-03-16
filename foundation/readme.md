## 前端面试题
* [面向对象实现](#面向对象实现)
* [面向对象中函数的作用](#面向对象中函数的作用)
* [原型和原型链](#原型和原型链)
* [闭包](#闭包)
* [this的指向](#指向问题)
* [delete用法](#删除操作)
* [标签的ID可以唯一标志DOM元素](#唯一识别标签)
* [面试题之js数组遍历](./codeFiles/面试题之js数组遍历.md)
* [面试题之js数组插入删除](./codeFiles/面试题之js数组插入删除.md)
* [css选择器](./codeFiles/css选择器.md)
* [css选择器优先级](./codeFiles/css选择器优先级.md)
* [纯css创建一个三角形](./codeFiles/创建三角形.md)
* [居中](#居中)
* [解释固定定位](#解释固定定位)
* [meta标签](./codeFiles/meta标签.md)
* [说一说你在工作中遇到的问题以及你是怎么解决的](#说一说你在工作中遇到的问题以及你是怎么解决的)
* [你还有什么想要问我的么](#你还有什么想要问我的么)
### 面向对象实现
* 面向对象特点：继承、多态、封装
```javascript
  //机器类
  function Machine(name){}
  // 只要是这个构造器创建的实例，都共享prototype这块内存
  Machine.prototype={
    start: function(){},
    stop: function(){}
  }
  function Car(name,brand){}
  Car.prototype=new Machine();
  Car.prototype.open=function(){}
  Car.prototype.close=function(){}
  var c1=new Car();
  console.log(c1)
  console.log(c1 instanceof Car) // true
  console.log(c1 instanceof Machine) // true
  console.log(c1 instanceof Object) // true
  console.log(c1.constructor) //Object
  console.log(c1.__proto__.constructor) // Object
  
  //如何改变实例c1上constructor的指向
  //机器类
  function Machine(name){}
  // 只要是这个构造器创建的实例，都共享prototype这块内存
  Machine.prototype={
    start: function(){},
    stop: function(){}
  }
  function Car(name,brand){}
  Car.prototype=new Machine();
  Car.prototype.constructor=Car
  Car.prototype.open=function(){}
  Car.prototype.close=function(){}
  var c1=new Car();
  console.log(c1)
  console.log(c1 instanceof Car) // true
  console.log(c1 instanceof Machine) // true
  console.log(c1 instanceof Object) // true
  console.log(c1.constructor) //Car
  console.log(c1.__proto__.constructor) // Car
```
### 面向对象中函数的作用
```javascript
  function myfun() {
    // 功能函数
    // 功能函数调用的目的是拿到结果
    // 把一大块逻辑单独的封装起来
    // 以便于重复调用
  }
  function Car(){
    // 构造器函数
    // 构造函数调用的目的是拿到开辟的这块内存的引用
  }
```
### 原型和原型链
```javascript
```
### 闭包
* 为什么会出现闭包？ 我们需要从函数的外部得到函数内部的局部变量
* 闭包作用 一个是可以从函数的外部读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
```javascript
// 下面这个不是闭包，但是
function parent(){
  var n=1;
  setTimeout(() => {
    console.log(n)
  }, 2000);
}
parent();
parent函数的执行是瞬间的（也许用时只是0.00001毫秒），在parent的函数体内创建了一个变量n，
在parent执行完毕之后n并没有被释放，这是因为setTimeout内的匿名函数存在这对n的引用。
待到2秒后函数体内的匿名函数被执行完毕,n才被释放。

怎么理解函数内部的变量一直保存在内存中？
function parent(){
  var n=1;
  add=function(){
    n+=1;
  }
  function child(){
    console.log(n)
  }
  return child;
}
var p=parent();
p(); //1
add();
p(); //2
一般函数执行完毕，局部作用域就会被销毁。但是
child函数一共运行了两次，第一次的值是1，第二次的值是2。
这证明了，函数parent中的局部变量n一直保存在内存中，并没有在parent调用后被自动清除。
```
* 闭包-封装
```javascript
(function(){
  var name="lk";
  var age=18;
  var test={}
  test.getName=function(){
    console.log(name)
  }
  test.getAge=function(){
    console.log(age)
  }
  window.test=test
})()
test.getName();
test.getAge();
console.log(test.name);
console.log(test.age);
利用闭包的特性能让我们封装一些复杂的函数逻辑，在这个例子中调用test上的方法（getName,getAge）间接访问函数里私有变量，
但是直接调用test.name是没法拿到name的。
```
### 指向问题
* this的指向是由它所在函数调用的上下文决定的，而不是由它所在函数定义的上下文决定的
```javascript
<script>
var name="lk";
var obj={
  name: 'hha',
  getName: function(){
    function test(){
      return this.name
    }
    return test
  }
}
console.log(obj.getName()()) //lk this所在的函数在外面调用
</script>
```
```javascript
<script>
var name="lk";
var obj={
  name: 'hha',
  getName: function(){
    var that=this;
    function test(){
      return that.name
    }
    return test
  }
}
console.log(obj.getName()()) //hha
</script>
```
### 删除操作
```javascript
<script>
// 可以删除对象的属性
let obj={
  name: 'lk'
}
console.log(delete obj.name); //true

// 删除申明的变量
var age=18; //使用var申明的变量不能被删除
sex=1;
console.log(delete age); //false
console.log(delete sex); //true

// 使用eval()解析的一段代码，尽管用了val,也能删除
eval('var aa=123');
console.log(delete aa); //true

//注意delete删除数组 数组长度不变，数组的索引也不变
var test=[]
test[1]=2;
test[4]=3;
console.log(test) //[,2,,,3]
console.log(delete test[1]); //true
console.log(test) //[,,,,3]

//原理 
var person={
  name:'zz'
}
Object.defineProperty(person,'name',{
  configurable:false
})
console.log(delete person.name); //false
</script>
```
### 唯一识别标签
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
  <div id="app">this is div</div>
</body>
<script>
  console.log(app) //<div id="app">this is div</div>
  console.log(window.app) //<div id="app">this is div</div>
  console.log(document.getElementById('app')===app) //true
</script>
</html>
```
#### ul标签下面有很多li标签，点击每一个li标签都能打印出该标签的内容
```html
<!doctype html>
<html>
    <head>
    <meta charset="utf-8">
    <title>test for jobs</title>
    </head>
    <body>
        <p>this is p element!!!</p>
        <ul class="list">
            <li>a<b>success</b></li>
            <li>b</li>
            <li>c</li>
            <li>d<em>1234</em></li>
        </ul>
    </body>
    <script>
        console.log("Hello World !!!");
        var oLi=document.querySelectorAll("li");
        for(let i=0;i<oLi.length;i++){
            /*
            oLi[i].onclick=function(){
                console.log(oLi[i].textContent);
            }*/
            /*
            oLi[i].addEventListener('click',function(){
                console.log(oLi[i].innerHTML);
            })*/
            oLi[i].addEventListener('click',function(){
                console.log(oLi[i].innerText);
            })
        }
    </script>
</html>
    
<!DOCTYPE html>
<html lang="en">
<head>
  <title>test html</title>
</head>
<body>
  <ul id="test">
    <li>AA</li>
    <li>BB</li>
    <li>CC</li>
    <li>DD</li>
  </ul>
</body>
<script>
  /*
  var oLi=document.getElementById('test')
  var arr=oLi.getElementsByTagName('li')
  for(var i=0;i<arr.length;i++){
    arr[i].onclick=function(){
      console.log(this.textContent)
    }
  }
  */
  
  // for循环每循环一次，创建一个块级作用域
  var oLi=document.getElementById('test')
  var arr=oLi.getElementsByTagName('li')
  for(let i=0;i<arr.length;i++){
    arr[i].onclick=function(){
      console.log(arr[i].textContent)
    }
  }
  
  //for循环每循环一次，创建一个局部作用域，分别存储不同的变量i
  /*
  var oLi=document.getElementById('test')
  var arr=oLi.getElementsByTagName('li')
  for(var i=0;i<arr.length;i++){
    (function(i){
      arr[i].onclick=function(){
      console.log(this.textContent)
    }
    })(i)  
  }
  */
</script>
</html>
```
```
做这道题目有几点需要注意的：
1，任何标签都可以添加点击事件
2,for循环里面不能使用var声明，要用let申明
3，要获取标签里面的内容，只有少数标签支持text属性
支持text属性的标签：>>>>>>>>>>
                    var script=document.querySelector('script');
                    var title=document.querySelector('title');
几乎所有的标签都支持 textContent innerHTML innerText 属性 
    textContent和innerText产生的效果是一样的，innerHTML可以打印出里面的标签结构
```
***
#### 数组去重
```html
<!doctype html>
<html>
    <head>
    <meta charset="utf-8">
    <title>test for jobs</title>
    </head>
    <body>
      
    </body>
    <script>
        console.log("Hello World !!!");
        var aa=[1,2,2,3,3,4,5,5,7,7,7];
        var obj={};
        var newaa=[];
        aa.forEach(function(value,key,arr){
            /*
            1--->obj[1] undefined--->设置obj[1]=true 在新数组尾部添加 1
            2--->obj[2] undefined--->设置obj[1]=true 在新数组尾部添加 1
            2--->obj[2] true--->不执行 去重成功
            */
            if(!obj[value]){
                obj[value]=true;
                newaa.push(value);
            }
        })
        console.log(newaa);
    </script>
</html>
```
```html
<!doctype html>
<html>
    <head>
    <meta charset="utf-8">
    <title>test for jobs</title>
    </head>
    <body>
      
    </body>
    <script>
        console.log("Hello World !!!");
        var aa=[1,2,2,3,3,4,5,5,7,7,7];
        var newaa=aa.filter(function(value,index,arr){
            return arr.indexOf(value,0)===index;
        });
        console.log(newaa);
    </script>
</html>
```

***
#### 跨域问题
* 跨域实现百度搜索栏
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>百度搜索栏</title>
</head>
<body>
<p>百度</p>
<input type="text">
<ul></ul>
</body>
<script src="./jquery-3.3.1.js"></script>
<script>
    function createLi(item) {
        var oUl=document.querySelector('ul');
        var oLi=document.createElement('li');
        var oText=document.createTextNode(item);
        oLi.appendChild(oText);
        oUl.appendChild(oLi);
    }
    function getData(data) {
        var obj=document.querySelector('#jsonp');
        obj.parentNode.removeChild(obj);
        document.querySelector('ul').innerHTML='';
        data.s.forEach((item,index,arr)=>{
            createLi(item);
        })
    }
    function getList(wd){
        var obj=document.createElement("script");
        obj.id="jsonp";
        obj.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=getData&wd="+wd;
        document.body.appendChild(obj);
    }

    var oInput=document.querySelector('input');
    oInput.addEventListener('keyup',function () {
        var wd=oInput.value;
        console.log(wd);
        getList(wd);
    });
</script>
</html>
```
***
## 居中
### p标签内的文字居中
```html
 <style>
    p{
     text-align: center;
    }
  </style>
```
### div水平居中
```html
 <style>
    div{
      margin: 0 auto;
      width: 200px;
      height: 200px;
      background-color: brown;
    }
  </style>
```
```html
 <style>
    body{
      margin: 0px;
      display: flex;
      justify-content: center;
    }
    div{
      width: 200px;
      height: 200px;
      background-color: brown; 
    }
  </style>
```
### div水平垂直居中布局
```html
  <style>
    html{
      height: 100%;
    }
    body{
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    div{
      width: 200px;
      height: 200px;
      background-color: brown; 
    }
  </style>
```
### div水平垂直居中布局
```
fixed/absolute
负margin
```
```html
  <style>
    html{
      height: 100%;
    }
    body{
      margin: 0px;
      height: 100%;
    }
    div{
      width: 200px;
      height: 200px;
      background-color: brown; 
      position: fixed;
      top: 50%;
      left: 50%;
      margin-left: -100px;
      margin-top: -100px;
    }
  </style>
```
### div水平垂直居中布局
```
fixed/absolute
transform
```
```html
  <style>
    html{
      height: 100%;
    }
    body{
      margin: 0px;
      height: 100%;
    }
    div{
      width: 200px;
      height: 200px;
      background-color: brown; 
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  </style>
```
### div水平垂直居中布局
```
fixed/absolute 
top&bottom&left&right 0px 
margin auto
div的宽度一定要固定 不然div会充满整个屏幕
```
```html
  <style>
    html{
      height: 100%;
    }
    body{
      margin: 0px;
      height: 100%;
    }
    div{
      width: 200px;
      height: 200px;
      background-color: brown; 
      position: absolute;
      margin: auto;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
  </style>
```
## 解释固定定位
```
固定定位是相对于浏览器窗口而言的，当滚动右边滚动条时，div位置不变，就好像静止一样
怎么出现滚动条？ 将html设置为100% body设置为200%
当没有固定定位时，你会发现，移动滚动条时，div跑到上面去了。
```
```html
 <style>
    html{
      height: 100%;
    }
    body{
      margin: 0px;
      height: 200%;
    }
    div{
      width: 200px;
      height: 200px;
      background-color: brown; 
    }
  </style>
```
```html
  <style>
    html{
      height: 100%;
    }
    body{
      margin: 0px;
      height: 200%;
    }
    div{
      position: fixed;
      width: 200px;
      height: 200px;
      background-color: brown; 
    }
  </style>
```
## 说一说你在工作中遇到的问题以及你是怎么解决的
```
背景描述：
每一次点击登录按钮时，我在mutation提交对state的管理
将 {admin:管理员信息} {‘islogin’:'true'}存到sessionStroage
同时同步信息到state
```
* 怎么鉴权
```
我原来的想法是，由于登录进系统以后，我每次看到的页面都要经过一个父组件渲染，home.vue
所以我在mounted里面加一个判断如果sessionStroage有login true则不拦截，否则跳回到登录界面

网上是这样说的，你这个就是要判断进来这个页面要不要登录，你可以先在/home配置路劲下加一个
meta:{requiresAuth: true}
然后在main.js文件加一个全局前置路由钩子beforeEach(to,from,next)
你每一切换路由的时候，就检查to.matched里面有没有一个路由的meta.requiresAuth为true,只要有一个为true,
就证明这是一个需要登录之后才能看到的界面，然后只需检查一下登录状态就可以了，接着根据不同的情况执行next()函数
```
* 怎么维持登录状态
```
登录进来之后，每一次刷新界面，store里面的state会重置为null,无法从store里面获取值
想到了如果你现在是处于登陆状态，则sessionStorage一定是有值得，所以state初始化的时候从sessionstroage里取值
const state={
  isLogin: eval(window.sessionStorage.getItem('isLogin')) || false,  进行或判断即可
  administrator: JSON.parse(window.sessionStorage.getItem('admin')) || {}
}
```
* 对表格数据进行新增、删除、上移、下移操作
```
首先要知道渲染表格其实就是一个数组，其次点击事件是可以传入表格所在行信息的参数
删除：删除对应数组所在行的数据
新增： 在对应行所在的数组加一个元素
上移下移：那我交换一下元素是不是就可以呢，答案是不可以的，我又想了一下，既然你能新增，删除为什么就是不能上移下移呢？
然后我换了一个思路，假设你现在要上移你这一行的数据，首先我把这一行的数据拷贝一下，然后从数组中删除对应的元素，然后
再在前面插入我之前拷贝的元素，发现可以上移了
```
## 你还有什么想要问我的么
* 入职后有没有培训活动
* 公司对我的期望是什么
* 我进去的这个部门是什么,团队有多少人?主要是负责哪方面的?移动端/网页端
* 可以加一下您的微信么
