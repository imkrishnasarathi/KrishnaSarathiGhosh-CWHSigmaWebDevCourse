import * as fs from 'fs';
import * as path from 'path';

let files = [];
fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
        files.push(file);
    })
});

console.log(files)