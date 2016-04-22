import { $ } from 'func';
import render from 'render';
import { showFilter, selectFilter } from 'filter';
import template from './template.js';

export function list() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/zb/project/List',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: document.querySelector('.hostlist'),
    replace: true
  };
  render(config);
  showFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
}
export function listFilter() {
  fetch('/m/zb/project/typelist')
    .then(res => res.json())
    .then(data => {
      const html = data.result.reduce((prev, curr) => (
        `${prev}<li class="filter_content_list_item" data-code="${curr.id}">
        <span class="filter_content_list_item_icon">
          <i class="fa fa-fort-awesome"></i>${curr.name}
        </span>
        <i class="fa fa-check-circle"></i>
        </li>`
      ), '');
      $('.filter_content_list-type').innerHTML = html;
    });
}
