
/**
* 生成svg标签 refresh
* @returns HTMLElement
*/
export function Refresh () {
  const span = document.createElement('span');
  span.className = 'zr-icon refresh';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M816.512 368.192l-55.36 32A285.632 285.632 0 0 1 800 544c0 158.816-129.184 288-288 288-106.368 0-199.264-58.144-249.12-144.16A285.856 285.856 0 0 1 224 544c0-158.816 129.216-288 288-288v96l192-128-192-128v96C317.92 192 160 349.888 160 544c0 64.064 17.504 124 47.52 175.808C268.48 824.96 381.984 896 512 896c194.112 0 352-157.92 352-352 0-64.064-17.472-124-47.488-175.808\" fill=\"#181818\" p-id=\"8295\"></path>\n  </svg>";
  return span;
}
