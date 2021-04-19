
/**
* 生成svg标签 upload
* @returns HTMLElement
*/
export function Upload () {
  const span = document.createElement('span');
  span.className = 'zr-icon upload';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M832 128H128v128h64V192h640v64h64V128zM201.376 585.376l45.248 45.248L480 397.248V896h64V397.248l233.376 233.376 45.248-45.248L512 274.752z\" fill=\"#181818\" p-id=\"5033\"></path>\n  </svg>";
  return span;
}
