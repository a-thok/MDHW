import { $, $from } from 'func';

export default function apply() {
  // const navList = $('.apply_navList');
  // navList.addEventListener('click', (e) => {
  //   const items = navList.querySelectorAll('.apply_navList_item');
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].classList.remove('is-active');
  //   }
  //   e.target.classList.add('is-active');
  // });
  const navListItems = $from('.apply_navList_item');
  navListItems.forEach((e) => {
    e.addEventListener('click', (el) => {
      for (let i = 0; i < navListItems.length; i++) {
        navListItems[i].classList.remove('is-active');
      }
      el.target.classList.add('is-active');
    });
  });
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  // 电话号码规则验证
  const tel = $('.apply_info_input-number');
  tel.addEventListener('change', () => {
    if (!(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(tel.value))) {
      modalText.textContent = '请填写正确的电话号码！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    }
  });
  // 提交
  const submitBtn = $('.submit_btn');
  const name = $('.apply_info_input-name');
  submitBtn.addEventListener('click', () => {
    console.log(tel.value.length);
    console.log(name.value.length);
    if ((name.value.length <= 0) || (tel.value.length <= 0)) {
      modalText.textContent = '商业名称或电话号码不能为空！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    } else {
      fetch('/m/Cqbh/Apply/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            modal.classList.add('is-show');
            setTimeout(() => modal.classList.remove('is-show'), 2500);
          }
        });
    }
  });
  // 点击切换验证码
  const codeImg = $('.codeImg');
  const refresh = function (img) {
    const code = Math.random();
    img.src = `/m/main/VerifyCode?_=${code}`;
  };
  codeImg.addEventListener('click', e => refresh(e.target));
  return function () {
    refresh(codeImg);
  };
}
