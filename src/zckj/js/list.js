import render from 'render';
import { $, pageCallback } from 'func';
// import doSearch from 'doSearch'
export default function list() {
  function template(data) {
    return data.result.data.reduce((pre, cur) => (
      `${pre}<li class="list_item list_item-border">
          <div class="list_item_img"><div></div></div>
          <div class="list_item_text">
            <p class="list_item_text_p list_item_text_p-title">${cur.catchphrase}</p>
            <p class="list_item_text_p list_item_text_p-light">${cur.addr}<p>
            <button type="button" class="list_item_btn">申请入驻</button>
          </div>
          <div class="list_item_icon"><i class="fa fa-check-circle"></i></div>
        </li>`
    ), '');
  }

  let config = {
    template,
    buttons: $('.pagination_btn'),
    api: '/m/MS/MakerSpaceList',
    container: document.querySelector('.list'),
    replace: true,
    cb: pageCallback
  };
  render(config);
  // doSearch({
  //   config,
  //   srchbtn: '.header_srch_btn'
  // })
}
