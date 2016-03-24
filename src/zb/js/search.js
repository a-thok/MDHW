import { $, pageCallback } from 'func'
import doSearch from 'doSearch'

export default function search() {
   // 渲染列表
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      return pre + `<li class="hostlist_item">
          <!--<div class="hostlist_item_img">
            <div style="width:60px;height:60px;background:red"></div>
          </div>-->
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label">[${cur.statemc}]</span>${cur.title}</h2>
              <span class="base_title_tag">${cur.typename}</span>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.totalfin}</strong>
              </div>
              <div class="hostlist_item_info_item">
                ${cur.num}<span class="hostlist_item_info_item_label">人参与</span> | <span class="hostlist_item_info_item_label">交付周期：</span>${cur.procycle}天
              </div>
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">发布者：</span>${cur.fbzname}
              </div>
            </div>
          </div>
        </li>`
    }, '')
  }
  
  let buttons = $('.pagination_btn')
  let config = {
    api: '/m/ZB/ZbList',
    body: {
      pageIndex: 0,
      pageSize: 10
    },
    replace: true,
    template: template,
    container: document.querySelector('.hostlist')
  }
  
  doSearch({
    button: buttons,
    config,
    srchbtn: '.srch_btn',
    cb: pageCallback
  })
}
