
/**
* 生成svg标签 close_filled
* @returns HTMLElement
*/
export function Close_filled () {
  const span = document.createElement('span');
  span.className = 'zr-icon close_filled';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M710.624 665.376l-45.248 45.248L512 557.248l-153.376 153.376-45.248-45.248L466.752 512l-153.376-153.376 45.248-45.248L512 466.752l153.376-153.376 45.248 45.248L557.248 512l153.376 153.376zM512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z\" fill=\"#181818\" p-id=\"8425\"></path>\n  </svg>";
  return span;
}
