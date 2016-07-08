import { $ } from 'func';
import share from 'share';
import favorite from 'favorite';

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
}
