import { $, $from } from 'func';
import xhr from 'xhr';
import { switchPassword, refrechCodeImg, dataBinding } from './form.js';

export default function register() {
  const data = {};
  const register = $('.register');
  const inputs = $from('input');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');

  switchPassword(data, 'pwd');
  const refresh = refrechCodeImg();
  dataBinding(data, register);

  function doReg(e) {
    e.preventDefault();
    register.disabled = true;

    xhr('/m/Main/RegPhone', data, (res) => {
      if (res.success) {
        // location.href = decodeURIComponent(url);
        alert('成功');
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

    // fetch('/m/Main/RegPhone', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'credentials': 'include'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json)
    //   .then(res => {
    //     if (res.success) {
    //       // let locationSrch = location.search;
    //       // let urlEndPoint = locationSrch.indexOf('&');
    //       // let url = locationSrch.slice(13, locationSrch.length - urlEndPoint);
    //       // // console.log(decodeURIComponent(url));
    //       // location.href = decodeURIComponent(url);
    //       alert('注册成功跳到某个页面');
    //     } else {
    //       if (res.msg) {
    //         modalText.textContent = res.msg;
    //       } else {
    //         modalText.textContent = '未知错误，请稍候重试';
    //       }
    //       refresh();
    //       modal.classList.add('is-show');
    //       setTimeout(() => modal.classList.remove('is-show'), 2500);
    //     }
    //   });
  }

  register.addEventListener('click', doReg);
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) doReg(e);
    });
  });

  // 输入框聚焦时弹出正则提示
  // const inputWithTips = $from('input');
  // inputWithTips.forEach((input) => {
  //   input.addEventListener('focus', (e) => {
  //     $from('.acc_tip').forEach((item) => {
  //       item.classList.add('is-hidden');
  //     });
  //     let pop = e.target.previousElementSibling;
  //     if (!pop) return;
  //     pop.classList.remove('is-hidden');
  //   });
  // });

  // 修改'm/main/Reg/Check'与phone: phone.value
  const phone = $('input[name=phone]');
  const acctipText = $('.acc_tip_content_text');
  const tip = $('.acc_tip ');
  const name = () => {
    if (/^1\d{10}$/.test(phone.value)) {
      fetch('/Reg/Check', {
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
