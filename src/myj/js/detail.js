import { $, $from, $cookie } from 'func';
import slider from 'slider';
import share from 'share';
import xhr from 'xhr';


export default function detail() {
  const closeBtn = $('.orderHeader_close');
  const order = $('.order_backColor');
  closeBtn.addEventListener('click', () => {
    order.classList.remove('is-block');
  });
  // 轮播
  slider($('.sliderBox'));
  // 转载
  share($('.purchase_msg_share'));
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
      const selecteds = $from('.orderList_itemList_item.is-click');
      const arr = [];
      selecteds.forEach((selected, i) => {
        arr[i] = selected.textContent;
      });
      const text = $('.orderHeader_msg_text_content');
      text.innerText = '';
      for (let i = 0; i < arr.length; i++) {
        text.innerText += `"${arr[i]}"`;
      }
    });
  });
  // 收藏
  const shoucang = $('.shoucang .fa');
  console.log(window.IsCollect);
  if (window.IsCollect === 1) {
    shoucang.classList.remove('fa-star-o');
    shoucang.classList.add('fa-star');
  }
  shoucang.addEventListener('click', () => {
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
            shoucang.classList.remove('fa-star-o');
            // shoucang.classList.toggle('fa-star');
          }
        });
    }
  });


  // 底栏状态切换
  // const links = $from('.myjFoot_link');
  // links.forEach((link) => {
  //   link.addEventListener('click', (e) => {
  //     for (let i = 0; i < links.length; i++) {
  //       links[i].querySelector('.fa').classList.remove('is-color');
  //     }
  //     e.target.querySelector('.fa').classList.add('is-color');
  //   });
  // });


  // 底栏按钮
  let confirmAction;
  const confirmBtn = $('.orderBtnbox_btn');
  const modal = $('.modal');
  function confirmFn() {
    order.classList.remove('is-block');
    if (confirmAction === 'ADD_TO_CART') {
      params.skuid = sku.length ? window.skus[sku.toString()].id : null;
      xhr('/m/o2o/ShopCart/Add', Object.assign({
        productid: window.productid
      }, params), (res) => {
        if (res.success === true) {
          modal.classList.add('is-show');
          setTimeout(() => modal.classList.remove('is-show'), 2500);
        }
      }, true);
    } else if (confirmAction === 'GO_TO_ORDER') {
      xhr('/m/o2o/ShopCart/Add', Object.assign({
        productid: window.productid
      }, params), (res) => {
        if (res.success === true) {
          // document.cookie = `cartID=${res.result};path=/;domain=dreamhiway.com`;
          location.href = `http://${MYJ_HOST}/m/confirm?`;
        }
      }, true);
    }
  }
  confirmBtn.addEventListener('click', confirmFn);

  const btns = $from('.myjFoot_btn');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      order.classList.add('is-block');
      if (!$cookie().accountType) {
        // 如果未登录，转跳登录页
        location.href = `http://${MAIN_HOST}/m/main/denglu?redirectURL=${encodeURIComponent(location.href)}`;
      } else {
        confirmAction = (i === 0) ? 'ADD_TO_CART' : 'GO_TO_ORDER';
      }
    });
  });
}
