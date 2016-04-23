import { $ } from 'func';

export default function assess() {
  const btn = $('.content_btn');
  const close = $('.fa-close');
  const dialogCl = $('.dialog').classList;
  const docCl = document.documentElement.classList;
  btn.addEventListener('click', () => {
    docCl.add('is-static');
    dialogCl.add('is-show');
  });

  close.addEventListener('click', () => {
    docCl.remove('is-static');
    dialogCl.remove('is-show');
  });

  const submit = $('.submit');
  const tipCl = $('.dialog_form_tip').classList;
  const form = $('.dialog_form');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const type = form.type.value;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const qq = form.qq.value.trim();
    if (!type || !name || !phone || !qq) {
      tipCl.add('is-show');
      return;
    }

    tipCl.remove('is_show');
    fetch('/m/KJ/AssessmentAdd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        phone,
        qq,
        type,
        city: ''
      })
    })
      .then(res => res.json())
      .then((res) => {
        if (res.success) {
          docCl.remove('is-static');
          dialogCl.remove('is-show');
          form.reset();
        } else {
          alert('服务器出错，发表失败!');
        }
      });
  });
}
