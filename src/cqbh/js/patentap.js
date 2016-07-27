import { showFilter } from 'filter';
import { select } from './select';
import { $ } from 'func';
import { refrechCodeImg } from './refrechCodeImg';

export default function patentap() {
  // 过滤
  showFilter();
  // 类型选择
  select();

  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  // 电话号码规则验证
  const phone = $('.apply_info_input-phone');
  phone.addEventListener('change', () => {
    if (!(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(phone.value))) {
      modalText.textContent = '请填写正确的电话号码！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    }
  });
  // 点击切换验证码
  const refresh = refrechCodeImg();
  refresh();

  // 提交
  const submitBtn = $('.submit_btn');
  const name = $('.apply_info_input-name'); // 专利名称
  const Contacts = $('.apply_info_input-Contacts'); // 联系人
  const qq = $('.apply_info_input-qq'); // QQ
  const verify = $('.apply_info_input-verify'); // 验证码
  const list = $('.filter_content_list');

  submitBtn.addEventListener('click', () => {
    const type = list.querySelector('.is-active').getAttribute('data-code'); // 专利类型

    if ((name.value.length <= 0) || (phone.value.length <= 0)) {
      modalText.textContent = '专利名称或电话号码不能为空！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    } else {
      fetch('/m/Cqbh/Patent/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          type,
          name: name.value,
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
