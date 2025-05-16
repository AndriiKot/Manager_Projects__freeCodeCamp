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

function getFiles(folderPath) {
  const files = fs.readdirSync(folderPath);
  const fileList = files.filter((file) => {
    const filePath = path.join(folderPath, file);
    return fs.statSync(filePath).isFile();
  });
  return fileList.sort();
}

function getFolders(folderPath) {
  const files = fs.readdirSync(folderPath);
  const folders = files.filter((file) => {
    const filePath = path.join(folderPath, file);
    return fs.statSync(filePath).isDirectory();
  });
  return folders.sort();
}

function getLastFolder(folders) {
  return folders.at(-1);
}





module.exports = {
  writeFileSync,
  getFiles,
  getFolders,
  getLastFolder,
};  


