# Nodejs笔记 Chapter 10
## url模块

***
### 查看模块对象 全是函数
```linux
[harrdy@localhost myNodejs]$ node ./test.js
{ Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode] }
[harrdy@localhost myNodejs]$
```

***
### 1、 parse(urlStr,queryString,AnalysisHost)  Node.js遗留的特有的API
```
参数：
urlStr: 要解析的url地址
queryString: 解析出来的查询字符串还是查询对象，true是对象 false是字符串，
例如：http://foo/bar?a=123, true的话 query: {a: 123}, false的话 query: 'a=123' 默认是false

AnalysisHost: 是否要解析出来host （即将//之后至下一个/之前的字符串），
例如：//foo/bar 会被解析为{host: 'foo', pathname: '/bar},否则{pathname: '//foo/bar'}.默认是false

作用：解析url，返回一个url属性对象
```
```js
const myURLA =url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash', true);
console.log(myURLA);

// Url {
//     protocol: 'https:', // 协议
//         slashes: true,
//         auth: 'user:pass', // 用户名密码
//         host: 'sub.host.com:8080', // host主机名
//         port: '8080', // 端口号
//         hostname: 'sub.host.com', // 主机名不带端口号
//         hash: '#hash', // 哈希值
//         search: '?query=string',// 查询字符串
//         query: 'query=string', // 请求参数
//         pathname: '/p/a/t/h', // 路径名
//         path: '/p/a/t/h?query=string', // 带查询的路径名
//         href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' // 原字符串本身
}
```
```
错误：
如果urlStr不是字符串将会抛出TypeError。
const myurl = url.parse({a:123});
TypeError: Parameter "url" must be a string, not object

如果auth属性存在但无法编码则抛出URIError。
```

***
### 2、 resolve(from, to)
```js
参数：
from: 解析时对应的基本的url
to:要解析的超链接url

作用：以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。
例如：
const url = require('url');
url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```

***
### 3、 format(url,options)
```
参数：
url: 一个WHATWG URL对象
options:
1. auth: 如果序列化的URL字符串应该包含用户名和密码为true，否则为false。默认为true。
2. fragment: 如果序列化的URL字符串应该包含分段为true，否则为false。默认为true。即是不是需要包含哈希值
3. search: 如果序列化的URL字符串应该包含搜索查询为true，否则为false。默认为true。
4. unicode: true 如果出现在URL字符串主机元素里的Unicode字符应该被直接编码而不是使用Punycode编码为true，默认为false。
返回一个WHATWG URL对象的可自定义序列化的URL字符串表达。

虽然URL对象的toString()方法和href属性都可以返回URL的序列化的字符串。然而，两者都不可以被自定义。
而url.format(URL[, options])方法允许输出的基本自定义。
例如：
const { URL } = require('url');
const myURL = new URL('https://a:b@你好你好?abc#foo');

console.log(myURL.href);
  // 输出 https://a:b@xn--6qqa088eba/?abc#foo

console.log(myURL.toString());
  // 输出 https://a:b@xn--6qqa088eba/?abc#foo

console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));
  // 输出 'https://你好你好/?abc'
```

***
### 4、 new URL(input[, base])
```
浏览器兼容的 URL 类，根据 WHATWG URL 标准实现。

注意: 根据浏览器的约定，URL 对象的所有属性都是在类的原型上实现为getter和setter，而不是作为对象本身的数据属性
。因此，与[遗留的urlObjects][]不同，在 URL 对象的任何属性(例如 delete myURL.protocol，delete myURL.pathname等)
上使用 delete 关键字没有任何效果，但仍返回 true。
参数：

input: 解析的输入url
base: 如果“input”是相对url，则为要解析的基本url

作用：通过将input解析到base上创建一个新的URL对象。如果base是一个字符串，则解析方法与new URL(base)相同。
例如：
const { URL } = require('url');
const myURL = new URL('/foo', 'https://example.org/');
  // https://example.org/foo
如果input或base是无效URLs，将会抛出TypeError。请注意给定值将被强制转换为字符串。例如：
const { URL } = require('url');
const myURL = new URL({ toString: () => 'https://example.org/' });
  // https://example.org/
存在于input主机名中的Unicode字符将被使用Punycode算法自动转换为ASCII。
const { URL } = require('url');
const myURL = new URL('https://你好你好');
  // https://xn--6qqa088eba/
```

***
### 5、 URLSearchParams
* URLSearchParamsAPI接口提供对URLquery部分的读写权限。URLSearchParams类也能够与以下四个构造函数中的任意一个单独使用。
```js
const { URL, URLSearchParams } = require('url');

const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'));
// 输出 123

myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href);
// 输出 https://example.org/?abc=123&abc=xyz

myURL.searchParams.delete('abc');
myURL.searchParams.set('a', 'b');
console.log(myURL.href);
// 输出 https://example.org/?a=b

const newSearchParams = new URLSearchParams(myURL.searchParams);
// 上面的代码等同于
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append('a', 'c');
console.log(myURL.href);
// 输出 https://example.org/?a=b
console.log(newSearchParams.toString());
// 输出 a=b&a=c

// newSearchParams.toString() 被隐式调用
myURL.search = newSearchParams;
console.log(myURL.href);
// 输出 https://example.org/?a=b&a=c
newSearchParams.delete('a');
console.log(myURL.href);
// 输出 https://example.org/?a=b&a=c
```
