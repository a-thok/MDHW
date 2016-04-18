import slider from 'slider';
// import { $ } from 'func';


export function index() {
  slider(document.querySelector('.sliderBox'));
}

export function scroll() {
  let filterBox = document.querySelector('.topLine_filterBox');
  let scrollBox = document.querySelector('.topLine_filterBox_scroll');
  let margintop = scrollBox.style.marginTop;
  filterBox.insertAdjacentHTML('beforeend', filterBox.innerHTML);
  function time() {
    if (-margintop > scrollBox.clientHeight - 1) {
      margintop = 0;
    }
    margintop -= 1;
    scrollBox.style.marginTop = `${margintop}px`;
  }
  scrollBox.timer = setInterval(() => time(), 100);
}
