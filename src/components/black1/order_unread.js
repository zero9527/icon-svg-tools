
/**
* 生成svg标签 order_unread
* @returns HTMLElement
*/
export function Order_unread () {
  const span = document.createElement('span');
  span.className = 'zr-icon order_unread';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M832 160c-35.2 0-64 28.8-64 64s28.8 64 64 64 64-28.8 64-64-28.8-64-64-64\" fill=\"#181818\" p-id=\"3856\"></path><path  d=\"M320 480h384v-64H320z\" fill=\"#181818\" p-id=\"3857\"></path><path  d=\"M320 608h256v-64h-256z\" fill=\"#181818\" p-id=\"3858\"></path><path  d=\"M320 736h256v-64h-256z\" fill=\"#181818\" p-id=\"3859\"></path><path  d=\"M800 352v512H224V224h96v64h384V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V352h-64zM384 160h256v64h-256V160z\" fill=\"#181818\" p-id=\"3860\"></path>\n  </svg>";
  return span;
}
