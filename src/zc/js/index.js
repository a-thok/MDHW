import { $, $parent, $from, $cookie } from 'func';

export default function index() {
  // 点赞
  $('.zcList').addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-thumbs-o-up')) {
      const item = $parent(e.target, '.zcList_item');
      const id = item.getAttribute('data-id');
      const num = $cookie().num;
      if (num && num.split(',').indexOf(id) !== -1) return;
      e.target.classList.add('cgColor');
      document.cookie = `num=${num ? $cookie().num : ''},${id}`;
    }
  });

  // 循环列表中的每个li
  $from('.zcList_item').forEach((el) => {
    const id = el.getAttribute('data-id');
    if (!$cookie().num) return;
    const ids = $cookie().num.split(',');
    const icon = el.querySelector('.fa-thumbs-o-up');
    if (ids.indexOf(id) !== -1) {
      icon.classList.add('cgColor');
    }
  });
}
