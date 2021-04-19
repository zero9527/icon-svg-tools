
/**
* 生成svg标签 edit
* @returns HTMLElement
*/
export function Edit () {
  const span = document.createElement('span');
  span.className = 'zr-icon edit';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M128 896h768v-64H128zM256 704v-146.752l224-224L626.752 480l-224 224H256zM608 205.248L754.752 352 672 434.752 525.248 288 608 205.248z m214.624 169.408l0.032-0.032a32 32 0 0 0 0-45.248l-0.032-0.032-191.968-191.968-0.032-0.032a32 32 0 0 0-45.248 0l-0.032 0.032L192 530.752V768h237.248l393.376-393.344z\" fill=\"#181818\" p-id=\"4381\"></path>\n  </svg>";
  return span;
}
