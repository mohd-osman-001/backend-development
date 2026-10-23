const fs = require("fs");

const path = require("path");  // internal package

// console.log(__dirname)

const finalPath = path.join(__dirname, "data", "message.txt");

// console.log(finalPath)

const readData = fs.readFileSync(finalPath, "utf8");

// console.log(readData)

let data = "You are hacked";

fs.writeFileSync(finalPath, data, "utf8");






// const data = fs.readFileSync(
//   "C:/Users/hp/Downloads/web application/ReactJS/REACT PROJECT/BACKEND/data/message.txt",
//   "utf8",
// );

// console.log(data);
