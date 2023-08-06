const http = require("http");

const port = 8081;

const toDolist = ["Java", "Javascript", "Python"]

http.createServer((request, response)=> {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h4>Hello world, server started </h4>");
    response.end();
})

// http.createServer((req, res)=>{
//     const {method,url} = req;
//     // console.log(method,url);

//     if(url === "/todo"){
//         // '===' is for comparing data and checking dtype
//         if(method === "GET"){
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(toDolist.toString());     
//         }else if(method === "POST"){
//             let body = "";
//             req.on()
//         }
//     }
// })

.listen(port, ()=>{
    // callback fn
    console.log(`NodeJs server started running on port ${port}`);
})




