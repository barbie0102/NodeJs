//http://localhost:8081/todos:
//using express
const express = require("express");

const app = express();

const port = 8081;

app.use(express.json());

// data
const toDoList = ["java", "javascript", "python"];

//Get
app.get("/todos", (req, res) => {

    //call back func stating the action on requesting the server with get method
    res.status(200).send(toDoList.toString());
})
//Post 
app.post("/todos", (req,res) => {
    let newlist = req.body.item;
    toDoList.push(newlist);
    res.status(200).send({
        message: "Task added"
    });
})
//Delete
app.delete("/todos", (req,res) => {
    const itemstodelete = req.body.item;
    toDoList.find((element, index) =>{
        if (elem === itemstodelete){
            toDoList.splice(index, 1);
        }
    })
    res.status(200).send({
        "mesg": "Deleted"
    })
})
//all
 app.all("/todos", (req,res) => {
    res.status(200).send("None of the feature is working");
 })

.listen(port, ()=> {
    console.log(`Nodejs server staring running on port no ${port}`);
})