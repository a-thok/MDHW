import { $from, $parent } from 'func';

// 隐藏过滤
export default function hideFilter() {
  $from('.filter_content_btn').forEach((el) => {
    el.addEventListener('click', e => {
      $parent(e.target, '.filter_item').classList.remove('is-show');
      document.documentElement.classList.remove('is-static'); // 恢复body滚动
    });
  });
}
