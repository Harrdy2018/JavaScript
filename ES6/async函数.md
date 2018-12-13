# async函数
***
### 用法
```html
<script>
    //async函数默认返回一个promise对象
    async function getA() {
        //return 内容就是成功回调的参数
        return "lukang";
    };
    getA().then(res=>console.log(res)).catch(e=>console.log(e));
</script>

<script>
    //async函数默认返回一个promise对象
    async function getA() {
        //有错误就会被catch
        throw new Error("sorry");
    };
    getA().then(res=>console.log(res)).catch(e=>console.log(e));
</script>
```
***
```html
<script>
    let p=new Promise((resolve,reject)=>{
        resolve("harrdy");
    });
    async function getA() {
        //await 后面是一个promise实例 如果不是也会默认转为promise
        //直接让promise实例的回调执行 返回执行时的参数
        //await 是一个语法糖 不用通过then就可以拿到resolve reject的参数
        //console.log(await p);//harrdy
        let a=await p;
        //await 将异步顺序变为同步顺序
        console.log(a);//harrdy
    };
    getA().then(res=>console.log(res)).catch(e=>console.log(e));
</script>
```
