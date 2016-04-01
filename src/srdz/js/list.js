import { $ } from '../../common/js/func.js';
import render from 'render';
import { showFilter, selectFilter } from 'filter';

export default function list() {
  fetch('/m/Srdz/SrdzTypeList')
    .then(res => res.json())
    .then(data => {
      const html = data.result.reduce((prev, curr) => {
        const lis = curr.item.reduce((_prev, _curr) => (
          `${_prev}
            <li class="filter_content_list_item" data-code="${_curr.id}">
              ${_curr.name}
              <i class="fa fa-check-circle"></i>
            </li>`
        ), '');
        return prev + lis;
      }, '');
      $('.filter_content_list-type').innerHTML = html;
    });

  function template(data) {
    return data.result.data.reduce((pre, cur) => (
      `${pre}<li class="hostlist_item">
          <div class="hostlist_item_img"><img src="http://192.168.2.10:82/img/${cur.img}"></div>
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label srdz_title_wrap_label">【${cur.typename}】</span>${cur.title}</h2>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">好评率：</span>100% | <span class="hostlist_item_info_item_label">店铺等级：</span><span class="list_item_color">5星</span>
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.price}</strong>
              </div>
            </div>
          </div>
        </li>`
    ), '');
  }
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/Srdz/SrdzList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: document.querySelector('.hostlist'),
  };

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
