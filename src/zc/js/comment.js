import { $, $parent, $cookie } from 'func';
import render from 'render';
import showMenu from 'showMenu';


export default function comment() {
  showMenu();
  function template(data) {
    return data.result.data.reduce((pre, cur) => {
      const child = cur.child.reduce((_pre, _cur) => (
        `${_pre}<li class="dialog_sublist_item">
          <div class="dialog_sublist_item_username">${_cur.user}</div>
          <div class="dialog_sublist_item_comment">
            <i class="dialog_sublist_item_arrow"></i>
            <p class="dialog_sublist_item_content">${_cur.comment}</p>
            <p class="dialog_list_item_info_time"><time>${_cur.date}</time></p>
          </div>
        </li>`
      ), '');
      return `${pre}<li class="dialog_list_item">
          <div class="dialog_list_item_user">
            <img class="dialog_list_item_user_avatar" src="#" alt="${cur.user}" />
            <span class="dialog_list_item_user_name">${cur.user}</span>
          </div>
          <p class="dialog_list_item_content">${cur.comment}</p>
          <div class="dialog_list_item_info">
            <time class="dialog_list_item_info_time"><i class="fa fa-clock-o"></i>${cur.date}</time>
            <button class="dialog_list_item_info_btn" type="button"><i class="fa fa-commenting-o"></i>回复</button>
          </div>
          <!--子评论 开始-->
          <ul class="dialog_sublist" ${child.length ? '' : 'style="visibility:hidden"'}>
            ${child.length ? `<li class="dialog_sublist_arrow"></li>${child}` : ''}
          </ul>
        </li>`;
    }, '');
  }
  let load = document.querySelector('.list_load');
  render({
    template,
    load,
    api: '/m/ZC/Comments',
    params: {
      fpid: 167,
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.dialog_list')
  });

  // 评论事件
  (function () {
    // 存放回复的用户名
    const replyName = $('.reply_box_name');
    // 输入框
    const replyInput = $('.replay_box_input');

    // 评论列表最外层元素
    const commentList = $('.dialog_list');
    let subCommentList;

    let replyComment;
    let subComment;
    let replyId;

    // 获取id
    commentList.addEventListener('click', (e) => {
      if (!e.target.classList.contains('dialog_list_item_info_btn')) return;
      if (e.target.classList.contains('sub')) {
        // 获取子评论id
        subComment = $parent(e.target, '.sub_item');
        replyId = subComment.getAttribute('code-id');
      } else {
        // 获取主评论id
        replyComment = $parent(e.target, '.dialog_list_item');
        replyId = replyComment.getAttribute('code-id');
      }

      // 获取回复的用户名
      const userName = replyComment.querySelector('.dialog_list_item_user_name').textContent;

      replyName.textContent = `@${userName}:`;
      replyName.classList.remove('is-hidden');
      replyInput.focus();
      replyInput.classList.add('is-focus');

      // 获取用户名存放标签的宽度
      let width = replyName.offsetWidth;
      replyInput.style.paddingLeft = `${14 + width}px`;
      replyInput.value = '';
    });

    // 发表评论
    $('.reply_btn').addEventListener('click', () => {
      if (replyInput.value === '') return;
      const isRootComment = replyName.classList.contains('is-hidden');

      //  构造新评论的信息
      const user = $cookie().name;
      const comment = replyInput.value;
      const dt = new Date();
      const date = dt.toISOString().slice(0, -5).replace(/T/, ' ');

      // 获取浏览框中的项目id
      let proPath = window.location.pathname;
      let array = proPath.split('/');
      if (isRootComment) {
        // 插入发布的新评论
        const html = template({ result: { data: [{ comment, date, user, child: [] }] } });
        commentList.insertAdjacentHTML('beforeEnd', html);

        // 页面滚动到新评论的位置
        document.body.scrollTop = commentList.lastElementChild.offsetTop;
      } else {
        // 插入回复的评论
        const html = `<li class="dialog_sublist_item sub_item">
          <div class="dialog_sublist_item_username">${user}</div>
          <div class="dialog_sublist_item_comment">
            <i class="dialog_sublist_item_arrow"></i>
            <p class="dialog_sublist_item_content">${comment}</p>
            <p class="dialog_list_item_info_time"><time class="sub_time">${date}</time><button class="dialog_list_item_info_btn sub" type="button">回复</button></p>
          </div>
        </li>`;

        subCommentList = replyComment.querySelector('.dialog_sublist');
        subCommentList.style.visibility = 'visible';
        subCommentList.insertAdjacentHTML('beforeEnd', html);

        // 页面滚动到新回复的位置
        document.body.scrollTop = replyComment.querySelector('.dialog_sublist').lastElementChild.offsetTop;
      }

      let params = {
        fpid: array[4].replace(/[?#].*/, ''),
        fid: isRootComment ? 0 : replyId,
        comment,
        type: 0
      };

      // 向后台请求数据后，清空输入框内容
      replyInput.value = '';

      fetch('/m/ZC/FbComments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'credentials': 'include'
        },
        body: JSON.stringify(params)
      })
        .then(res => res.json())
        .then(data => {
          // 判断是否有数据返回，并处理
          if (data.success) {
            (isRootComment ? commentList : subCommentList)
              .lastElementChild.setAttribute('code-id', data.result.id);
          } else {
            alert('对不起，评论发布失败!');
          }
        });
    });

    // 删除事件
    function keyDel() {
      if (replyName.classList.contains('is-hidden')) return;
      replyName.classList.add('is-hidden');
      $('#replay').style.paddingLeft = '14px';
    }
    $('#replay').addEventListener('keyup', e => {
      if (e.keyCode === 8) {
        keyDel();
      }
    });
  }());

  $('.replay_box_input').addEventListener('focus', () => {
    if (!$cookie().accountType) {
      location.href = `http://192.168.2.177:8085/m/main/denglu?redirectURL=${encodeURIComponent(location.href)}`;
    }
  });
}
