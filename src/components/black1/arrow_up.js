
/**
* 生成svg标签 arrow_up
* @returns HTMLElement
*/
export function Arrow_up () {
  const span = document.createElement('span');
  span.className = 'zr-icon arrow_up';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M745.376 662.624L512 429.248l-233.376 233.376-45.248-45.248L512 338.752l278.624 278.624z\" fill=\"#181818\" p-id=\"10511\"></path>\n  </svg>";
  return span;
}
