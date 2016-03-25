import render from 'render'
import { hideFilter, showFilter, selectFilter } from 'filter'
import { pageCallback } from 'func'
import template from './template.js'

export default function list() {
  // 过滤
  showFilter()
  hideFilter()
  selectFilter()
  
  let buttons = document.querySelectorAll('.pagination_btn')
  let config = {
    api: '/m/ZB/ZbList',
    body: {
      pageIndex: 0,
      pageSize: 10
    },
    template: template,
    container: document.querySelector('.hostlist'),
    replace: true
  }

  render(buttons, config, pageCallback)
  render(buttons, Object.assign(config, {
    next: false
  }), pageCallback)
}
