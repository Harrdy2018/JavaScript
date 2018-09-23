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
```
在 Node.js 中，客户端可能随时都会给服务端发送请求。有可能在你处理一个请求时，另一个请求也被客户端送达了。
假设，两个请求都需要访问数据库。那么就可以在第一个请求进行数据库操作时，转去处理第二个请求。虽然不能同时对两者做成响应，
但是我们可以使用异步方式跳过对耗时操作结果的等待直接处理后续请求。而其他的一些运行环境默认是没有此能力的。
例如，Ruby on Rails 同时时间只能处理一个请求。如果想提高程序的并发能力，那么你就需要去购买更多的服务器。
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
* 我们并没有使用connect()函数建立连接，而且直接进行了查询，这时候建立连接将会被隐式地调用
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

***
* 连接回调查询
```
上面两种连接方式并没有对连接出错的情况进行处理，一旦连接出现错误将带来连锁的多米诺骨牌效应，查询也将会失败，整个程序也会崩溃，
为了避免出现这样的情况，我们将查询和关闭连接放到回调函数中
```
```js
var mysql=require('../mySoftware/node-v10.8.0-linux-x64/lib/node_modules/mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'harrdy'
});
connection.connect(function(err){
  if(err){
    //连接失败时的错误处理
    console.log(err);
  }
});
connection.query('select * from users',function(err,results,fileds){
  if(err){
    //查询失败时的错误处理
    console.log(err);
  }
  results.forEach(function(obj){
    console.log("id: "+obj.id+" name: "+obj.name+" age: "+obj.age);
  });
});
connection.end();
```

***
* 关闭连接
```
打开了数据库的连接我们也需要关闭连接，有两种关闭连接的方式，一种就是我们上面用的end()方法来关闭连接，它可以接收一个回调函数。
connection.end(function(err) {
  // 这时连接已经被关闭了
});
通过end()函数关闭连接不会影响队列中的查询。

还有一种方式是调用destroy()函数。
connection.destroy();
destroy()函数确保了没有更多的时间和回调会触发连接。同时destroy()函数也没有回调函数。
```

***
* 数据库连接池
```
通过上面的数据库连接方式我们会发现直接创建一个数据库连接比较“危险”，因为有很多种可能性导致连接的失败。
而且如果我们的程序中随意都可以和数据库建立连接的话，我们的程序就比较得混乱，不能很有效的管理数据库连接。
mysql库提供了另一种数据库连接方式给我们。

数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个。
这项技术能明显提高对数据库操作的性能

数据库连接池在初始化的时候将一定数量（数量受最小连接数制约）的数据库连接存放到数据库连接池中，不管这些数据库连接是否被使用，
连接池一直要存放这么多的连接数量。连接池的最大数据库连接数量限制了连接池最多能同时拥有的连接数，
如果超过最大连接数时，请求将会被添加到等待队列中去。
```

***
* 创建连接池
```js
var mysql=require('../mySoftware/node-v10.8.0-linux-x64/lib/node_modules/mysql');
//通过createPool()方法创建了一个数据库连接池
var pool=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  port:3306,
  database:'harrdy',
  //最大连接数，默认为10
  connectionLimit:10
});
//每次我们需要和数据库建立连接的时候不再是直接建立连接，
//而是去连接池中通过pool.getConnection()方法“捞取”已有的连接
pool.getConnection(function(err,connection){
  if(err){
    console.log(err);
  }
  connection.query('select * from users',function(err,results){
    //每次查询完数据库是都要使用release()方法释放数据库连接，这样数据库连接又回到了连接池中
    //释放后如果再使用connection将会报错
    connection.release();
    if(err){
      console.log(err);
    }
    results.forEach(function(obj){
      console.log("id: "+obj.id+" name: "+obj.name+" age: "+obj.age);
    });
  });
});
/*
pool.end(function (err) {
  // 所有连接池中的数据库连接将会被关闭
  console.log(err);
})
*/
```

***
* 关闭连接池
```js
pool.end(function (err) {
  // 所有连接池中的数据库连接将会被关闭
  console.log(err);
})
```
