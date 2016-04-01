import { $ } from 'func';
import doSearch from 'doSearch';
import template from './template.js';
import render from 'render';
import { showFilter, selectFilter } from 'filter';

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
    container: $('.hostlist'),
  };

  doSearch({
    config,
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
