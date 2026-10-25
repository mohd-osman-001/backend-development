// const fs = require("fs");

// import {Command} from "commander";
// const program = new Command();            // 1st and most common way of importing program from commander

import fs from "fs";
import { program } from "commander";

program
  .name("wordcli")
  .description("cli application to count letters, words, and lines in a file")
  .version("1.0.0");

program
  .command("letters")
  .description("Command to count letters in a file")
  .argument("<filepath>", "File path")
  .action((filepath) => {
    const data = fs.readFileSync(filepath, "utf8");
    console.log(`The no of letters in this file is: ${data.length}`);
  });

program
  .command("words")
  .description("Command to count words in a file")
  .argument("<filepath>", "File Path")
  .action((filepath) => {
    const data = fs.readFileSync(filepath, "utf8");
    console.log(`The no of words in this file is: ${data.split(" ").length}`);
  });

program
  .command("lines")
  .description("command to count lines in a file")
  .argument("<filepath>", "File path")
  .action((filepath) => {
    const data = fs.readFileSync(filepath, "utf8");
    console.log(`The no of lines in this file is: ${data.split("\n").length}`);
  });

program
  .command("all")
  .description("Command to count words, letters and lines from a file")
  .argument("<filePath>", "File Path")
  .action((filePath) => {
    const data = fs.readFileSync(filePath, "utf8");

    console.log("The number of letters in this file:", data.length);

    console.log("The number of words in this file:", data.split(" ").length);

    console.log("The number of words in this file:", data.split("\n").length);
  });

program.parse();
