import { $ } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'fpid', '/m/diy/Collect/Add', '/m/diy/Collect/Del');
  share($('.ftCtrl_item')[2]);
  // 投标跳转
  $('.ftCtrl_item_btn').addEventListener('click', (e) => {
    let id = e.currentTarget.getAttribute('code-id');
    // 获取项目id 存为本地数据
    localStorage.setItem('cpid', id);
  });
}
