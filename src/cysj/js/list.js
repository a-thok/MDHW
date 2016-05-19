import { $ } from 'func';
import { showFilter, selectFilter } from 'filter';
import template from './template.js';
import render from 'render';

export default function list() {
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/DIY/DiyList',
    params: {
      pageIndex: 0,
      pageSize: 10
    },
    container: $('.hostlist')
  };
  render(config);

  showFilter();
  selectFilter((filter, type) => {
    if (/^[0-9]/.test(type)) {
      type = +type;
    }
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
}
// export function listFilter() {
//   fetch('/m/DIY/DiyTypeList')
//     .then(res => res.json())
//     .then(data => {
//       const html = data.result.reduce((prev, curr) => {
//         const lis = curr.item.reduce((_prev, _curr) => (
//           `${_prev}
//             <li class="filter_content_list_item" data-code="${_curr.id}">
//               ${_curr.protype}
//               <i class="fa fa-check-circle"></i>
//             </li>`
//         ), '');
//         return prev + lis;
//       }, '');
//       $('.filter_content_list-type').innerHTML = html;
//     });
// }
