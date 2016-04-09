import { $ } from 'func';
import { showFilter, selectFilter } from 'filter';
import template from './template.js';
import doSearch from 'doSearch';
import render from 'render';


export default function search() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/DIY/DiyList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.hostlist')
  };

  doSearch({
    config,
    keywordProp: 'title',
    srchbtn: '.srch_btn'
  });

// 过滤
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
}
