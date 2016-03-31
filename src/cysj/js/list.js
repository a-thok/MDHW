import { $ } from 'func';
import render from 'render';
import template from './template.js';
import { showFilter, selectFilter } from 'filter';

export function list() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/DIY/DiyList',
    params: {
      pageIndex: 0,
      pageSize: 10
    },
    container: $('.hostlist'),
  };
  render(config);

  showFilter();
  selectFilter((filter, text) => {
    config.params.pageIndex = 0;
    config.params[filter] = text;
    config.immediate = true;
    render(config);
  });
}
export function listFilter() {
  fetch('/m/DIY/DiyTypeList')
    .then(res => res.json())
    .then(data => {
      const html = data.result.reduce((prev, curr) => {
        const lis = curr.item.reduce((_prev, _curr) => (
          `${_prev}
            <li class="filter_content_list_item" data-id="${_curr.id}">
              ${_curr.protype}
              <span class="item_iconHide"><i class="fa fa-check-circle"></i></span>
            </li>`
        ), '');
        return prev + lis;
      }, '');
      $('.filter_content_list-type').innerHTML = html;
    });
}
