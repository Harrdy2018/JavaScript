## 面试题之js数组遍历

*  for 循环
```js
//这里的this指的是Window对象
<script>
    let arr=['a','b','c','d','e'];
    for(let i=0,len=arr.length;i<len;i++){
        console.log(this,i,arr[i]);
    };
</script>
```

* forEach 循环
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
