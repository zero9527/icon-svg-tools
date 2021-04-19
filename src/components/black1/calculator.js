
/**
* 生成svg标签 calculator
* @returns HTMLElement
*/
export function Calculator () {
  const span = document.createElement('span');
  span.className = 'zr-icon calculator';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M192 64H128v896h768V64H192z m640 832H192V128h640v768z\" fill=\"#181818\" p-id=\"6860\"></path><path  d=\"M320 224h384v64H320zM320 416h64v64h-64zM480 416h64v64h-64zM640 416h64v64h-64zM320 576h64v64h-64zM480 576h64v64h-64zM640 576h64v64h-64zM320 736h64v64h-64zM480 736h64v64h-64zM640 736h64v64h-64z\" fill=\"#181818\" p-id=\"6861\"></path>\n  </svg>";
  return span;
}
