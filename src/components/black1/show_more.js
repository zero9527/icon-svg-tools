
/**
* 生成svg标签 show_more
* @returns HTMLElement
*/
export function Show_more () {
  const span = document.createElement('span');
  span.className = 'zr-icon show_more';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M768 384l-256 256-256-256z\" fill=\"#181818\" p-id=\"11941\"></path>\n  </svg>";
  return span;
}
