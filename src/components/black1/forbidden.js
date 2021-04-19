
/**
* 生成svg标签 forbidden
* @returns HTMLElement
*/
export function Forbidden () {
  const span = document.createElement('span');
  span.className = 'zr-icon forbidden';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M805.056 759.808L264.192 218.912A382.24 382.24 0 0 1 512 128.032c212.064 0 384 171.872 384 384 0 94.464-34.24 180.896-90.944 247.776M128 512a382.08 382.08 0 0 1 90.944-247.84l540.864 540.896A381.984 381.984 0 0 1 512 896C299.936 896 128 724.064 128 512M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64\" fill=\"#181818\" p-id=\"8947\"></path>\n  </svg>";
  return span;
}
