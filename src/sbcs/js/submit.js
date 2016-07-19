import { $ } from 'func';

export default function submit() {
  // const fpid = $cookie().submitId;
  const fpid = 2;
  const submitBtn = $('.submitBtn');
  const textReply = $('.textarea');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  submitBtn.addEventListener('click', () => {
    // 获取评论内容给后台
    fetch('/m/RShop/Comment/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        fpid,
        fid: 0,
        comment: textReply.value,
        img: '',
        type: 0
      })
    })
      .then(res => res.json())
      .then((res) => {
        if (res.success) {
          modalText.textContent = '恭喜您，提交成功!';
          setTimeout(() => { location.href = `http://${SBCS_HOST}/m/home/require/${fpid}`; }, 2510);
        } else {
          modalText.textContent = res.msg;
        }
        modal.classList.add('is-show');
        setTimeout(() => modal.classList.remove('is-show'), 2500);
      });
  });
}
