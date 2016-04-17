import slider from 'slider';
import { $ } from 'func';


export function index() {
  slider($('.sliderBox'));
}

export function scroll() {
  // 先复制一份需要滚动的html 代码
  let parent = $('.topLine_filterBox');
  parent.insertAdjacentHTML('beforeend', parent.innerHTML);

  let scrollBox = $('.topLine_filterBox_scroll');
  let margintop = scrollBox.style.marginTop;

  function time() {
    if (-margintop > scrollBox.clientHeight - 1) {
      margintop = 0;
    }
    margintop -= 1;
    scrollBox.style.marginTop = `${margintop}px`;
  }
  scrollBox.timer = setInterval(() => time(), 100);
}
