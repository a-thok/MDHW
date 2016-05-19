import render from 'render';
import { fixFilter, showFilter, selectFilter, generateAreaFilter } from 'filter';
import gsTemplate from './gsTemplate.js';
import overflow from 'overflow';
import { $ } from 'func';

export default function company() {
  const load = document.querySelector('.list_load');
  const config = {
    load,
    template: gsTemplate,
    api: '/m/HR/Company/list',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: document.querySelector('.list')
  };
  render(config);

  // 过滤
  fixFilter();
  showFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
  generateAreaFilter();
  overflow($('.tagList'));
}
