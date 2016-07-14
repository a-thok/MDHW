import { showFilter } from 'filter';
import sbqgTemplate from './sbqgTemplate';
import render from 'render';
import { $ } from 'func';
import { selectMore } from './selectMore.js';

export default function demand() {
  // 列表页渲染
  const load = document.querySelector('.list_load');
  const config = {
    load,
    template: sbqgTemplate,
    api: '/m/rshop/Fast/DemandList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.hostlist')
  };
  render(config);
  // // 过滤
  showFilter();
  // // 多个条件选择过滤
  selectMore(config);
}