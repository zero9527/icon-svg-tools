
/**
* 生成svg标签 download
* @returns HTMLElement
*/
export function Download () {
  const span = document.createElement('span');
  span.className = 'zr-icon download';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M832 768v64H192v-64H128v128h768v-128zM822.624 438.624l-45.248-45.248L544 626.752V128h-64v498.752l-233.376-233.376-45.248 45.248L512 749.248z\" fill=\"#181818\" p-id=\"5163\"></path>\n  </svg>";
  return span;
}
