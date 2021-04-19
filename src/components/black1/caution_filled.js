
/**
* 生成svg标签 caution_filled
* @returns HTMLElement
*/
export function Caution_filled () {
  const span = document.createElement('span');
  span.className = 'zr-icon caution_filled';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M956.8 880l-416-768c-6.4-9.6-16-16-28.8-16s-22.4 6.4-28.8 16l-416 768c0 6.4-3.2 9.6-3.2 16 0 19.2 12.8 32 32 32h832c19.2 0 32-12.8 32-32 0-6.4-3.2-9.6-3.2-16zM480 384h64v256h-64v-256z m32 416c-25.6 0-48-22.4-48-48S486.4 704 512 704s48 22.4 48 48S537.6 800 512 800z\" fill=\"#181818\" p-id=\"9861\"></path>\n  </svg>";
  return span;
}
