//building server using Node
const { on } = require("events");

const http = require("http");

const port = 8081;

const toDolist = ["Java", "Javascript", "Python"]

http.createServer((req, res)=> {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h4>Hello world, server started </h4>");
    response.end();
    if(url === "/todo"){
        // '===' is for comparing data and checking dtype
        if(method === "GET"){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(toDolist.toString());     
        }
        else if(method === "POST"){
            let body = "";
            req.on('error', (err) => {
                console.log(err);
            })
            .on('data', (chunk) => {
                body += chunk;
                console.log(chunk);
            })
            .on('end', () => {
                body = JSON.parse(body);                
                console.log("Complete data: ", body);
            })
        }
        else if (method === "DELETE") {
            let body = "";
            req.on('error', (err) => {
                console.log(err);
            }).on('data', (chunks) => {
                body += chunks;                
            }).on('end', () => {
                body = JSON.parse(body);
                let todelete = body.item;
                toDolist.find((elem , index) => {
                    if (elem === todelete){
                        toDolist.splice(index, 1);
                    }
                })
            })         

        }
    }
    else if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h4>To visit main server, add '/todos' at the end if url</h4>");
    }
    else{
        res.writeHead(501);
        res.write("Error");
    }
    res.end();
    
})

.listen(port, () => {
    console.log(`Server with NodeJS started runninggg`);
})