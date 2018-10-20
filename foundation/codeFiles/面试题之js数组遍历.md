## 面试题之js数组遍历

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
