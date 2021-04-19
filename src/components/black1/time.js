
/**
* 生成svg标签 time
* @returns HTMLElement
*/
export function Time () {
  const span = document.createElement('span');
  span.className = 'zr-icon time';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M544 224h-64v288c0 8.832 3.584 16.832 9.376 22.656l192 191.968 45.248-45.248L544 498.752V224z\" fill=\"#181818\" p-id=\"3332\"></path><path  d=\"M512 896C300.256 896 128 723.744 128 512S300.256 128 512 128s384 172.256 384 384-172.256 384-384 384m0-832C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64\" fill=\"#181818\" p-id=\"3333\"></path>\n  </svg>";
  return span;
}
