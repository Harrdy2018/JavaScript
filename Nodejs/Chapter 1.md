# Nodejs笔记 Chapter 1
## 异步思想
```JavaScript
var start=new Date;
console.log(start);
setTimeout(function(){
  var end=new Date;
  console.log("Time elapsed:",end-start,'ms');
},500);
while(new Date-start<1000){
  console.log("Hello World!<br>");
}
```
* 执行过程
```
当执行到延时函数setTimeout，这时候呢，node不会停止执行，而是把这个函数放到了一个事件列表中，继续执行以后的代码，
一直等到了所有的东西都处理完了，然后JavaScript虚拟机才会问 "队列里还有谁啊"，然后再顺序的处理事件，这就是JS的一个很重的的特性。
```
```JavaScript
2018-09-23T01:05:52.252Z
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>
Time elapsed: 1016 ms
```
***
## 关系型数据库和非关系型数据
```
关系型数据库是指采用了关系模型（指的是二维表格模型）来组织数据的数据库，有稳定的表结构；
非关系型数据库中的数据没有关系模型，以对象的形式存放到数据库中，对象之间的关系是通过每个对象的属性来决定的，
有点类似于一长串json对象。典型的非关系型数据库有MongoDB和Redis
```

***
## 连接MySQL数据库
* 新建表
```MySQL
MariaDB [harrdy]> show tables;
+------------------+
| Tables_in_harrdy |
+------------------+
| users            |
+------------------+
1 row in set (0.08 sec)

MariaDB [harrdy]> select * from users;
+----+--------+-----+
| id | name   | age |
+----+--------+-----+
|  1 | jack   |  22 |
|  2 | harrdy |  18 |
+----+--------+-----+
2 rows in set (0.02 sec)
```

***
* 用Nodejs连接数据库
```js
var mysql=require('../mySoftware/node-v10.8.0-linux-x64/lib/node_modules/mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'harrdy'
});
connection.connect();
connection.query('select * from users',function(err,results,fileds){
  if(err) throw err;
  console.log(results);
  console.log(toString.call(results),toString.call(results[0]));
  //console.log(fileds);
  results.forEach(function(obj){
    console.log("id: "+obj.id+" name: "+obj.name+" age: "+obj.age);
  });
});
connection.end();

[ RowDataPacket { id: 1, name: 'jack', age: 22 },
  RowDataPacket { id: 2, name: 'harrdy', age: 18 } ]
[object Array] [object Object]
id: 1 name: jack age: 22
id: 2 name: harrdy age: 18
```

***
* 建立数据库连接 隐式建立连接
** 我们并没有使用connect()函数建立连接，而且直接进行了查询，这时候建立连接将会被隐式地调用
```js
var mysql=require('../mySoftware/node-v10.8.0-linux-x64/lib/node_modules/mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'harrdy'
});
//connection.connect();
connection.query('select * from users',function(err,results,fileds){
  if(err) throw err;
  console.log(results);
  console.log(toString.call(results),toString.call(results[0]));
  //console.log(fileds);
  results.forEach(function(obj){
    console.log("id: "+obj.id+" name: "+obj.name+" age: "+obj.age);
  });
});
connection.end();
```
