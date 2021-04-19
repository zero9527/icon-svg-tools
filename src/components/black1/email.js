
/**
* 生成svg标签 email
* @returns HTMLElement
*/
export function Email () {
  const span = document.createElement('span');
  span.className = 'zr-icon email';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M128 768V301.248l361.344 361.376a32.032 32.032 0 0 0 45.312 0L896 301.248V768H128z m384-173.248L173.248 256h677.504L512 594.752zM64 832h896V192H64v640z\" fill=\"#181818\" p-id=\"7122\"></path>\n  </svg>";
  return span;
}
