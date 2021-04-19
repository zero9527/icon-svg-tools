
/**
* 生成svg标签 go-to-link
* @returns HTMLElement
*/
export function GoToLink () {
  const span = document.createElement('span');
  span.className = 'zr-icon go-to-link';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M553.6 790.4l-44.8-44.8 233.6-233.6-233.6-233.6 44.8-44.8L832 512z\" fill=\"#181818\" p-id=\"14028\"></path><path  d=\"M192 480h576v64H192z\" fill=\"#181818\" p-id=\"14029\"></path>\n  </svg>";
  return span;
}
