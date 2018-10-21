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
### parse(urlStr,queryString,AnalysisHost)  Node.js遗留的特有的API
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
