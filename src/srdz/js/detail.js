import { $, $from } from '../../common/js/func.js';
// import slider from 'slider';
import share from 'share';
import favorite from 'favorite';

//  切换显示
export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/srdz/Collect/Add', '/m/srdz/Collect/Del');
  share($('.ftCtrl_item')[2]);

  // slider(document.querySelector('.sliderBox'));
  // 选择颜色
  const modelListItems = $('.modelList_item');
  const checks = $from('.modelList_item_div');
  let code;
  $from(modelListItems).forEach((el, i, arr) => {
    el.addEventListener('click', () => {
      arr.forEach((e) => {
        e.classList.remove('modelList_item-sk');
      });
      checks.forEach((e) => {
        e.classList.remove('modelList_item_div-block');
      });
      modelListItems[i].classList.add('modelList_item-sk');
      checks[i].classList.add('modelList_item_div-block');
      code = modelListItems[i].getAttribute('data-code');
    });
  });
  // 选择数量
  const labels = $from('.number_choose label');
  let number = $('.number_choose input');
  labels.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (i === 0) {
        if (+(number.value) === 1) return;
        number.value = number.value - 1;
      } else {
        if (+(number.value) === 5) return;
        number.value = +(number.value) + 1;
      }
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
      body: JSON.stringify({
        productid,
        count: number.value, // temp
        body: code // temp
      })
    })
      .then(res => res.json())
      .then(res => {
        document.cookie = `cartID=${res.result};path=/;domain=dreamhiway.com`;
        location.href = `http://${MAIN_HOST}/m/user#/srdz/order`;
      });
  });
}
