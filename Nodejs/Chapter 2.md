# Nodejs笔记 Chapter 2
## 回调函数

***
* 将回调函数的参数作为与回调函数同等级的参数进行传递
* execute接收了两个参数，add是回调函数，x,y是回调函数的参数
```js
let add=(x,y)=>x+y;
let execute=function(fun,x,y){
  console.log(fun(x,y));
};
execute(add,1,2);

3
```

***
* 回调函数的参数在调用回调函数内部创建
* execute是主函数，参数hello为回调函数
```js
function hello(person){
  console.log(person.name);
}
let execute=function(fun){
  var Harrdy={
    name:"Harrdy"
  }
  fun(Harrdy);
};
execute(hello);
```

***
## 阻塞代码实例
***阻塞是按顺序执行的,在文件读取完后才执行完程序***
* synchro 同步的
```
data.txt

I love you 
haha!!
you know!!
```
```js
let fs=require('fs');
let data=fs.readFileSync('./data.txt');
console.log(toString.call(data));
console.log(data.toString());
console.log("End!!");

[object Uint8Array]
I love you 
haha!!
you know!!
End!!
```

***
## 非阻塞代码实例
***非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内***
***我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。***
```js
let fs=require('fs');
fs.readFile('./data.txt',function(err,data){
  if(err){
    console.log(err);
  }
  console.log(data.toString());
});
console.log('End!!!');
```
