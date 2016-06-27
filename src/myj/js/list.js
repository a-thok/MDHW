import { $, $from } from 'func';
import render from 'render';
import spTemplate from './spTemplate.js';
import sjTemplate from './sjTemplate.js';
import { typeFilter } from './filter.js';
import { showFilter, selectFilter, generateAreaFilter } from 'filter';

export default function list() {
  typeFilter();
  const ul = $('.result');
  const items = $('.intro_list_item');
  const load = document.querySelector('.list_load');
  // 商品列表
  const arr = window.location.pathname.match(/\/\d+-\d+/)[0].slice(1).split('-');
  // const num = window.location.search.slice(1).split('&')[1].split('=')[1];
  const ddidStr = window.location.search.match(/ddid=(\d+)/);
  const spConfig = {
    load,
    template: spTemplate,
    api: '/m/o2o/Product/List',
    params: {
      pageIndex: 1,
      pageSize: 10,
      city: arr[0],
      type: arr[1]
    },
    replace: true,
    container: document.querySelector('.myj_list')
  };
  render(spConfig);
  // 商家列表
  const sjConfig = {
    load,
    template: sjTemplate,
    api: '/m/o2o/Store/List',
    params: {
      pageIndex: 1,
      pageSize: 10,
      // city: arr[0],
      type: arr[1],
      ddid: ddidStr && ddidStr[1]
    },
    replace: true,
    container: document.querySelector('.hostlist')
  };
  let config = spConfig;
  const filterItems = $from('.filter_item');
  $from(items).forEach((el, i) => {
    el.addEventListener('click', (e) => {
      filterItems.forEach(filterItem => filterItem.classList.remove('is-show'));
      const another = i === 0 ? 1 : 0;
      config = i === 0 ? spConfig : sjConfig;
      // 清除另一项
      items[another].classList.remove('is-active');
      ul.children[another].classList.remove('is-show');
      // 选中当前项
      e.currentTarget.classList.add('is-active');
      ul.children[i].classList.add('is-show');
      config.immediate = false;
      render(config);
    });
  });
  // 城市过滤栏
  generateAreaFilter(true);
  showFilter();
  selectFilter((filter, type) => {
    console.log(config);
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
}
