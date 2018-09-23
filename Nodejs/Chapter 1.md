# Nodejs笔记 Chapter 1
## 异步思想
```JavaScript
var start=new Date;
console.log(start);
setTimeout(function(){
  var end=new Date;
  console.log("Time elapsed:",end-start,'ms');
},500);
while(new Date-start<1000){
  console.log("Hello World!<br>");
}
```
* 执行过程
```
当执行到延时函数setTimeout，这时候呢，node不会停止执行，而是把这个函数放到了一个事件列表中，继续执行以后的代码，
一直等到了所有的东西都处理完了，然后JavaScript虚拟机才会问 "队列里还有谁啊"，然后再顺序的处理事件，这就是JS的一个很重的的特性。
```
```JavaScript
2018-09-23T01:05:52.252Z
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Time elapsed: 1000 ms
```
