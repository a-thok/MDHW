import { $, $from } from 'func';

export default function assess() {
  let btn = $('.content_btn');
  let close = $('.fa-close');
  let text = $('.popWrap');
  btn.addEventListener('click', () => {
    text.classList.remove('is-hidden');
  });
  close.addEventListener('click', () => {
    text.classList.add('is-hidden');
  });

  let type = 1;
  const list = $('.pop_list');
  list.addEventListener('click', e => {
    if (e.target.classList.contains('pop_list_item')) {
      if (e.target.classList.contains('is-active')) return;
      $from(list.children).forEach((item, i, arr) => {
        if (arr.indexOf(e.target) === i) {
          item.classList.add('is-active');
          type = i + 1;
        } else {
          item.classList.remove('is-active');
        }
      });
    }
  });
  let pginput = $('.pop_form_input');
  let tjbtn = $('.submit_btn');
  let isShow = $('.text');
  tjbtn.addEventListener('click', () => {
    let qq = pginput[0].value.trim();
    let phone = pginput[1].value.trim();
    let name = pginput[2].value.trim();
    if (qq && phone && name) {
      isShow.classList.remove('is_show');
      fetch('/m/KJ/AssessmentAdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          qq,
          type,
          city: ''
        })
      })
        .then(res => res.json())
        .then((data) => {
          if (data.success) {
            text.classList.add('is-hidden');
          } else {
            alert('服务器出错，发表失败!');
          }
        });
    } else {
      isShow.classList.add('is_show');
    }
  });
}
