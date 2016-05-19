import { $ } from 'func';
import xhr from 'xhr';
import { switchPassword, dataBinding } from './form.js';

export default function forgetchange() {
  let data = {};
  const login = $('.login');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  const rebtn = $('.acc_p_resend');
  const time = rebtn.querySelector('.codeTime');
  const phone = $('.phone');
  const username = $('.username');

// 显示验证手机号
  phone.textContent = localStorage.getItem('phone');
  username.textContent = localStorage.getItem('name');
  const keyword = localStorage.getItem('name');
  const type = localStorage.getItem('type');
  data = Object.assign(data, { keyword }, { type });
// 验证重新发送
  let num = 100;
  function count() {
    num--;
    time.textContent = num;
    if (num === 0) {
      rebtn.innerHTML = '发送';
      rebtn.classList.add('is-btn');
    }
    setTimeout(count, 1000);
  }
  setTimeout(count, 1000);

  switchPassword(data, 'pwd');
  dataBinding(data, login);

  function doLogin(e) {
    e.preventDefault();
    login.disabled = true;

    xhr('/m/Pwd/ForgetRest', data, (res) => {
      if (res.success) {
        location.href = `http://${MAIN_HOST}/m/main/denglu`;
      } else {
        if (res.msg) {
          modalText.textContent = res.msg;
        } else {
          modalText.textContent = '未知错误，请稍候重试';
        }
        modal.classList.add('is-show');
        setTimeout(() => modal.classList.remove('is-show'), 2500);
      }
    });
  }

  login.addEventListener('click', doLogin);
}
