import express from "express";

import reqCounterMiddleware from "./middlewares/reqCounterMiddleware.js";
import { div, mul, sum } from "./src/controllers/calculatorController.js";
import rareLimiterMiddleware from "./middlewares/rareLimitterMiddleware.js";

const app = express();

app.use(reqCounterMiddleware);
app.use(rareLimiterMiddleware)

app.get("/sum/:a/:b", sum);

app.get("/mul/:a/:b", mul);

app.get("/div/:a/:b", div);

app.listen("8080", ()=>{
    console.log("Server is listening on PORT: 8080")
})