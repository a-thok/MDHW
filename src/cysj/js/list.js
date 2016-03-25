import { $, pageCallback } from 'func'
import render from 'render'
import template from './template.js'

import { showFilter, selectFilter } from 'filter'
showFilter()
selectFilter()
// 图标没显示

export default function list() {
  render({
    template,
    buttons: $('.pagination_btn'),
    api: '/m/DIY/DiyList',
    replace: true,
    container: $('.hostlist'),
    cb: pageCallback
  })
}
