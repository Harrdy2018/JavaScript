# DOM基础

***
# DOM
* 什么是DOM?
document object model
* 浏览器的支持情况
IE 10%,Chrome 60%,FF 99%

***
# 获取子节点
* 子节点 children childNodes 节点类型 nodeType
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        window.onload=function () {
            var oUl=document.getElementById("ul1");
            //alert(oUl.childNodes.length);
            //children只包含元素节点
            alert(oUl.children.length);
            for(var i=0;i<oUl.childNodes.length;i++)
            {
                //nodeType==1   -->>元素节点
                //nodeType==3   -->>文本节点
                //alert(oUl.childNodes[i].nodeType);
                if(oUl.childNodes[i].nodeType===1)
                {
                    oUl.childNodes[i].style.background='red';
                }

            }
        };
    </script>
</head>
<body>
<ul id="ul1">
    <li></li>
    <li></li>
</ul>
</body>
</html>
```

***
# 获取父节点
* 父节点 parentNode
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        window.onload=function () {
            //var oUl=document.getElementById("ul1");
            //alert(oUl.parentNode);
            var aA=document.getElementsByTagName("a");
            for(var i=0;i<aA.length;i++)
            {
                aA[i].onclick=function ()
                {
                    this.parentNode.style.display='none';
                }
            }
        };
    </script>
</head>
<body>
<ul id="ul1">
    <li>deffg<a href="javascript:">隐藏</a></li>
    <li>hjbsbg<a href="javascript:">隐藏</a></li>
    <li>hdbb<a href="javascript:">隐藏</a></li>
    <li>yuev<a href="javascript:">隐藏</a></li>
    <li>dvhhh<a href="javascript:">隐藏</a></li>
</ul>
</body>
</html>
```

***
# 获取一个元素用来定位的父节点
* 如果div1有定位，则div2获取的定位父节点就是Div；如果去掉div1的定位，则div2获取的定位父节点就是Body
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #div1 {
            width: 200px;height: 200px;background: aliceblue;
            margin: 100px;
            position: relative;
        }
        #div2{
            width: 100px;height: 100px;background: red;
            position: absolute;
            left: 50px;
            top: 50px;
        }
    </style>
    <script>
        window.onload=function () {
          var oDiv2=document.getElementById('div2');
          alert(oDiv2.offsetParent);
        };
    </script>
</head>
<body>
<div id="div1">
    <div id="div2"></div>
</div>
</body>
</html>
```

***
