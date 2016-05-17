import { $, $from } from '../../common/js/func.js';

export default function proDetail() {
    // 详情显示切换
  const ul = $('.userInput');
  const items = $('.dtCont_list_item');
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
