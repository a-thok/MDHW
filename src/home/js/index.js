import slider from 'slider';
// import { $ } from 'func';


export function index() {
  slider(document.querySelector('.sliderBox'));
}

export function scroll() {
  let scrollBox = document.querySelector('.topLine_filterBox_scroll');
  let margintop = scrollBox.style.marginTop;
  function time() {
    if (-margintop > scrollBox.clientHeight - 6) {
      margintop = 0;
    }
    margintop -= 1;
    scrollBox.style.marginTop = `${margintop}px`;
  }
  scrollBox.timer = setInterval(() => time(), 100);
}
