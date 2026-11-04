import { counter } from "../utils/requestStore.js";
import { setCounter } from "../utils/requestStore.js";

const reqCounterMiddleware = (req, res, next) => {
  setCounter(counter+1)
  console.log(
    "New request recieved and counter increased to",
    counter,
  );
  next();
};

export default reqCounterMiddleware;
