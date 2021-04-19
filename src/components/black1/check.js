
/**
* 生成svg标签 check
* @returns HTMLElement
*/
export function Check () {
  const span = document.createElement('span');
  span.className = 'zr-icon check';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64\" fill=\"#181818\" p-id=\"8555\"></path><path  d=\"M432 618.752l-121.376-121.376-45.248 45.248 166.624 166.624 326.624-326.624-45.248-45.248z\" fill=\"#181818\" p-id=\"8556\"></path>\n  </svg>";
  return span;
}
