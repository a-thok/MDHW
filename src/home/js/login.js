import { $ } from 'func';
import { switchPassword, refrechCodeImg, dataBinding } from './form.js';

export default function login() {
  const data = {};

  switchPassword(data, 'pwd');
  const refresh = refrechCodeImg();
  dataBinding(data);

  const login = $('.login');
  login.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/m/main/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          alert('登录成功');
        } else {
          if (res.msg) {
            alert(res.msg);
          } else {
            alert('未知错误');
          }
          refresh();
        }
      });
  });
}
