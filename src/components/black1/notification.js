
/**
* 生成svg标签 notification
* @returns HTMLElement
*/
export function Notification () {
  const span = document.createElement('span');
  span.className = 'zr-icon notification';
  span.innerHTML = "<svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\n    <path  d=\"M192 768v-50.752l56.384-56.384 46.144-46.144 0.096-0.096-0.416-0.416A253.984 253.984 0 0 1 256 480a256 256 0 0 1 512 0c0 49.28-14.048 95.2-38.208 134.208l-0.416 0.416 0.096 0.096 46.144 46.144L832 717.248V768H192z m320 128a64 64 0 0 1-64-64h128a64 64 0 0 1-64 64z m374.624-214.656l-79.072-79.04A317.088 317.088 0 0 0 832 480c0-165.664-126.528-302.272-288-318.368V96h-64v65.632C318.528 177.728 192 314.336 192 480c0 43.328 8.736 84.608 24.448 122.304l-79.072 79.04A32.032 32.032 0 0 0 128 704v128h256c0 70.592 57.408 128 128 128s128-57.408 128-128h256v-128c0-8.832-3.584-16.832-9.376-22.656z\" fill=\"#181818\" p-id=\"5687\"></path>\n  </svg>";
  return span;
}
