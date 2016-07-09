import { $ } from 'func';
import share from 'share';
import favorite from 'favorite';
import xhr from 'xhr';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/RShop/Collect/CollectAdd', '/m/RShop/Collect/CollectDel');
  share($('.ftCtrl_item')[2]);

  // 立即购买-弹出弹窗
  const text = $('.pupop_bg');
  $('.ftCtrl_item_btn').addEventListener('click', () => {
    text.classList.add('is-show');
  });
  // 关闭弹窗
  $('.close_pupop').addEventListener('click', () => {
    text.classList.remove('is-show');
  });
  // 确认购买
  const btn = $('.shopping_OK');
  btn.addEventListener('click', () => {
    text.classList.remove('is-show');
    // const arr = location.pathname.split('/');
    // const id = arr[arr.length - 1];
    const id = 1;
    xhr('/m/RShop/Order/OrderConfirm', Object.assign({ id }), (res) => {
      const str = encodeURIComponent(JSON.stringify(res.result));
      document.cookie = `Sbcsdata=${str};path=/;domain=dreamhiway.com`;
      // location.href = `http://${MAIN_HOST}/m/user#/Sbcs/order`; // 未登录情况下，转跳可能有问题
    }, true);
  });
}
