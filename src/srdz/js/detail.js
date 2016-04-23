import { $, $from } from '../../common/js/func.js';
import slider from 'slider';
import share from 'share';
import favorite from 'favorite';

//  切换显示
export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/srdz/Collect/Add', '/m/srdz/Collect/Del');
  share($('.ftCtrl_item')[2]);

  slider(document.querySelector('.sliderBox'));

  // 详情显示切换
  const ul = $('.userInput');
  const items = $('.intro_list_item');
  $from(items).forEach((el, i) => {
    el.addEventListener('click', (e) => {
      const another = i === 0 ? 1 : 0;
      // 清除另一项
      items[another].classList.remove('is-active');
      ul.children[another].classList.remove('is-show');
      // 选中当前项
      e.currentTarget.classList.add('is-active');
      ul.children[i].classList.add('is-show');
    });
  });
}
