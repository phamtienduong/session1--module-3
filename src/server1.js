var http= require("http")
var url = require("url")
var fs = require("fs")
let server = http.createServer(function (req, res) {
    let url1 =url.parse(req.url)
    console.log("111",url1);
    let method=req.method
    if(method==="GET"){
        console.log("22222,da an vao phuong thuc get");
        if (url1.pathname=="/users") {
            console.log("da dung url users");
            let data = fs.readFileSync("src/db.json","utf-8")
            res.writeHead(200,{"Content-Type":"application/json"})
            res.write(data)
            return res.end()
            
        }
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  })
  server.listen(8080,()=>{
    console.log(`server is running at port 8080`)
  })