
/**
* 生成svg标签 star_filled
* @returns HTMLElement
*/
export function Star_filled () {
  const span = document.createElement('span');
  span.className = 'zr-icon star_filled';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 96c3.808 0 7.584 2.176 8.992 6.56l129.664 270.784 288.736 33.184c9.216 0 13.024 11.744 5.6 17.152L720 616l65.184 299.52a9.536 9.536 0 0 1-9.056 12.48 9.344 9.344 0 0 1-5.536-1.856L512 772.928l-258.592 153.216a9.344 9.344 0 0 1-5.536 1.856 9.536 9.536 0 0 1-9.056-12.48L304 616l-224.992-192.32a9.472 9.472 0 0 1 5.6-17.152l288.736-33.184 129.632-270.784A9.312 9.312 0 0 1 512 96\" fill=\"#181818\" p-id=\"10381\"></path>\n  </svg>";
  return span;
}
