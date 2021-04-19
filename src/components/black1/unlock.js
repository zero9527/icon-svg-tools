
/**
* 生成svg标签 unlock
* @returns HTMLElement
*/
export function Unlock () {
  const span = document.createElement('span');
  span.className = 'zr-icon unlock';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M384 480v-160c0-70.4 57.6-128 128-128s128 57.6 128 128v64h64v-64c0-105.6-86.4-192-192-192s-192 86.4-192 192v160H160v416h704V480H384z m416 352H224v-288h576v288z\" fill=\"#181818\" p-id=\"6338\"></path><path  d=\"M416 736h192v-64h-192z\" fill=\"#181818\" p-id=\"6339\"></path>\n  </svg>";
  return span;
}
