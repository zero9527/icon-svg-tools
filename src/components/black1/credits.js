
/**
* 生成svg标签 credits
* @returns HTMLElement
*/
export function Credits () {
  const span = document.createElement('span');
  span.className = 'zr-icon credits';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 818.752l-320-320V301.248L301.248 192h421.504L832 301.248v197.504l-320 320zM886.624 265.376l-128-128A31.808 31.808 0 0 0 736 128H288a31.808 31.808 0 0 0-22.624 9.408l-128 127.968A31.904 31.904 0 0 0 128 288v224c0 8.832 3.584 16.832 9.376 22.656l352 351.968a31.904 31.904 0 0 0 45.248 0l352-352c5.792-5.792 9.376-13.792 9.376-22.624V288a31.904 31.904 0 0 0-9.376-22.624z\" fill=\"#181818\" p-id=\"3463\"></path><path  d=\"M320 384h384v-64H320z\" fill=\"#181818\" p-id=\"3464\"></path>\n  </svg>";
  return span;
}
