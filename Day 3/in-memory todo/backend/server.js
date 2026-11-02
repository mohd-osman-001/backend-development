import express from "express";

const app = express(); // app instance

// json parser (parser the json from request body (client))
app.use(express.json());

// in memory 
const todoArr = []

// ----------- /todo route -------------

// 1. GET handler (CRUD: Read)

app.get("/todo", (req, res)=>{
    console.log("Get Request Recieved on /todo route...")

    res.json({
        todos: todoArr,
    })
})

// 2. POST handler (CRUD: Create)

app.post("/todo", (req, res)=>{
    console.log("POST request recieved on /todo route...")

    const newTodo = req.body.newTodo;

    todoArr.push(newTodo);

    res.json({
        msg: "new todo added successfully"
    })
})

// 3. PUT handler (CRUD: Update)

app.put("/todo", (req, res)=>{

    const {oldTodo, newTodo} = req.body;

    const indexOfOldTodo = todoArr.indexOf(oldTodo)

    todoArr.splice(indexOfOldTodo, 1, newTodo);

    res.json({
        msg: "Todo updated successfully..."
    })
})


// 4. DELETE handler (CRUD: Delete)

app.delete("/todo", (req, res)=>{

    const {targetTodo} = req.body;

    const indexOfTargetTodo = todoArr.indexOf(targetTodo);

    todoArr.splice(indexOfTargetTodo, 1)

    res.json({
        msg: "todo deleted successfully"
    })
})



app.listen("8080", ()=>{
    console.log("Server is listening on PORT: 8080");
});