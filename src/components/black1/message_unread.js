
/**
* 生成svg标签 message_unread
* @returns HTMLElement
*/
export function Message_unread () {
  const span = document.createElement('span');
  span.className = 'zr-icon message_unread';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M160 192h608V128H128a32 32 0 0 0-32 32v576a32 32 0 0 0 32 32h288v-64H160V192zM864 704h-256c-8.832 0-16.832 3.584-22.656 9.376l-159.968 160 45.248 45.248L621.248 768H896a32 32 0 0 0 32-32V288h-64v416z\" fill=\"#181818\" p-id=\"3071\"></path><path  d=\"M464 448a48 48 0 1 0 95.968 0.032A48 48 0 0 0 464 448M240 448a48 48 0 1 0 95.968 0.032A48 48 0 0 0 240 448M688 448a48 48 0 1 0 95.968 0.032A48 48 0 0 0 688 448M896 96a64 64 0 1 0 0.032 128.032A64 64 0 0 0 896 96\" fill=\"#181818\" p-id=\"3072\"></path>\n  </svg>";
  return span;
}
