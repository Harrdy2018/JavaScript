# Nodejs笔记 Chapter 2
## events模块

## Example
```js
let events=require("events");
let eventEmitter=new events.EventEmitter();
let handler=function(){
  console.log("hello");
};
eventEmitter.on("say",handler);
eventEmitter.emit('say');
console.log("End!!!");

hello
End!!!
```
