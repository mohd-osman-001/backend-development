import { limit, counter } from "../utils/requestStore.js";

const rareLimiterMiddleware = (req, res, next)=>{
    if(counter > limit){
        res.json({msg: "Rare limits exceeds..."})
    }
    else{
        next();
    }
}

export default rareLimiterMiddleware;