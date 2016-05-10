import { $ } from 'func';
import doSearch from 'doSearch';
import template from './template.js';
import { showFilter, selectFilter } from 'filter';
import render from 'render';

export default function search() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/zb/project/List',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.hostlist')
  };

  doSearch({
    config,
    srchbtn: '.srch_btn',
    keywordProp: 'title'
  });

  showFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });

  const s = location.search;
  if (/(^\?|&)kw\=/.test(s)) {
    let c = Object.assign({}, config);
    const value = s.replace(/(?:^\?|&)kw\=([^&]*)(&.*|$)/, (str, $1) => $1);
    c.params.title = value;
    c.immediate = false;
    render(c);
  }
}
