const fs = require('fs');
const path = require('path');

let files = [];
fs.readdirSync(__dirname).forEach(file => {
    if (path.extname(file) === ".js" || path.extname(file) === ".json") {
        return;
    }
    files.push(file);
})

files.forEach(file => {
    const extension = path.extname(file).substring(1);
    const currentPath = path.join(__dirname, file);
    const destinationPath = path.join(__dirname, extension, file);

    if (!fs.existsSync(extension)) {
        fs.mkdirSync(extension);
    }
    fs.rename(currentPath, destinationPath, (err) => {
        if (err) {
            throw err;
        }
    })

})