const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "crud");
const filepath = `${dirpath}/apple.txt`;

// That is create
// fs.writeFileSync(filepath, "this is a simple text file");

// This is a Read File
// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

// This is a Update File
// fs.appendFile(filepath, "and file name is apple.txt", (err) => {
//   if (!err) console.log("File is Upload");
// });

// That is a Rename the File
// fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
//   if (!err) console.log("File name is Upload");
// });

// That is a Delete File
fs.unlinkSync(`${dirpath}/fruit.txt`);
