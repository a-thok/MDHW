import { $, pageCallback } from 'func'
import doSearch from 'doSearch'
import template from './template.js'
export default function search() {
  let config = {
    template,
    buttons: $('.pagination_btn'),
    api: '/m/DIY/DiyList',
    container: document.querySelector('.hostlist'),
    cb: pageCallback
  }
  
  doSearch({
    config,
    srchbtn: '.srch_btn'
  })
}
