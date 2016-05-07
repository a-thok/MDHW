import { $ } from 'func';
import xhr from 'xhr';
import { refrechCodeImg, dataBinding } from './form.js';

export default function forgetpwd() {
  let data = {};
  let type = { type: 2 };
  data = Object.assign(data, type);
  const login = $('.login');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  const email = $('.acc_func').querySelector('.email');
  const name = $('.name');
  const refresh = refrechCodeImg();
  name.addEventListener('click', () => {
    if (name.value === localStorage.getItem('name')) {
      alert('您的操作太过频繁，稍后重试！');
    }
  });
  // 通过邮箱验证
  email.addEventListener('click', () => {
    type = { type: 1 };
    name.setAttribute('placeholder', '请输入邮箱/以验证手机');
    name.value = '';
    $('.verify').value = '';
    data = Object.assign(data, type);
    refresh();
  });

  dataBinding(data, login);

  function doLogin(e) {
    e.preventDefault();
    login.disabled = true;

    xhr('/m/Pwd/ForgetVerify', data, (res) => {
      if (res.success) {
        localStorage.setItem('name', res.result.name);
        localStorage.setItem('phone', res.result.phone);
        localStorage.setItem('type', res.result.type);
        location.href = `http://${MAIN_HOST}/m/home/forgetchange`;
      } else {
        if (res.msg) {
          modalText.textContent = res.msg;
        } else {
          modalText.textContent = '未知错误，请稍候重试';
        }
        refresh();
        modal.classList.add('is-show');
        setTimeout(() => modal.classList.remove('is-show'), 2500);
      }
    });
  }

  login.addEventListener('click', doLogin);
}
