import * as SvgsColors1 from '../../components/colors1/index.js';
import * as SvgsColors2 from '../../components/colors2/index.js';
import * as SvgsBlack1 from '../../components/black1/index.js';

// 图标item容器
function iconItemWrapper (el, title) {
  const div = document.createElement('div');
  div.className = 'icon-wrapper';
  div.title = title.split(' ')[1];
  div.append(el);
  return div;
}

// 渲染图标
function renderSvgIcon (Svgs, container) {
  let frag = document.createDocumentFragment();
  for (let i in Svgs) {
    const el = Svgs[i]();
    frag.append(iconItemWrapper(el, el.className));
    if (frag.childElementCount % 20 === 0) {
      appendToContainer();
      frag = document.createDocumentFragment();
    }
  }
  appendToContainer();

  function appendToContainer () {
    container.append(frag);
  }
}

const container1 = document.querySelector('.icon-container.item1');
const container2 = document.querySelector('.icon-container.item2');
const container3 = document.querySelector('.icon-container.item3');
renderSvgIcon(SvgsColors1, container1);
renderSvgIcon(SvgsColors2, container2);
renderSvgIcon(SvgsBlack1, container3);

export default renderSvgIcon;
