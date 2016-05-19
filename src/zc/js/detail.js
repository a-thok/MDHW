import { $, $parent, $cookie } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/zc/Collect/Add', '/m/zc/Collect/Del');
  share([$('.header_link')[1], $('.dtImg_btn')]);

  $('.ftCtrl_item')[2].addEventListener('click', (e) => {
    const id = location.pathname.replace(/.*\//, '');
    // const id = 139;  // 临时自定义的id
    if ($cookie().num && $cookie().num.indexOf(id) !== -1) return;
    // const starCl = e.currentTarget.querySelector('.fa').classList;
    // const unFav = starCl.contains('fa-star-o'); // 是否收藏

    // 向后台传入参数，发送请求
    fetch('/m/zc/Collect/Laud', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          document.cookie = `num=${$cookie().num ? $cookie().num : ''},${id}`;

          // 临时代码
          let target;
          if (e.target.nodeName === 'A') {
            target = e.target;
          } else {
            target = $parent(e.target, 'a');
          }
          const span = target.querySelector('span');

          const count = +span.textContent;
          span.textContent = count + 1;
          // starCl.toggle('fa-star-o');
        } else {
          alert('操作未成功，请稍后重试');
        }
      });
  });
}
