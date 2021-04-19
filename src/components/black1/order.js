
/**
* 生成svg标签 order
* @returns HTMLElement
*/
export function Order () {
  const span = document.createElement('span');
  span.className = 'zr-icon order';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M320 480h384v-64H320zM320 608h256v-64h-256zM320 736h256v-64h-256z\" fill=\"#181818\" p-id=\"3725\"></path><path  d=\"M832 160h-128V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32zM384 160h256v64h-256V160z m416 704H224V224h96v64h384V224h96v640z\" fill=\"#181818\" p-id=\"3726\"></path>\n  </svg>";
  return span;
}
