const fs = require("fs");

console.log("Starting...")
// fs.writeFileSync("harry.txt", "Harry is a good boy")

fs.writeFile("harry2.txt", "Harry is a good boy", () => {
    console.log("done")
    fs.readFile("harry2.txt", "utf-8", (error, data)=>{
        console.log(error, data)
    })
})

fs.appendFile("harry.txt", "harryrobo", (e,d)=>{
    console.log(d)
})

console.log("Ending...")
