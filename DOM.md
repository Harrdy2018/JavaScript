# DOM基础

***
# DOM
* 什么是DOM?
document object model
* 浏览器的支持情况
IE 10%,Chrome 60%,FF 99%

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
