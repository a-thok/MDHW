import 'font-awesome/css/font-awesome.css'
import './css/main.css'

// 解决click事件的移动端延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import fwdetail from './js/fwdetail.js'
import { search } from './js/search.js'

if (window.location.pathname.indexOf('fwdetail') !== -1) {
  fwdetail()
} else if (window.location.pathname.indexOf('search') !== -1) {
  search()
  // searchResult()
}
