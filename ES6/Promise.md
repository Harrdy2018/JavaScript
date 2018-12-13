# Promise
***
### 我对Promise的理解
```html
//同目录下面的数据文件
data.txt
[1,2,3,4,5]

//如果name age 没有打引号，会出现错误
json.txt
{"name":"harrdy","age":18}

<script src="./jquery-3.3.1.js"></script>
<script>
    let myPromise=new Promise(function (resolve,reject) {
       //这里写异步代码
        $.ajax({url:"./data.txt", method:"get", dataType:"json", success:data=>resolve(data), error:err=>reject(err)});
    });
    myPromise.then(arr=>console.log(arr),err=>console.log(err));
</script>

//当页面有多个ajax请求的时候怎么办
<script src="./jquery-3.3.1.js"></script>
<script>
    function createPromise(url){
        return new Promise(function (resolve,reject) {
            //这里写异步代码
            $.ajax({url, method:"get", dataType:"json", success:data=>resolve(data), error:err=>reject(err)});
    });
    };
    createPromise("./data.txt").then(data=>console.log(data),err=>console.log(err));
    createPromise("./json.txt").then(data=>console.log(data),err=>console.log(err));
</script>

//简化
<script src="./jquery-3.3.1.js"></script>
<script>
    function createPromise(url){
        return new Promise(function (resolve,reject) {
            //这里写异步代码
            $.ajax({url, method:"get", dataType:"json", success:data=>resolve(data), error:err=>reject(err)});
    });
    };
    Promise.all([createPromise("./data.txt"),createPromise("./json.txt")]).then(result=>console.log(result),err=>console.log(err));
</script>

//嫉妒简化
<script src="./jquery-3.3.1.js"></script>
<script>
    Promise.all([
        $.ajax({url:"./data.txt",method:"get", dataType:"json"}),
        $.ajax({url:"./json.txt", method:"get", dataType:"json"})
    ]).then(result=>console.log(result),err=>console.log(err));
</script>
```
