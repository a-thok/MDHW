import render from 'render'
// import { hideFilter, showFilter, selectFilter } from 'filter'
import { pageCallback } from 'func'
import template from './template.js'

export default function list() {
  // 过滤
  // showFilter()
  // hideFilter()
  // selectFilter()

  render({
    template,
    buttons: document.querySelectorAll('.pagination_btn'),
    api: '/m/ZB/ZbList',
    container: document.querySelector('.hostlist'),
    replace: true,
    cb: pageCallback
  })
}
