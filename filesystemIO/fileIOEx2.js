const fs = require('fs');

const data = fs.readFileSync(
    "./newFile.txt",
    { encoding: "utf-8"});
console.log(data);

