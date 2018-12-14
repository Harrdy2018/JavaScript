# ESmodule模块化
***
```
如何定义模块  (一个JS就是一个模块)
如何导出模块  (export)
如何引入模块  (import)
```
```html
//test.html
<script type="module" src="./main.js"></script>

//main.js
// 第三方(npm install > node_modules) 不用./
// 自定义 ./
// 使用解构赋值 获取导出的内容
// import会变量提升 提前申明和定义
console.log(num,name);  //100 "lukang"
import {num,name} from "./zf.js";
// 一次性获取出来
import * as zf from "./zf.js";
console.log(zf);
console.log(num,name);  //100 "lukang"
// var num=1; 不可以重复申明
import px from "./px.js";
console.log(px);

//zf.js
export let num=100;
export let name="lukang";

//px.js
let arr=[1,2,3,4,5];
let str="I love you";
export default {arr,str};
```
