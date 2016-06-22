import { $, $from } from 'func';


export function cloose() {
  //  商品
  const checkgood = $from('.carList_item_check .fa-check');
  checkgood.forEach((checkgood) => {
    checkgood.addEventListener('click', (e) => {
      const targetgood = e.target;
      const good = targetgood.parentElement.parentElement.parentElement;
      const goodAll = good.parentElement;
      targetgood.classList.toggle('is-select');
      if (good.querySelectorAll('.carList_item_check .fa-check.is-select').length === good.querySelectorAll('.carList_item_check .fa-check').length) {
        good.querySelector('.carList_topBar_title .fa-check').classList.add('is-select');
      } else {
        good.querySelector('.carList_topBar_title .fa-check').classList.remove('is-select');
      }
      if (goodAll.querySelectorAll('.carList .carList_topBar_title .fa-check.is-select').length === goodAll.querySelectorAll('.carList').length) {
        goodAll.querySelector('.carAll .fa-check').classList.add('is-select');
      } else {
        goodAll.querySelector('.carAll .fa-check').classList.remove('is-select');
      }
      const arr = document.querySelectorAll('.bianji .carList_item_check .is-select');
      let zongjian = 0;
      $('.bianji .moneyAll').innerText = '￥0';
      for (let i = 0; i < arr.length; i++) {
        const danjian = arr[i].parentElement.parentElement.querySelector('.carList_item_listMsg-bianji .money').innerText.slice(1);
        const shuliang = arr[i].parentElement.parentElement.querySelector('.carList_item_listMsg-bianji .number').innerText.slice(1);
        zongjian += danjian * shuliang;
        $('.bianji .moneyAll').innerText = `￥${zongjian}`;
      }
    });
  });
  // 商家
  const checkSeller = $from('.carList_topBar_title .fa-check');
  checkSeller.forEach((checkSeller) => {
    checkSeller.addEventListener('click', (e) => {
      const targetSeller = e.target;
      const Seller = targetSeller.parentElement.parentElement.parentElement; // 商家
      const SellerLength = Seller.querySelectorAll('.carList_item_check .fa-check');
      const SellerAll = Seller.parentElement; // 总的商家
      targetSeller.classList.toggle('is-select');
      if (targetSeller.classList.contains('is-select')) {
        for (let i = 0; i < SellerLength.length; i++) {
          SellerLength[i].classList.add('is-select');
        }
      } else {
        for (let i = 0; i < SellerLength.length; i++) {
          SellerLength[i].classList.remove('is-select');
        }
      }
      if (SellerAll.querySelectorAll('.carList .carList_topBar_title .fa-check.is-select').length === SellerAll.querySelectorAll('.carList').length) {
        SellerAll.querySelector('.carAll .fa-check').classList.add('is-select');
      } else {
        SellerAll.querySelector('.carAll .fa-check').classList.remove('is-select');
      }
      const arr = document.querySelectorAll('.bianji .carList_item_check .is-select');
      let zongjian = 0;
      $('.bianji .moneyAll').innerText = '￥0';
      for (let i = 0; i < arr.length; i++) {
        const danjian = arr[i].parentElement.parentElement.querySelector('.carList_item_listMsg-bianji .money').innerText.slice(1);
        const shuliang = arr[i].parentElement.parentElement.querySelector('.carList_item_listMsg-bianji .number').innerText.slice(1);
        zongjian += danjian * shuliang;
        $('.bianji .moneyAll').innerText = `￥${zongjian}`;
      }
    });
  });
  //  全选
  const Allb = $('.carBottom-bianji .carAll .fa-check');
  Allb.addEventListener('click', (e) => {
    const targetAll = e.target;
    const check = $('.fa-check');
    targetAll.classList.toggle('is-select');
    if (targetAll.classList.contains('is-select')) {
      for (let i = 0; i < check.length; i++) {
        check[i].classList.add('is-select');
      }
    } else {
      for (let i = 0; i < check.length; i++) {
        check[i].classList.remove('is-select');
      }
    }
    const arr = document.querySelectorAll('.bianji .carList_item_check .is-select');
    let zongjian = 0;
    $('.bianji .moneyAll').innerText = '￥0';
    for (let i = 0; i < arr.length; i++) {
      const danjian = arr[i].parentElement.parentElement.querySelector('.carList_item_listMsg-bianji .money').innerText.slice(1);
      const shuliang = arr[i].parentElement.parentElement.querySelector('.carList_item_listMsg-bianji .number').innerText.slice(1);
      zongjian += danjian * shuliang;
      $('.bianji .moneyAll').innerText = `￥${zongjian}`;
    }
  });
  const Allw = $('.carBottom-wancheng .carAll .fa-check');
  Allw.addEventListener('click', (e) => {
    const targetAll = e.target;
    const check = $('.fa-check');
    targetAll.classList.toggle('is-select');
    if (targetAll.classList.contains('is-select')) {
      for (let i = 0; i < check.length; i++) {
        check[i].classList.add('is-select');
      }
    } else {
      for (let i = 0; i < check.length; i++) {
        check[i].classList.remove('is-select');
      }
    }
  });
}
