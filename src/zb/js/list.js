import { $ } from 'func';
import render from 'render';
import { showFilter, selectFilter } from 'filter';
import template from './template.js';

export function list() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/ZB/ZbList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: document.querySelector('.hostlist'),
    replace: true,
  };
  render(config);
  showFilter();
  selectFilter((filter, typeid) => {
    config.params.pageIndex = 0;
    config.params[filter] = typeid;
    config.immediate = true;
    render(config);
  });
}
export function listFilter() {
  fetch('/m/ZB/ZbTypeList')
    .then(res => res.json())
    .then(data => {
      const html = data.result.reduce((prev, curr) => (
        `${prev}<li class="filter_content_list_item" data-code="${curr.id}">
        <i class="fa fa-fort-awesome"></i>${curr.name}</li>`
      ), '');
      $('.filter_content_list-type').innerHTML = html;
    });
}
