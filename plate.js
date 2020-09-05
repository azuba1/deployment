const fs = require("fs");
const {promisify} = require("util");

// converting callback to promise
const readFile = promisify(fs.readFile);

async function plate(path = "", data = {}){
  let content = await readFile(path);
  return content;
}

module.exports = plate;