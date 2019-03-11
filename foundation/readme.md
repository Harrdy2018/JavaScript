## 前端面试题
* [面试题之js数组遍历](./codeFiles/面试题之js数组遍历.md)
* [面试题之js数组插入删除](./codeFiles/面试题之js数组插入删除.md)
* [css选择器](./codeFiles/css选择器.md)
* [css选择器优先级](./codeFiles/css选择器优先级.md)
* [纯css创建一个三角形](./codeFiles/创建三角形.md)
* [居中](#居中)
* [meta标签](./codeFiles/meta标签.md)
* [南京苏宁前端总部面试](./南京苏宁前端总部面试.md)

***
### 常考的笔试题
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
### 居中
