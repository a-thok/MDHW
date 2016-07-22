import { refrechCodeImg } from './refrechCodeImg';
import { $ } from 'func';
import { showFilter } from 'filter';

export default function copyright() {
  // 点击切换验证码
  const refresh = refrechCodeImg();
  refresh();
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
  // 提交
  const submitBtn = $('.submit_btn');
  const name = $('.apply_info_input-name');
  const industry = $('.apply_info_input-industry');
  const Contacts = $('.apply_info_input-Contacts');
  const qq = $('.apply_info_input-qq');
  const verify = $('.apply_info_input-verify');
  submitBtn.addEventListener('click', () => {
    if (phone.value.length <= 0) {
      modalText.textContent = '电话号码不能为空！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    } else {
      fetch('/m/Cqbh/Copyright/Add', {
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
  // 过滤
  showFilter();
}
