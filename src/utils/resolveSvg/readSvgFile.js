const fs = require('fs');
const { promisify } = require('util');

const readDir = promisify(fs.readdir);

/**
 * 读取svg文件
 * @param {*} svgDirPath 
 * @returns 
 */
function readSvgFile (svgDirPath) {
  return new Promise((resolve, reject) => {
    readDir(svgDirPath)
      .then(files => resolve(files))
      .catch(err => reject(err));
  });
}

module.exports = readSvgFile;
