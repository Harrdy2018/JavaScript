# let和const定义常量
***
### var和function
```html
<script>
    //var function存在变量提升
    //var 只会提前申明 function既申明又定义
    //在全局作用域下 var function申明的变量会给window增加属性
    console.log(a);    //undefined
    console.log(add);  //unfined
    console.log(ad);   //有值
    var a=1;
    var add=function () {};
    function ad() {};
    
    console.log(window.a);  //1
    console.log('a' in window); //true
</script>
```
***
### let特点
```html
<script>
    //没有变量申明
    //不可以重复申明
    //console.log(a);  //Uncaught ReferenceError: a is not defined
    let a=1;
    //let a=1; //Uncaught SyntaxError: Identifier 'a' has already been declared
    //不会给window增加属性
    console.log(window.a); //undefined
    console.log('a' in window); //false
</script>
```
***
### const特点
```html
<script>
    //没有变量申明
    //不可以重复申明
    //console.log(a);  //Uncaught ReferenceError: a is not defined
    const a=1;
    //const a=1; //Uncaught SyntaxError: Identifier 'a' has already been declared

    //不会给window增加属性
    console.log(window.a); //undefined
    console.log('a' in window); //false

    //const一旦申明，必须赋值
    //const b; //Uncaught SyntaxError: Missing initializer in const declaration

    //const定义的是一个常量 不可以重新赋值
    /*
    const dd=1;  //Uncaught TypeError: Assignment to constant variable.
    dd=3;
    */
</script>
```
***
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
