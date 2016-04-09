import { $ } from 'func';
import { showFilter, selectFilter } from 'filter';
import render from 'render';
import template from './template.js';


export default function list() {
  let load = document.querySelector('.list_load');
  let config = {
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
      let filtermin = filter.split(' ')[0];
      let filtermax = filter.split(' ')[1];
      let typemin = type.split('-')[0];
      let typemax = type.split('-')[1];
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
