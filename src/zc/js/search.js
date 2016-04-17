import { $, $cookie, $parent, $from } from 'func';
import template from './template.js';
import doSearch from 'doSearch';
import render from 'render';
import { fixFilter, showFilter, selectFilter } from 'filter';

export default function search() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/ZC/ZcList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.zcList')
  };

  doSearch({
    config,
    keywordProp: 'keyword',
    srchbtn: '.srch_btn'
  });
  fixFilter();
  showFilter();
  selectFilter((filter, type) => {
    if (/^[0-9]/.test(type)) {
      type = +type;
    }
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
  // 点赞
  $('.zcList').addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-thumbs-o-up')) {
      const item = $parent(e.target, '.zcList_item');
      const id = item.getAttribute('data-id');
      const num = $cookie().num;
      if (num && num.split(',').indexOf(id) !== -1) return;
      e.target.classList.add('cgColor');
      document.cookie = `num=${num ? $cookie().num : ''},${id}`;
    }
  });
  const items = document.querySelectorAll('.zcList_item');
  if (items.length > 0) {
    // 循环列表中的每个li
    $from('.zcList_item').forEach((el) => {
      const id = el.getAttribute('data-id');
      if (!$cookie().num) return;
      const ids = $cookie().num.split(',');
      const icon = el.querySelector('.fa-thumbs-o-up');
      if (ids.indexOf(id) !== -1) {
        icon.classList.add('cgColor');
      }
    });
  }
}
