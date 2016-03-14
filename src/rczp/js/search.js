import render from 'render'
import { fixFilter, showFilter, hideFilter, selectFilter, generateAreaFilter, moreFilter } from 'filter'

export default function search() {
  // 过滤
  fixFilter()
  showFilter()
  hideFilter()
  selectFilter()
  moreFilter()
  generateAreaFilter()

  // 渲染列表
  let template = function (data) {
    return data.result.data.reduce((pre, cur) => {
      return pre + `<li class="list_item">
          <div class="list_item_img"><img src="http://192.168.2.10:82/img/${cur.logo}"></div>
          <div class="list_item_text">
            <p class="list_item_text_p post_info"><span class="post_name list_margin">${cur.Position}</span>[${cur.CityName}] ${cur.PublicTime}</p>
            <p class="list_item_text_p post_info"><span class="post_salary list_margin">月薪: ${cur.Money}</span>经验: ${cur.Req_gznx}</p>
            <p class="list_item_text_p">${cur.company}</p>
            <p class="list_item_text_p">${cur.trade}</p>
          </div>
        </li>`
    }, '')
  }

  let button = document.querySelector('.list_more')
  let config = {
    api: '/m/HR/JobList',
    body: {
      pageIndex: 1,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.list')
  }
  render(button, config)
}
