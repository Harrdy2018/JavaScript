## 面试题之js数组遍历

***
*  for 循环
```js
//这里的this指的是Window对象
<script>
    let arr=['a','b','c','d','e'];
    for(let i=0,len=arr.length;i<len;i++){
        console.log(this); //Window对象
        console.log(i);    //0 1 2 3 4
        console.log(arr[i]); //a b c d e
    };
</script>
```

***
* forEach 循环
```
forEach中传入要执行的回调函数，函数有三个参数。
第一个参数为数组元素(必选)，
第二个参数为数组元素索引值(可选)，
第三个参数为数组本身(可选)
```
```js
//使用匿名函数
<script>
    let arr=['a','b','c','d','e'];
    arr.forEach(function (value,index,array) {
        console.log(value); //a b c d e
        console.log(index); //0 1 2 3 4
        console.log(array); //["a", "b", "c", "d", "e"]
        console.log(this);  //Window对象
    });
</script>
```
```js
//使用箭头函数
<script>
    let arr=['a','b','c','d','e'];
    arr.forEach((value,index,array)=>{
        console.log(value); //a b c d e
        console.log(index); //0 1 2 3 4
        console.log(array); //["a", "b", "c", "d", "e"]
        console.log(this);  //Window对象
    });
</script>
```

***
* map 循环
```
map()中传入要执行的回调函数，函数有三个参数。
第一个参数为数组元素(必选)，
第二个参数为数组元素索引值(可选)
第三个参数为数组本身(可选)
还可以有返回值
```
```js
//使用匿名函数
<script>
    let arr=['a','b','c','d','e'];
    arr.map(function (item,index,array) {
        console.log(item);  //a b c d e
        console.log(index); //0 1 2 3 4
        console.log(array); //["a", "b", "c", "d", "e"]
    });
</script>
```
```js
//使用箭头函数
<script>
    let arr=['a','b','c','d','e'];
    arr.map((item,index,array)=>{
        console.log(item);  //a b c d e
        console.log(index); //0 1 2 3 4
        console.log(array); //["a", "b", "c", "d", "e"]
    });
</script>
```
```js
//返回值情况
<script>
    let arr=['a','b','c','d','e'];
    newArr=arr.map((item,index,array)=>{
        return item+'harrdy';
    });
    console.log(newArr); // ["aharrdy", "bharrdy", "charrdy", "dharrdy", "eharrdy"]
</script>
````

***
* for…in循环可用于循环对象和数组,推荐用于循环对象,可以用来遍历json
```js
//遍历对象
<script>
   let obj={
       name: "Harrdy",
       age: '18',
       sex: 'nan'
   };
   for(let key in obj){
       console.log(key); //name age sex
       console.log(obj[key]); //Harrdy 18 nan
   }
</script>
//遍历数组
<script>
   let arr=['a','b','c','d']
   for(let key in arr){
       console.log(key); //0 1 2 3
       console.log(arr[key]); //a b c d
   }
</script>
```

***
* for…of循环：可循环数组和对象，推荐用于遍历数组
* for…of提供了三个新方法：
* keys()是对键名的遍历； 
* values()是对键值的遍历； 
* entries()是对键值对的遍历
```js
<script>
   let arr=['a','b','c','d'];
   //默认就是键值遍历
   for(let value of arr){
       console.log(value); //a b c d
   }
   for(let value of arr.values()){
       console.log(value); //a b c d
   }
   //键名遍历
   for(let key of arr.keys()){
       console.log(key); //0 1 2 3
   }
   //键值对遍历
   for(let [key,value] of arr.entries()){
       console.log(key+"***"+value);
       //0***a
       //1***b
       //2***c
       //3***d
   }
</script>
```
