
/**
* 生成svg标签 message
* @returns HTMLElement
*/
export function Message () {
  const span = document.createElement('span');
  span.className = 'zr-icon message';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M896 128H128a32 32 0 0 0-32 32v576a32 32 0 0 0 32 32h288v-64H160V192h704v512h-256c-8.832 0-16.832 3.584-22.656 9.376l-159.968 160 45.248 45.248L621.248 768H896a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32\" fill=\"#181818\" p-id=\"2940\"></path><path  d=\"M560 448a48 48 0 1 0-95.968-0.032A48 48 0 0 0 560 448M240 448a48 48 0 1 0 95.968 0.032A48 48 0 0 0 240 448M784 448a48 48 0 1 0-95.968-0.032A48 48 0 0 0 784 448\" fill=\"#181818\" p-id=\"2941\"></path>\n  </svg>";
  return span;
}
