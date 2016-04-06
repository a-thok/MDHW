import doSearch from 'doSearch';
import template from './template.js';
import render from 'render';
import { showFilter, selectFilter } from 'filter';

// 搜索切换
export default function search() {
  // $from('.srchBtn_list_item').forEach(el => {
  //   el.addEventListener('click', e => {
  //     if (e.target.classList.contains('srchBtn_list_item-bgColor')) return
  //     $from(e.target.parentElement.children).forEach((_e, _index) => {
  //       _e.classList.remove('srchBtn_list_item-bgColor')
  //     })
  //     e.target.classList.add('srchBtn_list_item-bgColor')
  //   })
  // })
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/Srdz/SrdzList',
    container: document.querySelector('.hostlist'),
  };

  doSearch({
    config,
    keywordProp: 'title',
    srchbtn: '.srch_btn'
  });

  showFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
}
