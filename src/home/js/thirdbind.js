import { switchPassword, refrechCodeImg, dataBinding } from './form.js';
import { $, $from } from 'func';
import xhr from 'xhr';

export default function qqbind() {
  const data = {};
  const register = $('.register');
  const inputs = $from('input');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');

  switchPassword(data, 'pwd');
  dataBinding(data, register);
  const refresh = refrechCodeImg();

  function bing(e) {
    e.preventDefault();
    register.disabled = true;
    xhr('/m/third/relate/bind', data, (res) => {
      if (res.success) {
        location.href = `http://${MAIN_HOST}/m/main/denglu`;
      } else {
        const cl = $('.acc_group-verify').classList;
        if (!cl.contains('is-show')) {
          cl.add('is-show');
        }
        if (res.msg) {
          modalText.textContent = res.msg;
        } else {
          modalText.textContent = '未知错误，请稍候重试';
        }
        refresh();
        modal.classList.add('is-show');
      }
    });
  }

  register.addEventListener('click', bing);
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) bing(e);
    });
  });
}
