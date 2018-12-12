# let和const定义常量

### 块级作用域
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul id="list">
    <li>lukang</li>
    <li>zhangzheng</li>
    <li>yuchenguang</li>
    <li>sunfeifei</li>
    <li>bianweijie</li>
</ul>
</body>
<script>
    //{}； 一个{}就是一个块级作用域
    //在块级作用域下 var和function申明的变量依然是全局的
    //在块级作用域下 let和const申明的变量是私有的
    //{}如果想表示一个对象不可以放在行首
    {
        let b=1;
        var a=0;
        function add(){};
    }
    //console.log(b,a,add); //输出b的时候出现错误not defined

    //for(){}
    //if(){}
    //对象{}

    //{name:"lukang",age:10}  //看成一个块级作用域

    //if(){}
    if(1){
        var num=1;
        function ff() {}
    }
    console.log(num,ff);//有值
    //ff2只会提前申明
    //ff2当条件成立时，先赋值，再执行
    if(0){
        var num2=1;
        function ff2() {}
    }
    console.log(num2,ff2);//undefined undefined

    //for(){}
    //给每个li标签绑定事件，绑定事件是异步的，先绑定，什么时候点击什么时候再去调用函数
    let list=document.getElementById("list").getElementsByTagName('li');
    /*
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onclick=function () {
            console.log(this.index);
            //这个是面试中常考的，非要打印出里面的内容
            console.log(this.innerHTML);
        }
    }
    */
    for(let j=0;j<list.length;j++){
        list[j].onclick=function () {
            console.log(j);
            //这个是面试中常考的，非要打印出里面的内容
            //这里我觉得this用的非常巧妙
            console.log(this.innerHTML);
            console.log(list[j].innerHTML);
        }
    }
</script>
</html>
```
