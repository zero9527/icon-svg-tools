
/**
* 生成svg标签 arrow_down
* @returns HTMLElement
*/
export function Arrow_down () {
  const span = document.createElement('span');
  span.className = 'zr-icon arrow_down';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 685.248l-278.624-278.624 45.248-45.248L512 594.752l233.376-233.376 45.248 45.248z\" fill=\"#181818\" p-id=\"10771\"></path>\n  </svg>";
  return span;
}
