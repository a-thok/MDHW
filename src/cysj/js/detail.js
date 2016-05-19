import { $, $cookie } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'fpid', '/m/diy/Collect/Add', '/m/diy/Collect/Del');
  share($('.ftCtrl_item')[2]);
  // 投标跳转
  $('.ftCtrl_item_btn').addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    // 获取项目id 存为本地数据
    document.cookie = `cpid=${id};path=/;domain=dreamhiway.com`;
    const url = $cookie().accountType ?
      `http://${MAIN_HOST}/m/user?redirectURL=${encodeURIComponent(location.href)}#/cysj/bidding` :
      `http://${MAIN_HOST}/m/main/denglu?redirectURL=${encodeURIComponent(location.href)}`;
    location.href = url;
  });
}
