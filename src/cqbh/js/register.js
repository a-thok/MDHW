import { $ } from 'func';

export default function register() {
  const btn = $('.srch_btn_register');
  const close = $('.fa-close');
  const dialogCl = $('.dialog').classList;
  const docCl = $('.dialogReg').classList;
  btn.addEventListener('click', () => {
    console.log(docCl);
    docCl.add('is-show');
    dialogCl.add('is-show');
  });

  close.addEventListener('click', () => {
    docCl.remove('is-show');
    dialogCl.remove('is-show');
  });

  const submit = $('.submit');
  const form = $('.dialog_form');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const Contacts = form.Contacts.value.trim();
    const phone = form.phone.value.trim();
    const name = form.name.value.trim();
    const modal = $('.modal');
    const modalText = modal.querySelector('.modal_content_text');
    if (!Contacts || !phone || !name) {
      modalText.textContent = '输入信息不能为空，请重新输入';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
      return;
    }
    // 电话号码规则验证
    if (!(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(phone))) {
      modalText.textContent = '请填写正确的电话号码！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
      return;
    }

    fetch('/m/Cqbh/Copyright/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        Contacts,
        phone,
        name
      })
    })
      .then(res => res.json())
      .then((res) => {
        if (res.success) {
          docCl.remove('is-show');
          dialogCl.remove('is-show');
          form.reset();
          modalText.textContent = '恭喜您，您已提交成功,请耐心等待查询结果！';
          modal.classList.add('is-show');
          setTimeout(() => modal.classList.remove('is-show'), 2500);
        } else {
          modalText.textContent = '服务器出错，提交失败，请稍候重试!';
          modal.classList.add('is-show');
          setTimeout(() => modal.classList.remove('is-show'), 2500);
        }
      });
  });
}
