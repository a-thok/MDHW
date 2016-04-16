import slider from 'slider';
import showMenu from 'showMenu';
import { $ } from 'func';

export default function detail() {
  showMenu();
  slider(document.querySelector('.sliderBox'));
  const slither = $('.tagList-zckj');
  const textWidth = slither.scrollWidth;
  const viewWidth = slither.offsetWidth;
  console.log(textWidth);
  console.log(viewWidth);
  if (textWidth > viewWidth) {
    console.log(1);
    slither.classList.add('slither');
  }
}
