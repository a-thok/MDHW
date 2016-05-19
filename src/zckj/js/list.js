import render from 'render';
import { showFilter, selectFilter, generateAreaFilter } from 'filter';
// import { $, pageCallback } from 'func';
import doSearch from 'doSearch';
export default function list() {
  function template(data) {
    return data.result.data.reduce((pre, cur) => {
      const url = `http://${CDN_HOST}/mstatic/img/lqt.png`;
      return (
        `${pre}<li class="list_item list_item-border">
          <a class="linkWrapper" href="http://${ZCKJ_HOST}/m/home/detail/${cur.id}">
            <div class="list_item_img"><img src="${url}" alt="${cur.name}"></div>
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
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/zckj/makerspace/list',
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
