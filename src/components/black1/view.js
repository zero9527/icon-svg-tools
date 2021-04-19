
/**
* 生成svg标签 view
* @returns HTMLElement
*/
export function View () {
  const span = document.createElement('span');
  span.className = 'zr-icon view';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M512 608a96 96 0 1 1 0-192 96 96 0 0 1 0 192m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160\" fill=\"#000000\" p-id=\"2678\"></path><path  d=\"M512 800c-212.064 0-384-256-384-288s171.936-288 384-288 384 256 384 288-171.936 288-384 288m0-640C265.248 160 64 443.008 64 512c0 68.992 201.248 352 448 352s448-283.008 448-352c0-68.992-201.248-352-448-352\" fill=\"#000000\" p-id=\"2679\"></path>\n  </svg>";
  return span;
}
