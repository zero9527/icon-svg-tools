const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const startFlag = '<path';
const endFlag = '</path>';

/**
 * 解析svg文件，得到名称及path的d值
 * @param {*} files 
 */
function resolveSvgFile(svgDirPath, files) {
  /**
   * svgInfoList: { name, path: attrObj[]] }[]
   */
  const svgInfoList = [];
  
  return new Promise((resolve, reject) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.endsWith('.svg')) continue;
      
      if (`${Number(file[0])}` !== 'NaN') {
        console.log(`svg文件[${svgDirPath}/${file}]以数字开头的将不处理！`);
        continue;
      }

      const svgFilePath = path.join(svgDirPath, file);
      readFile(svgFilePath, { encoding: 'utf-8' })
      .then(svgStr => {
        const svgInfoItem = pathHandler(null, svgStr, svgFilePath, file);
        if (svgInfoItem) svgInfoList.push(svgInfoItem);
        if (i === files.length - 1) resolve(svgInfoList);
      })
      .catch(err => reject(err));
    }
  });
}

// path处理逻辑
function pathHandler (svgInfoItem, svgStr, svgFilePath, file) {
  const start = svgStr.indexOf(startFlag);
  const end = svgStr.indexOf(endFlag);
  if (start === -1 || end === -1) {
    if (svgInfoItem.name !== file.replace('.svg', '')) {
      console.warn(`svg文件[${svgFilePath}]中没有<path>标签，此文件见将不会被处理！`);
    }
    return svgInfoItem;
  }
  // 截取path标签
  const pathAttr = svgStr.substring(start + startFlag.length, end - 1);
  const attrObj = {};
  // 分别获取path标签的属性
  const attrArr = pathAttr.split('"');
  for (let i = 0; i < attrArr.length; i++) {
    const attrValue = attrArr[i];
    if (!attrValue || attrValue[attrValue.length - 1] === '=') {
      continue;
    }
    const lastItem = attrArr[i - 1];
    const key = lastItem.substring(lastItem.lastIndexOf(' ') + 1, lastItem.indexOf('='));
    if (key) attrObj[key] = attrValue;
  }
  const name = file.replace('.svg', '');

  if (svgInfoItem) {
    svgInfoItem.path.push(attrObj);
  } else {
    svgInfoItem = { name, path: [attrObj] };
  }
  
  const newStr = svgStr.substring(end + endFlag.length, svgStr.length);
  return pathHandler(svgInfoItem, newStr, svgFilePath, file);
}

module.exports = resolveSvgFile;
