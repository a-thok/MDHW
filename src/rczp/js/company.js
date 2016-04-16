import render from 'render';
import { fixFilter, showFilter, hideFilter, selectFilter, generateAreaFilter } from 'filter';
import gsTemplate from './gsTemplate.js';

export default function company() {
  let load = document.querySelector('.list_load');
  let config = {
    load,
    template: gsTemplate,
    api: '/m/HR/CompanyList',
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
  hideFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
  generateAreaFilter();
}
