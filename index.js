const fs = require("fs");

const data = fs.readFileSync(
  "C:/Users/hp/Downloads/web application/ReactJS/REACT PROJECT/BACKEND/data/message.txt",
  "utf8",
);

console.log(data);
