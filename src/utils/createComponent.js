const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const getSvgDomContent = require('./generateSvgContent/getSvgDomContent');
const getSvgStringContent = require('./generateSvgContent/getSvgStringContent');

const writeFile = promisify(fs.writeFile);

/**
 * 写文件
 * @param {*} saveToDir 
 * @param {*} svgInfoList 
 * @returns 
 */
function createComponent (saveToDir, svgInfoList) {
  // 清空旧目录
  deleteFile(saveToDir);

  return new Promise((resolve, reject) => {
    let indexJsContent = '';
    // 1、根据svg文件数量生成对应的生成js文件
    for (let i = 0; i < svgInfoList.length; i++) {
      const toPath = path.join(saveToDir, `/${svgInfoList[i].name}.js`);
      const data = getSvgDomContent(svgInfoList[i], 'zr-icon');
      // const data = getSvgStringContent(svgInfoList[i], 'zr-icon');
      indexJsContent += `export * from './${svgInfoList[i].name}.js';\n`;
      // 写文件
      writeFile(toPath, data, { encoding: 'utf-8',  })
      .then(() => {
        if (i === svgInfoList.length - 1) {
          writeIndexJs(indexJsContent);
        }
      })
      .catch(err => reject(err));
    }
    // 2、写文件统一出口 index.js
    function writeIndexJs (content) {
      const toPath = path.join(saveToDir, '/index.js');
      writeFile(toPath, content, { encoding: 'utf-8',  })
      .then(() => {
        resolve();
      })
      .catch(err => reject(err));
    }
  });
}

// 清空旧目录
function deleteFile (saveToDir) {
  const files = fs.readdirSync(saveToDir);
  files.forEach(file => {
    const filePath = path.resolve(saveToDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
}

module.exports = createComponent;
