import { $, $from } from '../../common/js/func.js';
import slider from 'slider';
//  切换显示
export default function fwdetail() {
  slider(document.querySelector('.sliderBox'));
  $from('.intro_list_item').forEach((el, index) => {
    const ul = $('.userInput');
    el.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('intro_list_item-color')) return;
      $from(e.currentTarget.parentElement.children).forEach((_e, _index) => {
        _e.classList.remove('intro_list_item-color');
        ul.children[_index].classList.remove('userInput_show');
      });
      e.currentTarget.classList.add('intro_list_item-color');
      ul.children[index].classList.add('userInput_show');
    });
  });
}
