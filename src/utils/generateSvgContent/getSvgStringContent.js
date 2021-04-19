const getFnName = require('./getFnName');

/**
 * 生成svg字符串
 * @param {*} info { name, path }
 */
function getSvgStringContent (info, iconPrefix) {
  // 将短横线文件名转成大驼峰式
  const fnName = getFnName(info.name);
  const html = `<span class="${iconPrefix} ${
    info.name
  }"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="${info.path}"></path>
  </svg></span>`;

  return `
/**
 * 生成svg标签 ${info.name}
 * @returns HTMLElement
 */
export function ${fnName} () {
  return ${JSON.stringify(html)};
}
`;
}

module.exports = getSvgStringContent;