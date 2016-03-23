import render from 'render'
import { $, $from } from 'func'

export default function hotSearch() {
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
      pageIndex: 0,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.list')
  }

  // 模糊搜索
  let child = $('.cate_item_list').children
  let hotbox = $('.cate')
  // 循环目标元素，点击获取元素值，作为keyword的值
  $from(child).forEach(el => {
    el.addEventListener('click', e => {
      if (!hotbox.classList.contains('list_more-show')) {
        hotbox.classList.add('list_more-show')
        button.classList.remove('list_more-show')
      }
      let keyword = e.target.textContent.trim()
      
      Object.assign(config, {
        body: {
          pageIndex: 0,
          pageSize: 10,
          keyword: keyword
        },
        immediate: true
      })
      render(button, config)
    })
  })
}
