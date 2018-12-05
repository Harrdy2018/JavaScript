## 前端面试题

### javascript
* [面试题之js数组遍历](./codeFiles/面试题之js数组遍历.md)
* [面试题之js数组插入删除](./codeFiles/面试题之js数组插入删除.md)
### css
* [css选择器](./codeFiles/css选择器.md)
* [css选择器优先级](./codeFiles/css选择器优先级.md)
* [纯css创建一个三角形](./codeFiles/创建三角形.md)
* [如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中?](./codeFiles/div居中.md)
### html
* [meta标签](./codeFiles/meta标签.md)

### 面试体验
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
