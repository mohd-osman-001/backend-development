// import fs from "fs";

import fs from "fs/promises"

// const data = fs.readFileSync("C:/Users/hp/Downloads/hello.txt", "utf8")   // Synchronous way

// console.log(data)
// console.log("hello world!")


// fs.readFile("C:/Users/hp/Downloads/hello.txt", "utf8", (err, data)=>{    //fs.readFile() with a callback 
//     console.log(data)
// })

// console.log("hello world!")



async function getData(){

    const data = await fs.readFile("C:/Users/hp/Downloads/hello.txt", "utf8")  // with async/await

    console.log(data)
}

getData()

console.log("hellooooooo")

