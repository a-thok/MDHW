import render from 'render';
import { fixFilter, showFilter, selectFilter } from 'filter';
import template from './template.js';
import { $ } from 'func';

export default function category() {
  // 渲染列表
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/ZC/ZcList',
    params: {
      pageIndex: 0,
      pageSize: 10
    },
    container: $('.zcList')
  };
  render(config);

  // 过滤
  fixFilter();
  showFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 1;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
}
