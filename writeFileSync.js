'use strict';

const fs = require("node:fs");
const path = require("node:path");


function writeFileSync(mainPath, file, content) {
  try {
    fs.writeFileSync(path.join(mainPath, file), content, {
      flag: "w",
    });
    console.log(`Successfully wrote new content to '${file}' file.`);
  } catch (err) {
    console.error(`Error occurred while writing to '${file}' file:`, err);
  }
}

module.exports = {
  writeFileSync
};  


