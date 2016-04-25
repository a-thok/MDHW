import slider from 'slider';
import overflow from 'overflow';
import { $ } from 'func';

export default function detail() {
  slider(document.querySelector('.sliderBox'));
  overflow($('.tagList'));

  function showFilter(btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.currentTarget.children[0].classList.toggle('is-filter');
    });
    document.body.addEventListener('click', () => {
      btn.children[0].classList.remove('is-filter');
    });
  }
  showFilter($('.ftCtrl_item')[0]);
  showFilter($('.ftCtrl_item')[2]);
}
