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
