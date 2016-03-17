import render from 'render'
import pageCallback from 'func'
export default function list() {
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      return pre + `<li class="list_item list_item-border">
          <div class="list_item_img"><div></div></div>
          <div class="list_item_text">
            <p class="list_item_text_p list_item_text_p-title">${cur.catchphrase}</p>
            <p class="list_item_text_p list_item_text_p-light">${cur.addr}<p>
            <button type="button" class="list_item_btn">申请入驻</button>
          </div>
          <div class="list_item_icon"><i class="fa fa-check-circle"></i></div>
        </li>`
    }, '')
  }
  let buttons = document.querySelectorAll('.pagination_btn')
  let config = {
    api: '/m/MS/MakerSpaceList',
    body: {
      pageIndex: 1,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.list'),
    replace: true
  }
  render(buttons, config, pageCallback)
  render(buttons, Object.assign(config, {
    next: false
  }), pageCallback)
}
