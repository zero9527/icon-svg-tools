
/**
* 生成svg标签 info
* @returns HTMLElement
*/
export function Info () {
  const span = document.createElement('span');
  span.className = 'zr-icon info';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64\" fill=\"#181818\" p-id=\"9337\"></path><path  d=\"M480 768h64v-288h-64zM512 272a48 48 0 1 0 0 96 48 48 0 0 0 0-96\" fill=\"#181818\" p-id=\"9338\"></path>\n  </svg>";
  return span;
}
