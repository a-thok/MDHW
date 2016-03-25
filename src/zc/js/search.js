import { $ } from 'func'
import render from 'render'
import template from './template.js'

export default function search() {
  let buttons = document.querySelector('.list_more')
  let config = {
    buttons,
    template,
    api: '/m/ZC/ZcList',
    container: document.querySelector('.zcList')
  }
  render(config)
  
  function searchResult() {
    let keyword = $('#search').value.trim()
    if (keyword.length === 0) return
    render(Object.assign({}, config, {
      params: {
        keyword,
        pageIndex: 0,
        pageSize: 10
      },
      immediate: true
    }))
  }
  $('#search').addEventListener('keyup', e => {
    if (e.keyCode === 13) searchResult()
  })
  $('.srch_btn').addEventListener('click', searchResult)
}
