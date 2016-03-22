import render from 'render'
import { fixFilter, showFilter, hideFilter, selectFilter, generateAreaFilter, moreFilter } from 'filter'
import { $, $from, $parent } from 'func'

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
    body: {
      pageIndex: 0,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.list')
  }
  
  // 搜索类型选择
  $('.header_srch_label').addEventListener('click', () => {
    $('.header_srch_select').classList.toggle('is-show')
  })
  $from('.header_srch_select_item').forEach(el => {
    el.addEventListener('click', e => {
      let searchText = $parent(e.target, '.header_srch_label').querySelector('.header_srch_label_text')
      let text = e.target.textContent.trim()
      searchText.textContent = text
      searchText.setAttribute('data-type', searchText.textContent === '职位' ? 1 : 2)
    })
  })
  
  // 模糊搜索
  function searchCloud() {
    let keyword = $('#search').value.trim()
    if (keyword.length === 0) return
    let searchText = document.querySelector('.header_srch_label_span')
    let type = searchText.getAttributeNode('data-type').value
    let api = (+type === 1) ? '/m/HR/JobList' : '/m/HR/CompanyList'
    Object.assign(config, {
      api: api,
      body: {
        pageIndex: 0,
        pageSize: 10,
        keyword: keyword
      },
      immediate: true
    })
    render(button, config)
  }
  
  $('#search').addEventListener('keyup', e => {
    if (e.keyCode === 13) searchCloud()
  })
  $('.header_srch_btn').addEventListener('click', () => searchCloud())
}
