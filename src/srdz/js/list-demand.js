import { $from, $parent } from '../../common/js/func.js';
import { showFilter } from 'filter';

showFilter();
export function listfil() {
  $from('.filter_content_list').forEach(el => {
    el.addEventListener('click', e => {
      const cl = e.target.classList;
      if (cl.contains('filter_content_list_item-color')) return;
      if (cl.contains('filter_content_list_item')) {
        $from(e.target.parentElement.children).forEach(_e => {
          _e.classList.remove('filter_content_list_item-color');
          _e.children[0].classList.remove('item_iconShow');
        });
        cl.add('filter_content_list_item-color');
        e.target.children[0].classList.add('item_iconShow');
      }
    });
  });
}

export function listfil2() {
  $from('.filter_content_list_item').forEach(el => {
    el.addEventListener('click', e => {
      const text = e.target.textContent.trim();
      const parent = $parent(e.target, '.filter_item');
      parent.querySelector('.filter_active').textContent = text;
      // 隐藏当前过滤器
      parent.classList.remove('is-show');
      document.body.classList.remove('is-static'); // 恢复body滚动
    });
  });
}
