import { $ } from 'func'
import render from 'render'
import template from './template.js'

export default function search() {
  let button = document.querySelector('.list_more')
  let config = {
    api: '/m/ZC/ZcList',
    body: {
      pageIndex: 1,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.zcList')
  }
  render(button, config)
  
  function searchResult() {
    let keyword = $('#zcSearchInput').value.trim()
    if (keyword.length === 0) return
    Object.assign(config, {
      body: {
        pageIndex: 0,
        pageSize: 10,
        keyword: keyword
      },
      immediate: true
    })
    render(button, config)
  }
  $('#zcSearchInput').addEventListener('keyup', e => {
    if (e.keyCode === 13) searchResult()
  })
  $('.zcSearch_btn').addEventListener('click', () => searchResult())
}
