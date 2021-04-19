/**
 * 将短横线文件名转成大驼峰式
 * @param {*} info 
 * @returns 
 */
function getFnName (name) {
  const fnName = name
  .split('-')
  .map(item => {
    const arr = item.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  }).join('');
  return fnName;
}

module.exports = getFnName;
