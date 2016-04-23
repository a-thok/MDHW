import { $ } from 'func';
import share from 'share';

export default function detail() {
  share($('.ftCtrl_item')[2]);

  const contanct = $('.person_bar_btn');
  contanct.addEventListener('click', () => {
    alert('联系电话：1575958####!');
  });

  const collect = $('.ftCtrl_item');
  collect[0].addEventListener('click', el => {
    const rep = el.currentTarget.children[0];
    // 获取cookie的值
    const arrCookie = document.cookie.split('; ');
    // 新建空对象
    const objCookie = {};
    // 循环数组
    arrCookie.forEach(item => {
      // 将数组每项元素用 = 切为数组，赋值给 arrItem 即：arrItem[arrItem[0], arrItem[1]]
      const arrItem = item.split('=');
      objCookie[arrItem[0]] = arrItem[1];
    });
    // 用cookie中的字段判断用户是否登录
    if (!objCookie.accountType) {
      alert('请先登录!');
    } else {
      const id = 55; // 临时自定义的id
      const unFav = rep.classList.contains('fa-star-o');
      const api = unFav ? '/m/Main/DiySc' : '/m/Main/DiyScDel'; // 判断接口类型
      const operation = unFav ? +1 : -1;  // 判断收藏或取消收藏数字的变化

      // 向后台传入参数，发送请求
      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      })
        // 请求通过，执行操作
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            let count = parseInt(collect.children[2].textContent, 10);
            count += operation;
            collect.children[2].textContent = count;
            rep.classList.toggle('fa-star-o');
          } else {
            alert('未知原因导致出错');
          }
        });
    }
  });
}
