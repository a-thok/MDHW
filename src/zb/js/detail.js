import { $, $from } from 'func';
import share from 'share';
import favorite from 'favorite';

export default function detail() {
  favorite($('.ftCtrl_item')[0], 'id', '/m/zb/Collect/Add', '/m/zb/Collect/Del');
  share($('.ftCtrl_item')[2]);
  // 详情显示切换
  const ul = $('.userInput');
  const items = $('.intro_list_item');
  $from(items).forEach((el, i) => {
    el.addEventListener('click', (e) => {
      const another = i === 0 ? 1 : 0;
      // 清除另一项
      items[another].classList.remove('is-active');
      ul.children[another].classList.remove('is-show');
      // 选中当前项
      e.currentTarget.classList.add('is-active');
      ul.children[i].classList.add('is-show');
    });
    //  立即定制
    const btn = $('.ftCtrl_item_btn');
    btn.addEventListener('click', () => {
      items[0].classList.remove('is-active');
      ul.children[0].classList.remove('is-show');
      items[1].classList.add('is-active');
      ul.children[1].classList.add('is-show');
    });
    //  投标
    $('.userInput_itemList').addEventListener('click', e => {
      if (e.target.classList.contains('userInput_item_btn')) {
        const fpid = location.pathname.replace(/.*\//g, '');
        const type = e.target.getAttribute('data');
        document.cookie = `zb_fpid=${fpid};path=/;domain=dreamhiway.com`;
        document.cookie = `zb_type=${type};path=/;domain=dreamhiway.com`;
        location.href = `http://${MAIN_HOST}/m/user#/zb/bidding`;
      }
    });
  });
}
