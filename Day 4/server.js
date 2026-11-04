import express from "express";

import reqCounterMiddleware from "./middlewares/reqCounterMiddleware.js";
import { div, mul, sum } from "./src/controllers/calculatorController.js";
import rareLimiterMiddleware from "./middlewares/rareLimitterMiddleware.js";
import requestLoggerMiddleware from "./middlewares/requestLoggerMiddleware .js";
import protectedDataMiddleware from "./middlewares/protectedDataMiddleware.js";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(requestLoggerMiddleware);
app.use(reqCounterMiddleware);
app.use(rareLimiterMiddleware)

app.get("/sum/:a/:b", sum);

app.get("/mul/:a/:b", mul);

app.get("/div/:a/:b", div);

app.get("/sub", (req, res)=>{
    const {a, b} = req.body;

    const result = a - b;

    res.json({
        msg: "subtract request recieved on server",
        sub: result,
    })
});


app.use(protectedDataMiddleware);

app.get("/protected-data", (req, res)=>{
    res.json({
        secretData: "I love biryani",
    })
})


app.listen("8080", ()=>{
    console.log("Server is listening on PORT: 8080")
})