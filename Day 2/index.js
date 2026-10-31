import express, { request, response } from "express";

const app = express(); // creating an app instance


// -----------    /menu route   -----------

// GET Handler

app.get("/menu", (request, response) => {
  console.log("Get request recieved on /menu route");

  response.send(
    "okay okay, I got your Get request, but I don't have anything to response right now...",
  );
});

// POST Handler

app.post("/menu", (request, response) => {
  console.log("Post request recieved on /menu route");

  response.send(
    "okay okay, I got your POST request, but I don't have anything to response right now...",
  );
});

// PUT handler

app.put("/menu", (request, response) => {
  console.log("Put request recieved on /menu route");

  response.send(
    "okay okay, I got your PUT request, but I don't have anything to response right now...",
  );
});


app.delete("/menu", (request, response)=>{
    console.log("Delete request recieved on /menu route")

    response.send("okay okay, I got your DELETE request, but I don't have anything to response right now...")
})




// -----------    /restaurant route   -----------

// GET handler

// POST handler

// PUT handler

// DELETE handler



app.listen(8080, () => {
  console.log("Server is Running on port: 8080");
});
