const fs = require("fs");

console.log(fs);

console.log("Starting...")
fs.writeFileSync("harry.txt", "Harry is a good boy")
console.log("Ending...")