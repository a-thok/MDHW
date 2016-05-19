import { $, $from } from 'func';
import xhr from 'xhr';
// import slider from 'slider';
import share from 'share';
import favorite from 'favorite';

//  切换显示
export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/srdz/Collect/Add', '/m/srdz/Collect/Del');
  share($('.ftCtrl_item')[2]);

  const params = { sku: {}, count: 1 };

  // slider(document.querySelector('.sliderBox'));
  // 选择颜色
  const models = $from('.model');

  models.forEach((model) => {
    const key = model.querySelector('.modelTitle').getAttribute('data-name');
    const children = model.children;

    for (let i = 1, len = children.length; i < len; i++) {
      if (children[i].classList.contains('is-active')) {
        const value = children[i].getAttribute('data-code');
        params.sku[key] = value;
        break;
      }
    }

    model.addEventListener('click', (e) => {
      const value = e.target.getAttribute('data-code');
      if (e.target.classList.contains('modelList_item')) {
        $from(children).forEach((child) => {
          if (child === e.target) {
            child.classList.add('is-active');
          } else {
            child.classList.remove('is-active');
          }
        });
      }
      params.sku[key] = value;
    });
  });

  // 选择数量
  const labels = $from('.number_choose label');
  const amount = $('.number_choose input');
  const stock = +($('.stock').textContent);
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
    xhr(`http://${MAIN_HOST}/m/sys/srdz/Shopcart/add`, Object.assign({
      productid,
      body: Object.keys(params.sku).reduce((prev, curr) => prev + params.sku[curr], '')
    }, params), (res) => {
      document.cookie = `cartID=${res.result};path=/;domain=dreamhiway.com`;
      location.href = `http://${MAIN_HOST}/m/user#/srdz/order`; // 未登录情况下，转跳可能有问题
    }, true);
    // fetch(`http://${MAIN_HOST}/m/sys/srdz/Shopcart/add`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify(Object.assign({
    //     productid,
    //     body: Object.keys(params.sku).reduce((prev, curr) => prev + params.sku[curr], '')
    //   }, params))
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     document.cookie = `cartID=${res.result};path=/;domain=dreamhiway.com`;
    //     location.href = `http://${MAIN_HOST}/m/user#/srdz/order`;
    //   });
  });
}
