import render from 'render';
import { showFilter, selectFilter, generateAreaFilter } from 'filter';
// import { $, pageCallback } from 'func';
import doSearch from 'doSearch';
export default function list() {
  function template(data) {
    return data.result.data.reduce((pre, cur) => {
      let url = `http://${CDN_HOST}/mstatic/img/lqt.png`;
      return (
        `${pre}<li class="list_item list_item-border">
          <a class="list_item_a" href="http://${ZCKJ_HOST}/m/zckj/detail/${cur.id}">
            <div class="list_item_img"><img src="${url}" alt=""></div>
            <div class="list_item_text">
              <p class="list_item_text_p list_item_text_p-title">${cur.name}</p>
              <p class="list_item_text_p list_item_text_p-light">${cur.province}${cur.city}${cur.addr}<p>
              <button type="button" class="list_item_btn">申请入驻</button>
            </div>
          <div class="list_item_icon"><img src="http://${CDN_HOST}/mstatic/img/iconfont-qiyerenzheng1.png" alt=""></div>
          </a>
        </li>`
      );
    }, '');
  }
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/Zckj/MakerSpaceList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: document.querySelector('.list')
  };
  render(config);
  doSearch({
    config,
    srchbtn: '.header_srch_btn',
    keywordProp: 'name'
  });
  // 过滤
  showFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
  generateAreaFilter();
}
