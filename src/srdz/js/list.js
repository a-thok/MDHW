import { $ } from 'func';
import { showFilter, selectFilter } from 'filter';
import render from 'render';
import template from './template.js';


export default function list() {
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/Srdz/SrdzList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.hostlist')
  };
  render(config);

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
    config.immediate = true;
    config.params.pageIndex = 0;
    render(config);
  });
}
