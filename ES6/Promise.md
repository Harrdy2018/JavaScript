# Promise
***
### Promise 基础
```html
<script src="./jquery-3.3.1.js"></script>
<script>
    //执行顺序
    //new Promise 中的函数==>当前队列中的同步代码==>then中的回调
   let pro1=new Promise((resolve,reject)=>{
       //resolve 函数
       //reject 函数
       //只能执行上面的一个函数
       console.log("first");
       resolve("success");//成功
       reject("error");//失败
   });
   //回调 异步的
   pro1.then(res=>{
        //resolve 成功的回调
       console.log(res);
   },e=>{
       //reject 失败的回调
       console.log(e);
   });
   console.log("second");
</script>

<script src="./jquery-3.3.1.js"></script>
<script>
    //如果里面有错误 注意执行顺序
   let pro1=new Promise((resolve,reject)=>{
       //resolve 函数
       //reject 函数
       //只能执行上面的一个函数
       let a=1;
       let a=1;
       console.log("first");
       resolve("success");//成功
       reject("error");//失败
   });
   //回调 异步的
   pro1.then(res=>{
        //resolve 成功的回调
       console.log(res);
   },e=>{
       //reject 失败的回调
       console.log("have error");
       console.log(e);
   });
   console.log("second");
</script>
```
***
### 异步加载图片
```html
<body>
<div id="box"></div>
</body>
<script src="./jquery-3.3.1.js"></script>
<script>
    function loadImg(url) {
        return new Promise((resolve,reject)=>{
            let img=new Image();
            img.src=url;
            img.onload=()=>resolve(img);
            img.onerror=e=>reject(e);
        });
    };
    loadImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695997400&di=968f8e62995c69117ad29760a16ab84f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fa023d8ef11d0ac10d9224972af0710e670a3826e" +
        ".jpg").then(img=>box.appendChild(img),e=>console.log(e));
</script>
```
***
### catch方法专门用来捕捉错误信息
```html
<body>
<div id="box"></div>
</body>
<script src="./jquery-3.3.1.js"></script>
<script>
    function loadImg(url) {
        return new Promise((resolve,reject)=>{
            let img=new Image();
            img.src=url;
            img.onload=()=>resolve(img);
            img.onerror=e=>reject(e);
        });
    };
    loadImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544695997400&di=968f8e62995c69117ad29760a16ab84f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fa023d8ef11d0ac10d9224972af0710e670a3826e" +
        ".jpg").then(img=>box.appendChild(img)).catch(e=>console.log(e));
</script>
```
***
### all方法
```html
<script>
    //打印详细信息
    console.dir(Promise);
</script>

ƒ Promise()
all: ƒ all()
arguments: (...)
caller: (...)
length: 1
name: "Promise"
prototype: Promise
catch: ƒ catch()
constructor: ƒ Promise()
finally: ƒ finally()
then: ƒ then()
Symbol(Symbol.toStringTag): "Promise"
__proto__: Object
race: ƒ race()
reject: ƒ reject()
resolve: ƒ resolve()
Symbol(Symbol.species): (...)
get Symbol(Symbol.species): ƒ [Symbol.species]()
__proto__: ƒ ()
[[Scopes]]: Scopes[0]
```
***
```html
<script>
    //Promise.all([每一项都是Promise,如果不是默认转为Promise])
    //数组中的每一项都是成功 才会走成功回调
    //只要一个有错误，就会走错误的回调
    let p1=new Promise((resolve,reject)=>{
        resolve("harrdy");
    });
    let p2=new Promise((resolve,reject)=>{
        reject("p2 error");
    });
    let p3=new Promise((resolve,reject)=>{
        resolve("lukang");
    });
    Promise.all([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log(err));
</script>
```
***
### race方法 竞争
```html
<script>
    //Promise.race([每一项都是Promise,如果不是默认转为Promise])
    //只要有一个状态改变 当前实例的状态就跟着变
    let p1=new Promise((resolve,reject)=>{
        resolve("harrdy");
    });
    let p2=new Promise((resolve,reject)=>{
        resolve("p2p2p2p2");
    });
    let p3=new Promise((resolve,reject)=>{
        resolve("lukang");
    });
    Promise.race([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log(err));
</script>
```
***
```html
<script>
    //Promise.race([每一项都是Promise,如果不是默认转为Promise])
    //只要有一个状态改变 当前实例的状态就跟着变
    let p1=new Promise((resolve,reject)=>{
        setTimeout(function () {
            resolve("harrdy");
        },1000);
    });
    let p2=new Promise((resolve,reject)=>{
        resolve("p2p2p2p2");
    });
    let p3=new Promise((resolve,reject)=>{
        resolve("lukang");
    });
    Promise.race([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log(err));
</script>
```
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
