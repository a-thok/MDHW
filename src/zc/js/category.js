import render from 'render'
import { fixFilter, showFilter, selectFilter } from 'filter'
import template from './template.js'

export default function category() {
  // 过滤
  fixFilter()
  showFilter()
  selectFilter()
  
  // 渲染列表
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
}
