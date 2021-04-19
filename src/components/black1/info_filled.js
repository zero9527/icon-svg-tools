
/**
* 生成svg标签 info_filled
* @returns HTMLElement
*/
export function Info_filled () {
  const span = document.createElement('span');
  span.className = 'zr-icon info_filled';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 64C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z m32 704h-64v-288h64v288z m-32-400c-25.6 0-48-22.4-48-48s22.4-48 48-48 48 22.4 48 48-22.4 48-48 48z\" fill=\"#181818\" p-id=\"9207\"></path>\n  </svg>";
  return span;
}
