import { $, $from, $cookie } from 'func';
import slider from 'slider';
import share from 'share';
import xhr from 'xhr';


export default function detail() {
  const purchaseBtn = $('.purchase_btn');
  const closeBtn = $('.orderHeader_close');
  const order = $('.order_backColor');
  purchaseBtn.addEventListener('click', () => {
    order.classList.add('is-block');
  });
  closeBtn.addEventListener('click', () => {
    order.classList.remove('is-block');
  });
  // 轮播
  slider($('.sliderBox'));
  // 转载
  share($('.fa-share-square-o'));
  // 选择数量
  const orderLists = $from('.orderList_item');
  const params = { count: 1 };
  const labels = $from('.number_choose label');
  const amount = $('.number_choose input');
  labels.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (i === 0) {
        if (+(amount.value) <= 1) return;
        amount.value -= 1;
      } else {
        amount.value = +(amount.value) + 1;
      }
      params.count = amount.value;
    });
  });
  // 选择
  const sku = [];
  orderLists.forEach((list, index) => {
    sku[index] = 0;
    list.addEventListener('click', (e) => {
      const cl = e.target.classList;
      if (cl.contains('orderList_itemList_item')) {
        $from(e.target.parentElement.children).forEach(child => child.classList.remove('is-click'));
        cl.add('is-click');
        // const key = e.currentTarget.querySelector('.orderList_itemTitle').textContent;
        const value = e.target.getAttribute('data-index');
        sku[index] = value;
      }
    });
  });
  // 收藏
  const soucang = $('.shoucang .fa');
  console.log(window.IsCollect);
  if (window.IsCollect === 1) {
    soucang.classList.remove('fa-star-o');
    soucang.classList.add('fa-star');
  }
  soucang.addEventListener('click', () => {
    if (!$cookie().accountType) {
      // 如果未登录，转跳登录页
      location.href = `http://${MAIN_HOST}/m/main/denglu?redirectURL=${encodeURIComponent(location.href)}`;
    } else {
      fetch('/m/o2o/collect/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ productid: window.location.pathname.match(/\/\d+/)[0].slice(1) })
      })
        .then(res => res.json())
        .then(res => {
          if (res.result === true) {
            soucang.classList.remove('fa-star-o');
            soucang.classList.add('fa-star');
            alert('收藏成功');
          }
        });
    }
  });
  // 立即购买
  const btn = $from('.orderBtnbox_btn');
  btn.forEach((el, i) => {
    el.addEventListener('click', () => {
      params.skuid = window.skus[sku.toString()].id;
      xhr('/m/o2o/ShopCart/Add', Object.assign({
        productid: window.productid
      }, params), (res) => {
        if (i === 0) {
          alert('添加购物车成功');
        } else {
          console.log(res);
          alert('购物成功');
          // document.cookie = `cartID=${res.result};path=/;domain=dreamhiway.com`;
          // location.href = `http://${MAIN_HOST}/m/user#/myj/order`; // 未登录情况下，转跳可能有问题
        }
      }, true);
    });
  });
}
