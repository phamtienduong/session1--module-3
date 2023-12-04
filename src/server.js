// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     console.log("11111".rep);
    // let data = [
    //     {
    //         name: "Hao",
    //         id: 1
    //     },
    //     {
    //         name: "Minh",
    //         id: 2
    //     }
    // ]
    // let string=""
    // data.forEach((item)=>{
    //     string+=`<h1 onclick=alert("1111")>${item.name}</h1>
    //     `;
    // })
//   let file = fs.readFileSync('src/index.html',"utf-8") 
//   file=file.replaceAll("học node js cơ bản",string)
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(file);
//     return res.end();

// }).listen(8080);
const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('<h1>This is homepage</h1>');
});

app.get('/overview', (req, res) => {
  res.send('<h1>This is overview page</h1>');
});

app.get('/product', (req, res) => {
  res.send('<h1>This is product page</h1>');
});

app.use((req, res) => {
  res.status(404).send('<h1>PAGE NOT FOUND</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
