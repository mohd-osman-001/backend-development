import { requestStore } from "../utils/requestStore.js";

const rareLimiterMiddleware = (req, res, next)=>{
    if(requestStore.counter > requestStore.limit){
        res.json({msg: "Rare limits exceeds..."})
    }
    else{
        next();
    }
}

export default rareLimiterMiddleware;