# Object对象
* Object.assign()
* Object.defineProperty()
* Object.defineProperties()
* Object.getOwnPropertyDescriptor()
* Object.getOwnPropertyDescriptors()

***
### Object.assign()
* 通过复制一个或多个对象来创建一个新的对象
* ***Object.assign(target, ...sources)***
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
* 合并具有相同属性的对象
```js
<script>
    //属性被后续参数中具有相同属性的其他对象覆盖
    let o1 = { a: 1, b: 1, c: 1 };
    let o2 = { b: 2, c: 2 };
    let o3 = { c: 3 };
    let obj = Object.assign({}, o1, o2, o3);
    console.log(obj); // { a: 1, b: 2, c: 3 }
</script>
```

***
### Object.defineProperty()
* 给对象添加一个属性并指定该属性的配置
* ***Object.defineProperty(obj, prop, descriptor)***
* 属性描述符
```
对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。
数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的。
存取描述符是由getter-setter函数对描述的属性。
描述符必须是这两种形式之一；不能同时是两者。

数据描述符和存取描述符均具有以下可选键值：
configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。

数据描述符同时具有以下可选键值：
value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
writable
当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。

存取描述符同时具有以下可选键值：
get
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，
但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。默认为 undefined。
set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，
即该属性新的参数值。默认为 undefined。
```
* Writable 属性
```js
<script>
    var someOne={};
    Object.defineProperty(someOne,'name',{
        value:"Harrdy",  //由于设定了writable属性为false 导致这个量不可以修改
        writable:false
    });
    console.log(someOne.name);//Harrdy
    someOne.name="lk";
    console.log(someOne.name);//Harrdy
</script>
```
* Configurable 属性 
```js
<script>
    var someOne={};
    Object.defineProperty(someOne,'name',{
        value:"Harrdy",
        configurable:false
    });
    delete someOne.name;
    console.log(someOne.name);//Harrdy  删除属性无效
    someOne.name="lk";
    console.log(someOne.name);//Harrdy
</script>
```
* Enumerable 属性
```js
<script>
    //能否遍历
    var someOne={};
    Object.defineProperty(someOne,'name',{
        value:"Harrdy",
        enumerable:true
    });
    //for-in循环遍历
    for(let key in someOne){
        console.log(key);
    }
    //Object.keys()
    Object.keys(someOne).forEach(function (key) {
        console.log(key);
    })
</script>
```
* 一般方法指定属性值与Object.defineProperty()指定属性值它们的属性描述符不一样
```js
<script>
    //一般方法指定属性值
    var someOne={};
    someOne.name="Harrdy";
    console.log(Object.getOwnPropertyDescriptor(someOne,'name'));
    //{value: "Harrdy", writable: true, enumerable: true, configurable: true}

    //Object.defineProperty()指定属性值
    var otherOne={};
    Object.defineProperty(otherOne,'name',{
        value:"Harrdy"
    });
    console.log(Object.getOwnPropertyDescriptor(otherOne,'name'));
    //{value: "Harrdy", writable: false, enumerable: false, configurable: false}
</script>
```
* 属性的修改器（setter）和获取器(getter)
* ***疑惑 在这里无法设置值 一旦扯到 this,person 就会出现迭代错误***
```js
<script>
    let person={
        name:'Harrdy'
    };
    Object.defineProperty(person,'name',{
       get:function () {
           console.log("You have getting it");
       },
       set:function () {
           console.log("You have setting it");
       }
    });
    person.name;              //You have getting it
    person.name='lk';         //You have setting it
</script>
```

***
### Object.defineProperties()
* 给对象添加多个属性并分别指定它们的配置
* ***Object.defineProperties(obj, props)***
```js
<script>
    var obj={};
    Object.defineProperties(obj,{
        'property1':{
            value:'AAAAA',
            writable:true,
            enumerable:true,
            configurable:true
        },
        'property2':{
            value:"BBBBB",
            writable:false,
            enumerable:false,
            configurable:false
        }
    });
    console.log(obj.property1);    //AAAAA
    obj.property1='CCCCC';
    console.log(obj.property1);    //CCCCC

    console.log(obj.property2);    //BBBBB
    obj.property2='CCCCC';
    console.log(obj.property2);    //BBBBB
</script>
```
* three.js 构建平面向量对象源码
```js
<script>
    function Vector2( x, y ) {
		this.x = x || 0;
		this.y = y || 0;
	}
	Object.defineProperties( Vector2.prototype, {
		"width": {
            get: function () {
                console.log(this.__proto__===Vector2.prototype);    //true
                console.log(this);                                  //这里this指的是Vector2对象的实例，即v1
				return this.x;
			},
			set: function ( value ) {
                console.log(this.__proto__===Vector2.prototype);    //true
				this.x = value;
			}
		},
		"height": {
			get: function () {
				return this.y;
			},
			set: function ( value ) {
				this.y = value;
			}
		}
	});
    var v1=new Vector2(1,1);
    v1.width;
    console.log(JSON.stringify(v1));                                //{"x":1,"y":1}
    v1.width=2;
    console.log(JSON.stringify(v1));                                //{"x":2,"y":1}
</script>
```

***
### Object.getOwnPropertyDescriptor()
* 返回对象指定的属性配置
* ***Object.getOwnPropertyDescriptor(obj, prop)***
```js
<script>
    var person={
        name:"Harrdy",
        age:18
    };
    var desc=Object.getOwnPropertyDescriptor(person,'name');
    console.log(desc);
    console.log(JSON.stringify(desc));
    //{"value":"Harrdy","writable":true,"enumerable":true,"configurable":true}
</script>
```

***
### Object.getOwnPropertyDescriptors()
* 所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象
* ***Object.getOwnPropertyDescriptors(obj)***
```js
<script>
    var person={
        name:"Harrdy",
        age:18
    };
    var descs=Object.getOwnPropertyDescriptors(person);
    console.log(descs);
    console.log(JSON.stringify(descs));
    /*
    {
        "name":{"value":"Harrdy","writable":true,"enumerable":true,"configurable":true},
        "age":{"value":18,"writable":true,"enumerable":true,"configurable":true}
    }
    */
</script>
```
