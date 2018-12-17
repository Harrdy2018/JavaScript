# WebSocket
***
```node
var http=require("http");
var fs=require("fs");
var server=http.createServer((req,res)=>{
    console.log(new Date()+" Received request for "+req.url);
    res.writeHead(404);
    res.end();
});
server.listen(1234,()=>{
    console.log((new Date())+" Server is listening on port 1234");
});
var WebSocketServer=require("websocket").server;
wsServer=new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin){
    return true;
}

wsServer.on("request",function(req){
    if(!originIsAllowed(req.origin)){
        req.reject();
        console.log(new Date()+" Connection from origin "+req.origin+" rejected.");
        return ;
    }
    var connection=req.accept("echo-protocol",req.origin);
    console.log(new Date()+" Connection accepted.");
    connection.on("message",function(message){
        if(message.type==="utf8"){
            console.log("Received Message: "+message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
```
***
```html
<!doctype html>
<html>
    <head></head>
    <body>
        <div id="chatlog"></div>
        <input type="text" id="message">
        <input id="btn" type="button" value="send"> 
    </body>
</html>
<script>
    let ws=new WebSocket("ws://127.0.0.1:1234","echo-protocol");
    console.log(ws);
    console.log(ws.readyState+" 正在连接");

    //指定连接成功时回调
    ws.onopen=function(event){
        console.log(ws.readyState+" 连接成功,可以通信了");
        console.log("这是连接成功: ");
        console.log(event);
        let oBtn=document.querySelector("#btn");
        let oText=document.querySelector("#message");
        oBtn.addEventListener("click",()=>ws.send(oText.value))
    }
    //指定收到服务器数据后的回调函数
    ws.onmessage=function(event){
        console.log(ws.readyState+" 此时收到服务器的数据");
        console.log("这是收到服务器数据: ");
        console.log(event);
        if(typeof event.data==="string"){
            console.log("Received data string");
            let msg=event.data;
            document.querySelector("#chatlog").innerHTML+='<br>'+msg;
        }
        if(event.data instanceof ArrayBuffer){
            let buffer=event.data;
            console.log("Received arraybuffer");
        }
    }
    //指定连接关闭的回调
    ws.onclose=function(event){
        let code=event.code;
        let reason=event.reason;
        let wasClean=event.wasClean;
        console.log("这是连接关闭: ");
        console.log(event);
        console.log(ws.readyState+" 连接关闭");
    }
    //指定报错时的回调
    ws.onerror=function(event){
        console.log("这是报错: ");
        console.log(event);
        console.log(ws.readyState+" 出错");
    }

    console.log("test test test test");
</script>
```
