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
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/srdz/project/list',
    container: document.querySelector('.hostlist'),
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  };

  doSearch({
    config,
    keywordProp: 'title',
    srchbtn: '.srch_btn'
  });

  showFilter();
  selectFilter((filter, type) => {
    if (filter.indexOf(' ')) {
      const filtermin = filter.split(' ')[0];
      const filtermax = filter.split(' ')[1];
      const typemin = type.split('-')[0];
      const typemax = type.split('-')[1];
      config.params[filtermin] = typemin;
      config.params[filtermax] = typemax;
    } else {
      config.params[filter] = type;
    }
    config.params.pageIndex = 0;
    config.immediate = true;
    render(config);
  });

  const s = location.search;
  if (/(^\?|&)kw\=/.test(s)) {
    const c = Object.assign({}, config);
    const value = s.replace(/(?:^\?|&)kw\=([^&]*)(&.*|$)/, (str, $1) => $1);
    c.params.title = value;
    c.immediate = false;
    render(c);
  }
}
