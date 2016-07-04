import { showFilter } from 'filter';
import template from './template';
import render from 'render';
import { $ } from 'func';
import { selectMore } from './selectMore.js';

export default function list() {
  const pcode = location.search.slice(-2);

  // 列表页渲染
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/rshop/Search/SearchList',
    params: {
      pcode,
      pageIndex: 0,
      pageSize: 10
    },
    container: $('.shangbiao-list')
  };
  render(config);
  // 过滤
  showFilter();
  // 多个条件选择过滤
  selectMore(config);
}
