import slider from 'slider';
import overflow from 'overflow';
import { $ } from 'func';

export default function detail() {
  slider(document.querySelector('.sliderBox'));
  overflow($('.tagList'));
}
