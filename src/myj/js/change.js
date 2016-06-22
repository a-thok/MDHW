import { $, $from, $parent, $debounce } from 'func';

export function change() {
  const page = $('.page');
  const edits = $from('.header_edit');
  // const numberB = $from('.carList_item_listMsg-bianji .money')[1].innerText.slice(1);
  const numberB = $from('.carList_item_listMsg-bianji .number');
  const numberW = $from('.carList_item_listMsg-wancheng input');
  edits.forEach((edit) => {
    edit.addEventListener('click', () => {
      const wancheng = $('.page.wancheng');
      const isSelect = $from('.fa-check');
      for (let i = 0; i < isSelect.length; i++) {
        isSelect[i].classList.remove('is-select');
      }
      $('.bianji .moneyAll').innerText = '￥0';
      if (wancheng.length === 0) {
        page.classList.add('wancheng');
        page.classList.remove('bianji');
        for (let i = 0; i < numberB.length; i++) {
          numberW[i].value = numberB[i].innerText.slice(1);
        }
      } else {
        page.classList.add('bianji');
        page.classList.remove('wancheng');
        for (let i = 0; i < numberW.length; i++) {
          numberB[i].innerText = `x${numberW[i].value}`;
        }
      }
    });
  });
  // 选择数量
  const labels = $from('.carList_item_listMsg-wancheng label');
  // const amount = $from('.carList_item_listMsg-wancheng input');
  // 数量更新函数
  function updateRemote(parent) {
    console.log(parent);
    fetch('/m/o2o/ShopCart/Update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        productid: parent.getAttribute('data-productid'),
        skuid: parent.getAttribute('data-skuid'),
        count: parent.querySelector('.carList_item_listMsg-wancheng input').value
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success === true) {
          console.log(1);
        }
      });
  }
  const updateRemoteDebounced = $debounce(updateRemote, 1000);

  labels.forEach((el, i) => {
    el.addEventListener('click', (e) => {
      const parent = $parent(e.target, '.carList_item');
      const amount = parent.querySelector('.carList_item_listMsg-wancheng input');
      if ((i % 2) === 0) {
        if (+(amount.value) <= 1) return;
        amount.value -= 1;
      } else {
        amount.value = +(amount.value) + 1;
      }

      updateRemoteDebounced(parent);
    });
  });
}
