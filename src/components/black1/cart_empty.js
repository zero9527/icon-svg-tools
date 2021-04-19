
/**
* 生成svg标签 cart_empty
* @returns HTMLElement
*/
export function Cart_empty () {
  const span = document.createElement('span');
  span.className = 'zr-icon cart_empty';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M384 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 384 768M704 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 704 768M312.672 512l-51.456-192h560.96l-51.456 192H312.672z m583.36-224a32 32 0 0 0-32-32H244.064L209.824 128H96v64h64.672l145.728 544H800v-64H355.52l-25.664-96H819.84l12.16-45.376 64-238.88-0.768-0.192C895.424 290.336 896 289.28 896 288z\" fill=\"#181818\" p-id=\"3990\"></path>\n  </svg>";
  return span;
}
