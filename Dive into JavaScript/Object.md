# Object对象

***
### Object.assign()
* 通过复制一个或多个对象来创建一个新的对象
* ***Object.assign(target, ...sources)  返回目标对象***
* 复制一个对象
```js
let obj={a:1};
let copy=Object.assign({},obj);
console.log(copy);//{a:1}
```
* 浅拷贝
```js
<script>
    let obj1={a:0,b:{c:0}};
    let obj2=Object.assign({},obj1);

    console.log(JSON.stringify(obj2));       //{"a":0,"b":{"c":0}}

    obj1.a=1;
    console.log(JSON.stringify(obj1));       //{"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));       //{"a":0,"b":{"c":0}}

    obj2.a=2;
    console.log(JSON.stringify(obj1));       //{"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));       //{"a":2,"b":{"c":0}}

    obj2.b.c=3;
    console.log(JSON.stringify(obj1));       //{"a":1,"b":{"c":3}}
    console.log(JSON.stringify(obj2));       //{"a":2,"b":{"c":3}}
</script>
```
* 深拷贝
```js
<script>
    let obj1={a:0,b:{c:0}};
    let obj2=JSON.parse(JSON.stringify(obj1));

    console.log(JSON.stringify(obj2));       //{"a":0,"b":{"c":0}}

    obj1.a=1;
    console.log(JSON.stringify(obj1));       //{"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));       //{"a":0,"b":{"c":0}}

    obj2.a=2;
    console.log(JSON.stringify(obj1));       //{"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));       //{"a":2,"b":{"c":0}}

    obj2.b.c=3;
    console.log(JSON.stringify(obj1));       //{"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));       //{"a":2,"b":{"c":3}}
</script>
```
* 合并对象
```js
<script>
    let o1={a:1};
    let o2={b:2};
    let o3={c:3};
    let obj=Object.assign(o1,o2,o3);
    console.log(obj);                   //{a:1,b:2,c:3}
    console.log(o1);                    //{a:1,b:2,c:3}  注意目标对象自身也会改变
</script>
```
