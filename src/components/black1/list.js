
/**
* 生成svg标签 list
* @returns HTMLElement
*/
export function List () {
  const span = document.createElement('span');
  span.className = 'zr-icon list';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z\" fill=\"#181818\" p-id=\"8035\"></path>\n  </svg>";
  return span;
}
