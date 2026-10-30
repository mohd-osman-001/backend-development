import fs from "fs";
import path from "path";
import { program } from "commander";

program
  .name("todocli")
  .description("CLI to add, print, edit, delete your daily todos or tasks")
  .version("1.0.0");

const currentDir = import.meta.dirname;

const filePath = path.join(currentDir, "data", "todos.json");

const data = fs.readFileSync(filePath, "utf8");

const todosArr = JSON.parse(data);

program
  .command("print")
  .description("This command is used to print availabale todos")
  .action(() => {
    todosArr.forEach((elem, index) => {
      console.log(`${index + 1}: ${elem}`);
    });
  });

program
  .command("add")
  .description("This command is used to print available todos")
  .argument("<newTodo />", "This argument holds the new todo")
  .action((newTodo) => {
    todosArr.push(newTodo);

    fs.writeFileSync(filePath, JSON.stringify(todosArr), "utf8");
    console.log("Todo added");
  });

program
  .command("edit")
  .description("This command is used to edit existing todo")
  .argument("<oldTodo />", "This argument holds the new todo")
  .argument("<newTodo />", "This argument holds the new todo")
  .action((oldTodo, newTodo) => {
    const indexOfOldTodo = todosArr.indexOf(oldTodo);

    todosArr.splice(indexOfOldTodo, 1, newTodo);

    fs.writeFileSync(filePath, JSON.stringify(todosArr), "utf8");
    console.log("Todo Updated Successfully::", oldTodo, "->", newTodo);
  });

program
  .command("delete")
  .description("This command is used to delete existing todo")
  .argument("<existingTodo />", "This argument holds the new todo")
  .action((existingTodo) => {
    const indexOfOldTodo = todosArr.indexOf(existingTodo);

    todosArr.splice(indexOfOldTodo, 1);
    fs.writeFileSync(filePath, JSON.stringify(todosArr), "utf8");

    console.log("Todo Deleted Sucessfullly::", existingTodo);
  });

program.parse();
