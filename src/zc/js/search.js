import { $ } from 'func';
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
}
