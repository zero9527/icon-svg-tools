
/**
* 生成svg标签 help
* @returns HTMLElement
*/
export function Help () {
  const span = document.createElement('span');
  span.className = 'zr-icon help';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 896C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384m0-832C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64\" fill=\"#181818\" p-id=\"9598\"></path><path  d=\"M511.68 704a48 48 0 1 0 0 96 48 48 0 0 0 0-96M512 256l-0.288 0.032A160.16 160.16 0 0 0 352 416h64a96.096 96.096 0 0 1 95.712-95.968L512 320c52.928 0 96 43.072 96 96s-43.072 96-96 96l-0.288-0.032V512H480v128h64v-67.264A160.224 160.224 0 0 0 672 416c0-88.224-71.776-160-160-160\" fill=\"#181818\" p-id=\"9599\"></path>\n  </svg>";
  return span;
}
