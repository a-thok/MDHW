import { $cookie } from 'func';

export default function favorite(btn, prop, addApi, delApi) {
  btn.addEventListener('click', (e) => {
    const starCl = e.currentTarget.querySelector('.fa').classList;

    if (!$cookie().accountType) {
      // 如果未登录，转跳登录页
      location.href = `http://${MAIN_HOST}/m/main/denglu?redirectURL=${encodeURIComponent(location.href)}`;
    } else {
      const id = location.pathname.replace(/.*\//, '');
      // const fpid = 55;  // 临时自定义的id
      const unFav = starCl.contains('fa-star-o'); // 是否收藏
      const api = unFav ? addApi : delApi;// 判断接口类型

      // 向后台传入参数，发送请求
      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ [prop]: id })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            const span = e.target.querySelector('span');
            if (span) {
              let count = +span.textContent;
              span.textContent = unFav ? count + 1 : count - 1;
            }
            starCl.toggle('fa-star-o');
          } else {
            alert('操作未成功，请稍后重试');
          }
        });
    }
  });
}
