import { $, $from } from 'func';

export default function fast() {
  const btn = $('.message_btn');
  const modal = $('.modal');
  const input = $from('.message_input');
  const phone = $('.message_input-phone');
  const regNo = $('.message_input-regNo');
  const sellprice = $('.message_input-sellprice');
  input.forEach(e => {
    e.addEventListener('input', () => {
      if (phone.value !== '' && regNo.value !== '') {
        btn.classList.add('is-show');
      } else {
        btn.classList.remove('is-show');
      }
    });
  });
  btn.addEventListener('click', () => {
    // 向后台传入参数，发送请求
    fetch('/m/rshop/fast/fastadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        regNo: regNo.value,
        sellprice: sellprice.value,
        phone: phone.value
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          modal.classList.add('is-show');
          setTimeout(() => modal.classList.remove('is-show'), 2500);
        }
      });
  });
}
