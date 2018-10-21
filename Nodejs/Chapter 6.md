# Nodejs笔记 Chapter 5
## fs模块

***
### 读取文件
* 明白运行时加载意思
```js
let fs=require("fs");
//他是一个对象
console.log(toString.call(fs));   //[object Object]

//查看这个对象
console.log(fs);

{ appendFile: [Function: appendFile],
  appendFileSync: [Function: appendFileSync],
  access: [Function: access],
  accessSync: [Function: accessSync],
  chown: [Function: chown],
  chownSync: [Function: chownSync],
  chmod: [Function: chmod],
  chmodSync: [Function: chmodSync],
  close: [Function: close],
  closeSync: [Function: closeSync],
  copyFile: [Function: copyFile],
  copyFileSync: [Function: copyFileSync],
  createReadStream: [Function: createReadStream],
  createWriteStream: [Function: createWriteStream],
  exists: [Function: exists],
  existsSync: [Function: existsSync],
  fchown: [Function: fchown],
  fchownSync: [Function: fchownSync],
  fchmod: [Function: fchmod],
  fchmodSync: [Function: fchmodSync],
  fdatasync: [Function: fdatasync],
  fdatasyncSync: [Function: fdatasyncSync],
  fstat: [Function: fstat],
  fstatSync: [Function: fstatSync],
  fsync: [Function: fsync],
  fsyncSync: [Function: fsyncSync],
  ftruncate: [Function: ftruncate],
  ftruncateSync: [Function: ftruncateSync],
  futimes: [Function: futimes],
  futimesSync: [Function: futimesSync],
  lchown: [Function: lchown],
  lchownSync: [Function: lchownSync],
  lchmod: undefined,
  lchmodSync: undefined,
  link: [Function: link],
  linkSync: [Function: linkSync],
  lstat: [Function: lstat],
  lstatSync: [Function: lstatSync],
  mkdir: [Function: mkdir],
  mkdirSync: [Function: mkdirSync],
  mkdtemp: [Function: mkdtemp],
  mkdtempSync: [Function: mkdtempSync],
  open: [Function: open],
  openSync: [Function: openSync],
  readdir: [Function: readdir],
  readdirSync: [Function: readdirSync],
  read: [Function: read],
  readSync: [Function: readSync],
  readFile: [Function: readFile],
  readFileSync: [Function: readFileSync],
  readlink: [Function: readlink],
  readlinkSync: [Function: readlinkSync],
  realpath: { [Function: realpath] native: [Function] },
  realpathSync: { [Function: realpathSync] native: [Function] },
  rename: [Function: rename],
  renameSync: [Function: renameSync],
  rmdir: [Function: rmdir],
  rmdirSync: [Function: rmdirSync],
  stat: [Function: stat],
  statSync: [Function: statSync],
  symlink: [Function: symlink],
  symlinkSync: [Function: symlinkSync],
  truncate: [Function: truncate],
  truncateSync: [Function: truncateSync],
  unwatchFile: [Function: unwatchFile],
  unlink: [Function: unlink],
  unlinkSync: [Function: unlinkSync],
  utimes: [Function: utimes],
  utimesSync: [Function: utimesSync],
  watch: [Function: watch],
  watchFile: [Function: watchFile],
  writeFile: [Function: writeFile],
  writeFileSync: [Function: writeFileSync],
  write: [Function: write],
  writeSync: [Function: writeSync],
  Stats: [Function: Stats],
  ReadStream:
   { [Function: ReadStream]
     super_:
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Function],
        _fromList: [Function: fromList] } },
  WriteStream:
   { [Function: WriteStream]
     super_:
      { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  FileReadStream:
   { [Function: ReadStream]
     super_:
      { [Function: Readable]
        ReadableState: [Function: ReadableState],
        super_: [Function],
        _fromList: [Function: fromList] } },
  FileWriteStream:
   { [Function: WriteStream]
     super_:
      { [Function: Writable] WritableState: [Function: WritableState], super_: [Function] } },
  _toUnixTimestamp: [Function: toUnixTimestamp],
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  constants:
   { UV_FS_SYMLINK_DIR: 1,
     UV_FS_SYMLINK_JUNCTION: 2,
     O_RDONLY: 0,
     O_WRONLY: 1,
     O_RDWR: 2,
     S_IFMT: 61440,
     S_IFREG: 32768,
     S_IFDIR: 16384,
     S_IFCHR: 8192,
     S_IFBLK: 24576,
     S_IFIFO: 4096,
     S_IFLNK: 40960,
     S_IFSOCK: 49152,
     O_CREAT: 64,
     O_EXCL: 128,
     O_NOCTTY: 256,
     O_TRUNC: 512,
     O_APPEND: 1024,
     O_DIRECTORY: 65536,
     O_NOATIME: 262144,
     O_NOFOLLOW: 131072,
     O_SYNC: 1052672,
     O_DSYNC: 4096,
     O_DIRECT: 16384,
     O_NONBLOCK: 2048,
     S_IRWXU: 448,
     S_IRUSR: 256,
     S_IWUSR: 128,
     S_IXUSR: 64,
     S_IRWXG: 56,
     S_IRGRP: 32,
     S_IWGRP: 16,
     S_IXGRP: 8,
     S_IRWXO: 7,
     S_IROTH: 4,
     S_IWOTH: 2,
     S_IXOTH: 1,
     F_OK: 0,
     R_OK: 4,
     W_OK: 2,
     X_OK: 1,
     UV_FS_COPYFILE_EXCL: 1,
     COPYFILE_EXCL: 1,
     UV_FS_COPYFILE_FICLONE: 2,
     COPYFILE_FICLONE: 2,
     UV_FS_COPYFILE_FICLONE_FORCE: 4,
     COPYFILE_FICLONE_FORCE: 4 } }
     
//另外一种调用模块的写法
// CommonJS模块  用于服务器端
let { stat, exists, readFile } = require('fs');
console.log(readFile);  //[Function: readFile]
console.log(toString.call(readFile));  //[object Function]
//也就是需要什么函数就加载什么函数，而不是全部加载
```
* 异步读取文件，也就是无阻塞
```js
let {readFile}=require('fs');
readFile('./data.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);  //data是内存中的形式
        console.log(data.toString());
    } 
});
console.log("end !!");   //异步方式读取，会先输出此语句

[harrdy@localhost myNodejs]$ node ./test.js
end !!
<Buffer 79 6f 75 20 61 72 65 20 61 20 76 65 72 79 20 62 65 61 75 74 69 66 75 6c 20 67 69 72 6c 21 0a 68 61 68 61 21 21 0a 49 20 6c 6f 76 65 20 79 6f 75 20 76 ... >
you are a very beautiful girl!
haha!!
I love you very much .
you know?
[harrdy@localhost myNodejs]$
```
* 同步读取文件 也就是一步一步输出运行
```js
let {readFileSync}=require('fs');
let data=readFileSync('./data.txt');
console.log(data);
console.log(data.toString());
console.log("end !!");      //最后输出此语句

[harrdy@localhost myNodejs]$ node ./test.js
<Buffer 79 6f 75 20 61 72 65 20 61 20 76 65 72 79 20 62 65 61 75 74 69 66 75 6c 20 67 69 72 6c 21 0a 68 61 68 61 21 21 0a 49 20 6c 6f 76 65 20 79 6f 75 20 76 ... >
you are a very beautiful girl!
haha!!
I love you very much .
you know?
end !!
[harrdy@localhost myNodejs]$
```

***
### 打开文件   语法 fs.open(path, flags[, mode], callback)
* flags - 文件打开的行为
```
r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
w	以写入模式打开文件，如果文件不存在则创建。
w+	以读写模式打开文件，如果文件不存在则创建。
a	以追加模式打开文件，如果文件不存在则创建。
a+	以读取追加模式打开文件，如果文件不存在则创建。
```
* mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
* 异步方式打开文件
```js
let fs=require('fs');
console.log("start ...");
fs.open('./data.txt','r+',function(err,fd){
    if(err){
        console.log(err);
    }
    else{
        console.log('success !!!');
    }
});
console.log("end !!!");

[harrdy@localhost myNodejs]$ node ./test.js
start ...
end !!!
success !!!
[harrdy@localhost myNodejs]$
```
