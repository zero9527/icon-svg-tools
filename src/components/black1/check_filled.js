
/**
* 生成svg标签 check_filled
* @returns HTMLElement
*/
export function Check_filled () {
  const span = document.createElement('span');
  span.className = 'zr-icon check_filled';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M432 709.248l-166.624-166.624 45.248-45.248 121.376 121.376 281.376-281.376 45.248 45.248L432 709.248zM512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z\" fill=\"#181818\" p-id=\"8817\"></path>\n  </svg>";
  return span;
}
