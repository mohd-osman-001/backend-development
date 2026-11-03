import { requestStore } from "./requestStore.js";

const reqCounterMiddleware = (req, res, next)=>{
    requestStore.counter++;
    console.log("New request recieved and counter increased to", requestStore.counter)
    next()
}

export default reqCounterMiddleware;