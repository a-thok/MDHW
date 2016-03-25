import { $, pageCallback } from 'func'
import doSearch from 'doSearch'
import template from './template.js'
export default function search() {
  let buttons = $('.pagination_btn')
  let config = {
    api: '/m/ZB/ZbList',
    body: {
      pageIndex: 0,
      pageSize: 10
    },
    replace: true,
    template: template,
    container: document.querySelector('.hostlist')
  }
  
  doSearch({
    button: buttons,
    config,
    srchbtn: '.srch_btn',
    cb: pageCallback
  })
}
