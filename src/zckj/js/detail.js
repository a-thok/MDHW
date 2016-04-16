import slider from 'slider';
import showMenu from 'showMenu';
import overflow from 'overflow';
import { $ } from 'func';

export default function detail() {
  showMenu();
  slider(document.querySelector('.sliderBox'));
  overflow($('.tagList'));
}
