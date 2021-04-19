
/**
* 生成svg标签 copy
* @returns HTMLElement
*/
export function Copy () {
  const span = document.createElement('span');
  span.className = 'zr-icon copy';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M128 320v576h576V320H128z m512 512H192V384h448v448z\" fill=\"#181818\" p-id=\"7252\"></path><path  d=\"M832 128H384v128h64V192h384v384h-64v64h128V128z\" fill=\"#181818\" p-id=\"7253\"></path>\n  </svg>";
  return span;
}
