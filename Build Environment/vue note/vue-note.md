# vue学习笔记

## example
* [简易计算器](./simple-calculator)
* [在vue中使用样式](./style.md)
* [v-for 指令](./v-for.md)
* [v-if and v-show 指令](./v-if%20and%20v-show.md)

### vue双向绑定原理
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>test html</title>
</head>
<body>
  <input id="a"></input>
  <input id="b"></input>
</body>
<script>
  let obj={}
  Object.defineProperty(obj,'hello',{
    get: function(){
      console.log('get get')
      return val;
    },
    set: function(newVal){
      console.log(`set set ${newVal}`)
      document.getElementById('b').value=newVal
      document.getElementById('a').value=newVal
      val=newVal
      return newVal
    }
  })
  document.getElementById('a').onkeyup=function(e){
    obj.hello=e.target.value
  }
  document.getElementById('b').onkeyup=function(e){
    obj.hello=e.target.value
  }
</script>
</html>
```
