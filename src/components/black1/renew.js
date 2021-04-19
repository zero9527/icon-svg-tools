
/**
* 生成svg标签 renew
* @returns HTMLElement
*/
export function Renew () {
  const span = document.createElement('span');
  span.className = 'zr-icon renew';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M704 576c-19.2 0-32 12.8-32 32s12.8 32 32 32 32-12.8 32-32-12.8-32-32-32\" fill=\"#181818\" p-id=\"3594\"></path><path  d=\"M864 320H192V192h576V128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V352c0-19.2-12.8-32-32-32z m-32 352h-256v-128h256v128z m0-192h-288c-19.2 0-32 12.8-32 32v192c0 19.2 12.8 32 32 32h288v96H192V384h640v96z\" fill=\"#181818\" p-id=\"3595\"></path>\n  </svg>";
  return span;
}
