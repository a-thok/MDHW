import { $, $from, $parent, $cookie } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function require() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/RShop/Collect/DemandAdd', '/m/RShop/Collect/DemandDel');
  share($('.ftCtrl_item')[2]);

  const arr = location.pathname.split('/');
  const id = arr[arr.length - 1];
  // const id = 2;
  const text = $('.buyDetails_msg_text');
  fetch('/m/RShop/Demand/DemandPv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ id })
  })
    .then(res => res.json())
    .then((res) => {
      if (res.success) {
        text.textContent = +text.textContent + 1;
      }
    });
  let replyComment;
  // 回复-弹出弹窗
  const popup = $('.pupop_bg');
  const replays = $from('.answerList_item_contentMsg_reply');
  replays.forEach((el) => {
    el.addEventListener('click', () => {
      popup.classList.add('is-show');
      replyComment = $parent(el, '.answerList_item');
    });
  });
  // 回复-关闭弹窗
  $('.close_pupop').addEventListener('click', () => {
    popup.classList.remove('is-show');
  });
  // 确认回复
  const user = $cookie().name;
  const replyBtn = $('.shopping_OK');
  const textReply = $('.textarea');
  replyBtn.addEventListener('click', () => {
    popup.classList.remove('is-show');
    // 插入回复的评论
    const html = `<li class="replyList_item">
                <span class="replyList_item_user">${user}：</span>
                <span class="replyList_item_text">${textReply.value}</span>
              </li>`;
    const subCommentList = replyComment.querySelector('.replyList');
    subCommentList.insertAdjacentHTML('beforeEnd', html);
    // 获取评论内容给后台
    fetch('/m/RShop/Comment/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        fpid: id,
        fid: replyComment.getAttribute('data-code'),
        comment: textReply.value,
        type: 0
      })
    })
      .then(res => res.json())
      .then((res) => {
        if (res.success) {
          console.log(+text.textContent);
          text.textContent = +text.textContent + 1;
        }
      });
  });
  //  判断收藏
  function name() {
    const yes = $('.sbcs_footer_icon .fa-star-o');
    const footerText = $('.sbcs_footer_icon-text');
    if (yes.length === 0) {
      footerText.innerHTML = '已收藏';
    } else {
      footerText.innerHTML = '收藏';
    }
  }
  window.setInterval(name, 500);
}
