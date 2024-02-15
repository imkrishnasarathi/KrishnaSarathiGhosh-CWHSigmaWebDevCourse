const fs = require("fs");

console.log("Starting...")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("harry2.txt", "Harry is a good boy", () => {
    console.log("done")
    fs.readFile("harry2.txt", (error, data)=>{

    })
})

console.log("Ending...")
