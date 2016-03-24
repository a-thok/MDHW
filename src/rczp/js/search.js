import render from 'render'
import { fixFilter, showFilter, hideFilter, selectFilter, generateAreaFilter, moreFilter } from 'filter'
import { $, $from } from 'func'
import template from './template'

export default function search() {
  // 过滤
  fixFilter()
  showFilter()
  hideFilter()
  selectFilter()
  moreFilter()
  generateAreaFilter()

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
  
  // 搜索类型选择
  $('.header_srch_label').addEventListener('click', (e) => {
    // 切换显示
    $('.header_srch_select').classList.toggle('is-show')
    // 切换选择项
    if (e.target.classList.contains('header_srch_select_item')) {
      let searchText = e.currentTarget.querySelector('.header_srch_label_text')
      let text = e.target.textContent.trim()
      searchText.textContent = text
      searchText.setAttribute('data-type', searchText.textContent === '职位' ? 1 : 2)
    }
  })
  
  // 热门搜索
  let hotitems = $('.cate_item_list').children
  
  function setDisplay() {
    let hotbox = $('.cate')
    let filter = $('.filter')
    if (!hotbox.classList.contains('is-hidden')) {
      hotbox.classList.add('is-hidden')
      filter.classList.remove('is-hidden')
      button.classList.remove('is-hidden')
    }
  }
  
  // 循环目标元素，点击获取元素值，作为keyword的值
  $from(hotitems).forEach(hotitem => {
    hotitem.addEventListener('click', e => {
      setDisplay()
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

  // 搜索框搜索
  function searchByBox() {
    let keyword = $('#search').value.trim()
    if (keyword.length === 0) return
    let searchText = document.querySelector('.header_srch_label_text')
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
    if (e.keyCode === 13) {
      setDisplay()
      searchByBox()
    }
  })
  $('.header_srch_btn').addEventListener('click', () => {
    setDisplay()
    searchByBox()
  })
}
