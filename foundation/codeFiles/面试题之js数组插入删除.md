## 面试题之js数组插入删除

***
* 



***
* 删除一个给定的数据
```js
<script>
   let arr=[3,4,5,6,7];
   function deleteFromArray(arr,compare) {
       let index=arr.findIndex(x=>x==compare);
       if(index != -1) {
           arr.splice(index,1);
       }
   };
   //deleteFromArray(arr,3);
   //console.log(arr);
   //deleteFromArray(arr,1);
   //console.log(arr);
</script>
```

***
* arrayObj.findIndex(callbackfn [, thisArg]);
* 返回满足回调函数中指定的测试条件的第一个数组元素的索引值
```
对于数组中的每个元素，findIndex 方法都会调用一次回调函数（采用升序索引顺序），直到有元素返回 true。
只要有一个元素返回 true，findIndex 立即返回该返回 true 的元素的索引值。如果数组中没有任何元素返回 true，则 findIndex 返回 -1。
findIndex 不会改变数组对象
```

***
* arrayObj.splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])
* 从一个数组中移除元素，如有必要，在所移除元素的位置上插入新元素，并返回所移除的元素
* splice 方法通过移除从 start 位置开始的指定个数的元素并插入新元素来修改 arrayObj。返回值是一个由所移除的元素组成的新 Array 对象
