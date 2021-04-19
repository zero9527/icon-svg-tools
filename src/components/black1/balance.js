
/**
* 生成svg标签 balance
* @returns HTMLElement
*/
export function Balance () {
  const span = document.createElement('span');
  span.className = 'zr-icon balance';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M64 832h768V320H64v512z m64-448h640v384H128V384zM448 192h448v64H448zM896 256h64v256h-64zM896 192h64v64h-64z\" fill=\"#181818\" p-id=\"13897\"></path><path  d=\"M448 448c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z m0 192c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z\" fill=\"#181818\" p-id=\"13898\"></path>\n  </svg>";
  return span;
}
