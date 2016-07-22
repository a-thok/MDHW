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
  const phone = $('.apply_info_input-number');
  phone.addEventListener('change', () => {
    if (!(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(phone.value))) {
      modalText.textContent = '请填写正确的电话号码！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    }
  });
  // 点击切换验证码
  const refresh = function refrechCodeImg() {
    const codeImg = $('.codeImg');
    const refresh = function (img) {
      const code = Math.random();
      img.src = `/m/Cqbh/Apply/VerifyCode?_=${code}`;
    };
    codeImg.addEventListener('click', e => refresh(e.target));
    return function () {
      refresh(codeImg);
    };
  };
  refresh();
  // 提交
  const submitBtn = $('.submit_btn');
  const name = $('.apply_info_input-name');
  const industry = $('.apply_info_input-industry');
  const Contacts = $('.apply_info_input-Contacts');
  const qq = $('.apply_info_input-qq');
  const verify = $('.apply_info_input-verify');
  submitBtn.addEventListener('click', () => {
    console.log(phone.value.length);
    console.log(name.value.length);
    if ((name.value.length <= 0) || (phone.value.length <= 0)) {
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
        body: JSON.stringify({
          name: name.value,
          industry: industry.value,
          Contacts: Contacts.value,
          phone: phone.value,
          qq: qq.value,
          verify: verify.value
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            modalText.textContent = '恭喜您，您已提交成功！';
            modal.classList.add('is-show');
            setTimeout(() => modal.classList.remove('is-show'), 2500);
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
  });
}
