import { $, $from } from '../../common/js/func.js';
// import slider from 'slider';
import share from 'share';
import favorite from 'favorite';

//  切换显示
export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/srdz/Collect/Add', '/m/srdz/Collect/Del');
  share($('.ftCtrl_item')[2]);

  const params = { body: {} };

  // slider(document.querySelector('.sliderBox'));
  // 选择颜色
  const models = $from('.model');
  models.forEach((e) => {
    e.addEventListener('click', e => {
      const type = e.target.getAttribute('data-code');
      const name = e.currentTarget.querySelector('.modelTitle').getAttribute('data-name');
      if (e.target.classList.contains('modelList_item')) {
        $from(e.target.parentElement.children).forEach((e) => {
          e.classList.remove('modelList_item-sk');
        });
        e.target.classList.add('modelList_item-sk');
      }
      params.body[name] = type;
    });
  });

  // 选择数量
  const labels = $from('.number_choose label');
  let amount = $('.number_choose input');
  let stock = +($('.stock').textContent);
  labels.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (i === 0) {
        if (+(amount.value) <= 1) return;
        amount.value -= 1;
      } else {
        if (+(amount.value) >= stock) return;
        amount.value = +(amount.value) + 1;
      }
      params.count = amount.value;
    });
  });

  // 详情显示切换
  const ul = $('.userInput');
  const items = $('.intro_list_item');
  $from(items).forEach((el, i) => {
    el.addEventListener('click', (e) => {
      const another = i === 0 ? 1 : 0;
      // 清除另一项
      items[another].classList.remove('is-active');
      ul.children[another].classList.remove('is-show');
      // 选中当前项
      e.currentTarget.classList.add('is-active');
      ul.children[i].classList.add('is-show');
    });
  });

  // 立即定制
  const btn = $('.ftCtrl_item_btn');
  btn.addEventListener('click', () => {
    const arr = location.pathname.split('/');
    const productid = arr[arr.length - 1];
    fetch('/m/sys/srdz/Shopcart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(Object.assign({ productid }, params))
    })
      .then(res => res.json())
      .then(res => {
        document.cookie = `cartID=${res.result};path=/;domain=dreamhiway.com`;
        location.href = `http://${MAIN_HOST}/m/user#/srdz/order`;
      });
  });
}
