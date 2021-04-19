
/**
* 生成svg标签 caution
* @returns HTMLElement
*/
export function Caution () {
  const span = document.createElement('span');
  span.className = 'zr-icon caution';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M480 640h64v-256h-64z\" fill=\"#181818\" p-id=\"9729\"></path><path  d=\"M512 800a48 48 0 1 0 0-96 48 48 0 0 0 0 96\" fill=\"#181818\" p-id=\"9730\"></path><path  d=\"M512 195.2L874.272 864H149.728L512 195.2z m443.744 685.76l0.384-0.192-416-768-0.384 0.224A31.584 31.584 0 0 0 512 96a31.584 31.584 0 0 0-27.744 16.96l-0.384-0.192-416 768 0.384 0.224A31.2 31.2 0 0 0 64 896a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32 31.2 31.2 0 0 0-4.256-15.04z\" fill=\"#181818\" p-id=\"9731\"></path>\n  </svg>";
  return span;
}
