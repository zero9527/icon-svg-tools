
/**
* 生成svg标签 like_filled
* @returns HTMLElement
*/
export function Like_filled () {
  const span = document.createElement('span');
  span.className = 'zr-icon like_filled';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M736 191.36c-47.584 0-90.944 17.6-124.48 46.272l-0.16-0.192-2.144 2.208-19.232 19.2L512 336.864l-77.984-78.016-19.232-19.2-2.144-2.208-0.16 0.192A190.944 190.944 0 0 0 288 191.328a192 192 0 0 0-192 192c0 58.208 25.984 110.208 66.848 145.408L512 877.92l349.152-349.184A191.488 191.488 0 0 0 928 383.36a192 192 0 0 0-192-192\" fill=\"#181818\" p-id=\"10121\"></path>\n  </svg>";
  return span;
}
