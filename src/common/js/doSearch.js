import { $, $from } from 'func'
import render from 'render'

export default function doSearch(params) {
  // 热门搜索
  let hotitems = $('.cate_item_list').children
  
  function setDisplay() {
    let hotbox = $('.cate')
    let filter = $('.filter')
    
    if (!hotbox.classList.contains('is-hidden')) {
      hotbox.classList.add('is-hidden')
      if (filter) filter.classList.remove('is-hidden')
      if (params.button.length) {
        let pagination = $('.pagination')
        pagination.classList.remove('is-hidden')
      } else {
        params.button.classList.remove('is-hidden')
      }
    }
  }
  
  // 循环目标元素，点击获取元素值，作为keyword的值
  $from(hotitems).forEach(hotitem => {
    hotitem.addEventListener('click', e => {
      setDisplay()
      let keyword = e.target.textContent.trim()
      Object.assign(params.config, {
        body: {
          pageIndex: 0,
          pageSize: 10,
          keyword: keyword
        },
        immediate: true
      })
      if (params.cb) {
        params.config.next = true
        render(params.button, params.config, params.cb)
        params.config.next = false
        render(params.button, params.config, params.cb)
      } else {
        render(params.button, params.config)
      }
    })
  })

  // 搜索框搜索
  function searchByBox() {
    let keyword = $('#search').value.trim()
    if (keyword.length === 0) return
    Object.assign(params.config, {
      body: {
        pageIndex: 0,
        pageSize: 10,
        keyword: keyword
      },
      immediate: true
    })
    if (params.url) params.config.api = params.url()
    if (params.cb) {
      render(params.button, params.config, params.cb)
    } else {
      render(params.button, params.config)
    }
  }
  
  $('#search').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      setDisplay()
      searchByBox()
    }
  })
  $(params.srchbtn).addEventListener('click', () => {
    setDisplay()
    searchByBox()
  })
}
