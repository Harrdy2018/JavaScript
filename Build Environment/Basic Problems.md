# 基本问题

***
## 好好学习 package.json
### --save-dev和--save
```
–save-dev 是你开发时候依赖的东西，–save 是你发布之后还依赖的东西

我的js代码是ES6规范的，在当前浏览器中并未普及，因此我需要将js代码编成ES5。这时我就需要引入babel模块，
因为只有在编译时需要babel模块，在发布代码后就不需要了，因此在引入babel模块时我们用 ‘npm install babel-core –save-dev’

如果我用了 jQuery，由于发布之后还是依赖jQuery，所以是 ‘npm install jquery –save’
```

***
## 好好学习 npm
