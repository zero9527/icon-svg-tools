
/**
* 生成svg标签 close
* @returns HTMLElement
*/
export function Close () {
  const span = document.createElement('span');
  span.className = 'zr-icon close';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64\" fill=\"#181818\" p-id=\"8686\"></path><path  d=\"M665.376 313.376L512 466.752l-153.376-153.376-45.248 45.248L466.752 512l-153.376 153.376 45.248 45.248L512 557.248l153.376 153.376 45.248-45.248L557.248 512l153.376-153.376z\" fill=\"#181818\" p-id=\"8687\"></path>\n  </svg>";
  return span;
}
