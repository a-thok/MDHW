import { cloose } from './cloose.js';
import { change } from './change.js';
import { $ } from 'func';

export default function car() {
  // 选择
  cloose();
  //  切换
  change();
  // 结算
  const jiesuan = $('.carBottom-bianji .carJiesuan');
  jiesuan.addEventListener('click', () => {
    const arr = document.querySelectorAll('.carList_item_check .fa-check.is-select');
    const arrNumber = [];
    for (let i = 0; i < arr.length; i++) {
      const parent = arr[i].parentElement.parentElement;
      const subject = {
        'productid': parent.getAttribute('data-productid'),
        'skuid': parent.getAttribute('data-skuid'),
        'count': parent.querySelector('.number').innerText.slice(1)
      };
      arrNumber[i] = subject;
    }
    const form = document.getElementById('form');
    form.p.value = JSON.stringify(arrNumber);
    form.submit();
  });
  // 删除
  const remove = $('.carBottom-wancheng .carJiesuan');
  remove.addEventListener('click', () => {
    const arr = document.querySelectorAll('.carList_item_check .fa-check.is-select');
    const arrAll = document.querySelectorAll('.carList_topBar_title .fa-check.is-select');
    const ids = [];
    for (let i = 0; i < arr.length; i++) {
      const parent = arr[i].parentElement.parentElement;
      const id = parent.getAttribute('data-id');
      ids[i] = id;
    }
    const id = ids.toString();
    // 向后台传入参数，发送删除请求
    fetch('/m/o2o/ShopCart/Del', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success === true) {
          if (arrAll.length !== 0) {
            for (let i = 0; i < arrAll.length; i++) {
              const parentAll = arrAll[i].parentElement.parentElement;
              parentAll.parentElement.removeChild(parentAll);
            }
          }
          for (let i = 0; i < arr.length; i++) {
            const parent = arr[i].parentElement.parentElement;
            parent.parentElement.removeChild(parent);
          }
        }
      });
  });
  // 数量更新
  // const finish = $('.header_edit-wancheng');
  // finish.addEventListener('click', () => {
  //   const arr = document.querySelectorAll('.carList_item');
  //   const arrNumber = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     const subject = {
  //       'productid': arr[i].getAttribute('data-productid'),
  //       'skuid': arr[i].getAttribute('data-skuid'),
  //       'count': arr[i].querySelector('.number').innerText.slice(1)
  //     };
  //     arrNumber[i] = subject;
  //   }
  //   fetch('api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify({  })
  //   })
  //   .then(res => res.json())
  //   .then(res => {

  //   });
  // });
}
