
/**
* 生成svg标签 link
* @returns HTMLElement
*/
export function Link () {
  const span = document.createElement('span');
  span.className = 'zr-icon link';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M832 128h-192v64h146.752l-265.376 265.376 45.248 45.248L832 237.248V384h64V128z\" fill=\"#181818\" p-id=\"4511\"></path><path  d=\"M768 832H192V256h352V192H160a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V480h-64v352z\" fill=\"#181818\" p-id=\"4512\"></path>\n  </svg>";
  return span;
}
