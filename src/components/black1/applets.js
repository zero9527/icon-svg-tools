
/**
* 生成svg标签 applets
* @returns HTMLElement
*/
export function Applets () {
  const span = document.createElement('span');
  span.className = 'zr-icon applets';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M640 512h-32v-64h32a96 96 0 1 0-96-96v320c0 88.224-71.776 160-160 160s-160-71.776-160-160 71.776-160 160-160h32v64h-32a96 96 0 1 0 96 96V352c0-88.224 71.776-160 160-160s160 71.776 160 160-71.776 160-160 160M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64\" fill=\"#181818\" p-id=\"13375\"></path>\n  </svg>";
  return span;
}
