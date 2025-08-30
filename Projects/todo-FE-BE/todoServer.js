const express = require("express");
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));           // this allow cross-origin calls in dev

let todos = [];
let count = 1;

//to get all TODOs
app.get('/todos', (req,res)=>{ //gets all the todos
    res.json(todos);
});

// to get a particular todo w.r.t ID
app.get('/todos/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id )


    res.json(todo)
});

// to add a new todo
app.post('/todos',(req,res)=>{
    const newTodo = {
        id : count, 
        title : req.body.title
    }
    count += 1;
    todos.push(newTodo);
    res.json(newTodo);
})

//updating the existing todo

app.put('/todos/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id)
    if(todo){
        todo.title = req.body.title
    }

    res.json(todo)
});

//deleting the todo based in ID
app.delete('/todos/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: "deleted", id});
});

app.listen(3000, () => console.log("api on :3000"));
