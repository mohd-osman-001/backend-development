const fs = require("fs");
// const path = require("path");

const command = process.argv[2];
const path = process.argv[3];


const data = fs.readFileSync(path, "utf8");

function lettersCount() {
  const letter = data.length;
  console.log(`The number of letters in this file is: ${letter}`);
}

function wordCount() {
  const words = data.split(" ").length;
  console.log(`The number of words in this file is: ${words}`);
}

if (command.toLocaleLowerCase() === "words") {
  wordCount();
} else if (command.toLocaleLowerCase() === "letters") {
  lettersCount();
}
