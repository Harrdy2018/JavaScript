# DOM基础
* [DOM](#DOM)
* [获取子节点](#获取子节点)
* [获取父节点](#获取父节点)
* [取一个元素用来定位的父节点](#取一个元素用来定位的父节点)
* [获取首尾子节点，兄弟节点](#获取首尾子节点，兄弟节点)
* [元素灵活查找](#元素灵活查找)

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
# 获取首尾子节点，兄弟节点
```
存在兼容性问题
首尾子节点：firstChild firstElementChild
           lastChild  lastElementChild
兄弟节点：  nextSibling nextElementSibling
           previousSibling previousElementSibling
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        window.onload=function () {
            var oUl=document.getElementById('ul1');
            //IE6-8
            //oUl.firstChild.style.background='red';
            //高版本浏览器
            //oUl.firstElementChild.style.background='red';
            //兼容性判断
            if(oUl.firstElementChild)
            {
                oUl.firstElementChild.style.background='red';
            }
            else
            {
                oUl.firstChild.style.background='red';
            }
        };
    </script>
</head>
<body>
<ul id="ul1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
</body>
</html>
```

***
# 操纵元素属性
* oDiv.style.display="block";
* oDiv.style["display"]="block";
* Dom方式
* 获取getAttribute(名称)
* 设置setAttribute(名称，值)
* 删除removeAttribute(名称)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        window.onload=function () {
            var oTxt=document.getElementById('txt1');
            var oBtn=document.getElementById("btn1");
            oBtn.onclick=function () {
              //oTxt.value="I loe you!!!";
              //oTxt["value"]="hehhe!!!";
                oTxt.setAttribute("value","ahha you guys!!");
            };
        };
    </script>
</head>
<body>
<input type="text" id="txt1"/>
<input id="btn1" type="button" value="按钮"/>
</body>
</html>
```

***
# 元素灵活查找
用className选择元素
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        window.onload=function () {
            var oUl=document.getElementById("ul1");
            var aLi=oUl.getElementsByTagName("li");
            for(var i=0;i<aLi.length;i++){
                if(aLi[i].className==="box")
                {
                    aLi[i].style.background="red";
                }
            }
        };
    </script>
</head>
<body>
<ul id="ul1">
    <li class="box"></li>
    <li class="box"></li>
    <li></li>
    <li></li>
    <li class="box"></li>
    <li></li>
</ul>
</body>
</html>
```

***
将上述方法封装成函数
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        function getByClass(oParent,sClass)
        {
            var aResult=[];
            var aEle=oParent.getElementsByTagName('*');
            for(var i=0;i<aEle.length;i++)
            {
                if(aEle[i].className===sClass)
                {
                    aResult.push(aEle[i]);
                }
            }
            return aResult;
        }
        window.onload=function () {
            var oUl=document.getElementById("ul1");
            var aBox=getByClass(oUl,'box');
            for(var i=0;i<aBox.length;i++)
            {
                aBox[i].style.background='red';
            }
        };
    </script>
</head>
<body>
<ul id="ul1">
    <li class="box"></li>
    <li class="box"></li>
    <li></li>
    <li></li>
    <li class="box"></li>
    <li></li>
</ul>
</body>
</html>
```
