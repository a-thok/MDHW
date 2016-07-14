import { $, $from, $parent } from 'func';
import { showFilter } from 'filter';

export default function fast() {
  let pcode;
  $('.filter_content_list').addEventListener('click', e => {
    const cl = e.target.classList;
    if (cl.contains('is-active')) return;
    if ((e.target !== e.currentTarget) || cl.contains('grid_item_icon')) {
      const wrapper = $parent(e.target, '.filter_item');

      // 选中项视觉效果
      const items = cl.contains('grid_item_icon') ? $from('.grid_item_icon') : $from(e.currentTarget.children);
      items.forEach(_e => _e.classList.remove('is-active'));

      let text; // 填充文本
      if (cl.contains('filter_content_list_item')) {
        cl.add('is-active');
        text = e.target.textContent.trim();
        pcode = e.target.getAttribute('data-code');
      }
      wrapper.querySelector('.filter_active').textContent = text;
      // 隐藏当前过滤器
      wrapper.classList.remove('is-show');
      document.documentElement.classList.remove('is-static'); // 恢复body滚动
    }
  });
  const btn = $('.message_btn');
  const modal = $('.modal');
  const input = $from('.message_input');
  const phone = $('.message_input-phone');
  const sellprice = $('.message_input-sellprice');
  input.forEach(e => {
    e.addEventListener('input', () => {
      // 希望价格条件
      if (sellprice.value < 0) {
        sellprice.value = 1;
      }
      if (/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(phone.value)) {
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
        pcode,
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
  // 过滤
  showFilter();
}
