import { $, $from } from 'func';
import { switchPassword, refrechCodeImg, dataBinding } from './form.js';

export default function login() {
  const data = {};
  const login = $('.login');
  const inputs = $from('input');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');

  switchPassword(data, 'pwd');
  const refresh = refrechCodeImg();
  dataBinding(data, login);

  function doLogin(e) {
    e.preventDefault();
    login.disabled = true;

    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       const res = JSON.parse(xhr.response);
    //       if (res.success) {
    //         let locationSrch = location.search;
    //         let urlEndPoint = locationSrch.indexOf('&');
    //         let url = locationSrch.slice(13, locationSrch.length - urlEndPoint);
    //         // console.log(decodeURIComponent(url));
    //         location.href = decodeURIComponent(url);
    //       } else {
    //         if (res.msg) {
    //           modalText.textContent = res.msg;
    //         } else {
    //           modalText.textContent = '未知错误，请稍候重试';
    //         }
    //         refresh();
    //         modal.classList.add('is-show');
    //         setTimeout(() => modal.classList.remove('is-show'), 2500);
    //       }
    //     }
    //   }
    // };

    // xhr.open('POST', '/m/main/Login', true);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify(data));

    fetch('/m/main/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'credentials': 'include'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          let locationSrch = location.search;
          let urlEndPoint = locationSrch.indexOf('&');
          let url = locationSrch.slice(13, locationSrch.length - urlEndPoint);
          // console.log(decodeURIComponent(url));
          location.href = decodeURIComponent(url);
          // alert('登录成功');
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
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) doLogin(e);
    });
  });
}
