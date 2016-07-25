import { showFilter } from 'filter';
import { $, $from, $parent } from 'func';

export default function fbqg() {
  // 过滤
  showFilter();
  let pcode;
  let type;
  let time;

  const list = $from('.filter_content_list');
  list.forEach(f => {
    f.addEventListener('click', (e) => {
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
          const obj = $parent(e.target, '.filter_content_list');
          if (obj.classList.contains('filter_content_list-pcode')) {
            pcode = (pcode || '') + e.target.getAttribute('data-code'); // 获取分类
          } else if (obj.classList.contains('filter_content_list-type')) {
            type = e.target.getAttribute('data-code'); // 获取类型
          } else if (obj.classList.contains('filter_content_list-time')) {
            time = e.target.getAttribute('data-code'); // 获取注册年限
          }
        }

        wrapper.querySelector('.filter_active').textContent = text;
        // 隐藏当前过滤器
        wrapper.classList.remove('is-show');
        document.documentElement.classList.remove('is-static'); // 恢复body滚动
      }
    });
  });

  // 多选按钮
  $('.select_more').addEventListener('click', () => {
    if ($('.sort_more-second').classList.contains('is-hidden')) {
      $('.sort_more-second').classList.remove('is-hidden'); // 显示分类块
    } else if ($('.sort_more-third').classList.contains('is-hidden')) {
      $('.sort_more-third').classList.remove('is-hidden'); // 显示分类块
    } else {
      alert('最多只能选择三种分类！');
    }
  });

  // 价格条件
  const price = $('.formCont_input-price');
  price.addEventListener('input', () => {
    if (price.value < 0) {
      price.value = 1;
    }
  });

  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');
  // 电话号码规则验证
  const phone = $('.formCont_input-phone');
  phone.addEventListener('change', () => {
    if (!(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|01[0])[0-9]{8}$/.test(phone.value))) {
      modalText.textContent = '请填写正确的电话号码！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    }
  });

  // 发布
  const title = $('.formCont_input-title');
  const product = $('.formCont_input-product');
  const qq = $('.formCont_input-qq');
  const remark = $('.formCont_text');
  const btn = $('.fabu_btn');

  btn.addEventListener('click', () => {
    const yes = title.value === '' || remark.value === '' || phone.value === '' || qq.value === '';
    if (yes) {
      modalText.textContent = '请填写完整再发布！';
      modal.classList.add('is-show');
      setTimeout(() => modal.classList.remove('is-show'), 2500);
    } else {
      fetch('/m/RShop/Demand/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          pcode,
          type,
          time,
          title: title.value,
          price: price.value,
          product: product.value,
          phone: phone.value,
          qq: qq.value,
          remark: remark.value
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            modalText.textContent = '商标求购发布成功！';
            modal.classList.add('is-show');
            setTimeout(() => modal.classList.remove('is-show'), 2500);
          } else {
            if (res.msg) {
              modalText.textContent = res.msg;
            } else {
              modalText.textContent = '未知错误，请稍候重试';
            }
            modal.classList.add('is-show');
            setTimeout(() => modal.classList.remove('is-show'), 2500);
          }
        });
    }
  });
}
