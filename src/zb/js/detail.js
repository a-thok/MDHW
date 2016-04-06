import { $, $cookie } from 'func';

export default function detail() {
  const likebtn = $('.ftCtrl_item')[0];
  const share = $('.ftCtrl_item')[2];
  let text = $('.sliderShare');

  likebtn.addEventListener('click', e => {
    const star = e.currentTarget.children[0];

    // 用cookie中的字段判断用户是否登录
    if (!$cookie().accountType) {
      alert('请先登录!');
    } else {
      const id = 55; // 临时代码，自定义的id
      const unlike = star.classList.contains('fa-star-o');
      let api;
      let operation;
      if (unlike) {
        api = '/m/ZB/ZbCollect';
        operation = +1;
      } else {
        api = '/m/Main/ZbScDel';
        operation = -1;
      }

      // 向后台传入参数，发送请求
      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      })
        // 请求通过，执行操作
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            let count = parseInt(likebtn.children[2].textContent, 10);
            count += operation;
            likebtn.children[2].textContent = count;
            star.classList.toggle('fa-star-o');
          } else {
            alert('未知原因导致出错');
          }
        });
    }
  });
  let cancel = $('.sliderShare_box_cancel');
  let sure = $('.sliderShare_box_sure');
  share.addEventListener('click', () => {
    text.style.display = 'block';
  });
  cancel.addEventListener('click', () => {
    text.style.display = 'none';
  });
  sure.addEventListener('click', () => {
    text.style.display = 'none';
    alert('分享成功！');
  });
}
