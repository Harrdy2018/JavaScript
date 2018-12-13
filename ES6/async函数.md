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
