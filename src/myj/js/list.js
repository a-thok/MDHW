import { $, $from } from 'func';
import render from 'render';
import spTemplate from './spTemplate';
import sjTemplate from './sjTemplate';

export default function list() {
  const ul = $('.userInput');
  const items = $('.intro_list_item');
  const load = document.querySelector('.list_load');
  // 商品列表
  const spConfig = {
    load,
    template: spTemplate,
    api: '/m/o2o/Product/List',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    replace: true,
    container: document.querySelector('.userInput_itemList')
  };
  render(spConfig);
  // 商家列表
  const sjConfig = {
    load,
    template: sjTemplate,
    api: '/m/o2o/Store/List',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    replace: true,
    container: document.querySelector('.hostlist')
  };
  $from(items).forEach((el, i) => {
    el.addEventListener('click', (e) => {
      const another = i === 0 ? 1 : 0;
      const cb = i === 0 ? spConfig : sjConfig;
      // 清除另一项
      items[another].classList.remove('is-active');
      ul.children[another].classList.remove('is-show');
      // 选中当前项
      e.currentTarget.classList.add('is-active');
      ul.children[i].classList.add('is-show');
      render(cb);
    });
  });
}
