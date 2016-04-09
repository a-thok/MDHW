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
    container: document.querySelector('.hostlist')
  };

  doSearch({
    config,
    keywordProp: 'title',
    srchbtn: '.srch_btn'
  });

  showFilter();
  selectFilter((filter, type) => {
    if (filter.indexOf(' ')) {
      let filtermin = filter.split(' ')[0];
      let filtermax = filter.split(' ')[1];
      let typemin = type.split('-')[0];
      let typemax = type.split('-')[1];
      config.params[filtermin] = typemin;
      config.params[filtermax] = typemax;
    } else {
      config.params[filter] = type;
    }
    config.params.pageIndex = 0;
    config.immediate = true;
    render(config);
  });
}
