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
