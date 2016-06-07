import { $, $from } from 'func';
import xhr from 'xhr';
import { switchPassword, dataBinding } from './form.js';

export default function qqregister() {
  const data = {};
  const register = $('.register');
  const inputs = $from('input');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');

  switchPassword(data, 'pwd');
  dataBinding(data, register);

  function doReg(e) {
    e.preventDefault();
    register.disabled = true;

    xhr('/m/third/relate/regphone', data, (res) => {
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

  register.addEventListener('click', doReg);
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) doReg(e);
    });
  });

  // 修改'm/main/Reg/Check'与phone: phone.value
  const phone = $('input[name=phone]');
  const acctipText = $('.acc_tip_content_text');
  const tip = $('.acc_tip ');
  const name = () => {
    if (/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(phone.value)) {
      fetch('/m/reg/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyword: phone.value })
      })
        .then(res => res.json())
        .then(res => {
          if (!res.result) {
            acctipText.textContent = '此号码已被注册';
            tip.classList.remove('is-hidden');
          }
        });
    } else {
      acctipText.textContent = '请输入正确的手机号码';
      tip.classList.remove('is-hidden');
    }
  };

  // 失去焦点时移除错误提示
  phone.addEventListener('blur', () => {
    tip.classList.add('is-hidden');
  });

  // 验证手机号是否注册号
  phone.addEventListener('input', () => {
    clearTimeout(window.timer);
    tip.classList.add('is-hidden');
    window.timer = setTimeout(name, 600);
  });
}

