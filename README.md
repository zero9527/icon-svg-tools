# svg-icon-tools

一个读取`svg文件`，从而输出`js版本函数`动态创建 `svg图标` 的工具

> 支持多 `path` 标签与 `path` 标签各自的 `fill` 颜色等 `attr` 属性

## 1、svg 文件注意事项

测试过从 `iconfont` 上下载的svg是可以生效的

> src/__example 里面有一个简单的例子

- 项目从 `svg` 文件中截取 `<path>` 标签

  正常来说 `<path>`只需要一个或多个就可以自定义路径

- 文件名开头**不能**是数字

  因为需要将文件名转为大驼峰，然后作为函数名（方便 `tree-shaking`）

- 由于只截取 `<path>` 标签，其他的标签如`rect/line/arc`以及动画相关 等等将不会被保留

## 2、实现方案 

> 目前输出直接 `Dom元素`/`svg字符串`，使用框架的修改模板文件成各自的内容即可

项目入口
```js
// src\index.js
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const {
  readSvgFile,
  resolveSvgFile,
  createComponent
} = require('./utils');

const svgDirPath = path.resolve(process.cwd(), './src/svgs/black1');
const saveToDir = path.resolve(process.cwd(), './src/components/black1');
// const svgDirPath = path.resolve(process.cwd(), './src/svgs/colors1');
// const saveToDir = path.resolve(process.cwd(), './src/components/colors1');

const progress = ora();

async function startup () {
  if (!fs.existsSync(svgDirPath)) {
    console.log(`svg路径[${svgDirPath}]不存在！`);
    process.exit(1);
  }
  if (!fs.existsSync(saveToDir)) {
    console.log(`输出路径[${saveToDir}]不存在！`);
    process.exit(1);
  }
  progress.start('开始生成svg图标\n');
  // 读取svg文件目录
  const files = await readSvgFile(svgDirPath);
  progress.text = '读取文件成功\n';
  const svgInfoList = await resolveSvgFile(svgDirPath, files);
  progress.text = 'svg信息处理成功\n';
  await createComponent(saveToDir, svgInfoList);
  progress.succeed('生成svg图标完成！\n');

  console.log(`svg路径：${svgDirPath}`);
  console.log(`输出路径：${saveToDir}\n`);
}

startup();
```

### 2.1 读取 svg 文件

```js
// src\utils\resolveSvg\readSvgFile.js
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
```

### 2.2 解析 svg 文件

```js
// src\utils\resolveSvg\resolveSvgFile.js
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
  
  // path处理逻辑
  function pathHandler (svgStr, svgFilePath, file) {
    const start = svgStr.indexOf(startFlag);
    const end = svgStr.indexOf(endFlag);
    if (start === -1 || end === -1) {
      if (!svgInfoList.some(i => i.name === file.replace('.svg', ''))) {
        console.warn(`svg文件[${svgFilePath}]中没有<path>标签，此文件见将不会被处理！`);
      }
      return;
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
    const svgInfoItem = svgInfoList.find(i => i.name === name);

    if (svgInfoItem) {
      svgInfoItem.path.push(attrObj);
    } else {
      svgInfoList.push({ name, path: [attrObj] });
    }
    
    const newStr = svgStr.substring(end + endFlag.length, svgStr.length);
    pathHandler(newStr, svgFilePath, file);
  }

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
        pathHandler(svgStr, svgFilePath, file);
        if (i === files.length - 1) {
          resolve(svgInfoList);
        }
      })
      .catch(err => reject(err));
    }
  });
}

module.exports = resolveSvgFile;
```

### 2.3 生成 js 模板内容

```js
// src\utils\generateSvgContent\getSvgDomContent.js
const getFnName = require('./getFnName');

/**
 * 生成svg标签
 * @param {*} info 
 * @param {*} iconPrefix class的前缀
 */
function getSvgDomContent (info, iconPrefix) {
  // 将短横线文件名转成大驼峰式
  const fnName = getFnName(info.name);
  const pathStr = info.path.map(attrObj => {
    const pathAttrStr = Object.keys(attrObj).map(key => ` ${key}="${attrObj[key]}"`);
    return `<path ${pathAttrStr.join('')}></path>`;
  });
  const svgStr = `<svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    ${pathStr.join('')}
  </svg>`;

  return `
/**
* 生成svg标签 ${info.name}
* @returns HTMLElement
*/
export function ${fnName} () {
  const span = document.createElement('span');
  span.className = '${iconPrefix} ${info.name}';
  span.innerHTML = ${JSON.stringify(svgStr)};
  return span;
}
`;
}

module.exports = getSvgDomContent;
```

### 2.4 输出生成 js 文件

```js
// src\utils\createComponent.js
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
```
