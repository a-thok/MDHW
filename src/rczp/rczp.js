import 'font-awesome/css/font-awesome.css'
import './css/main.css'

// 解决click事件的移动端延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import company from './js/company.js'
import search from './js/search.js'
import hotSearch from './js/hotSearch.js'
if (window.location.pathname.indexOf('company') !== -1) {
  company()
} else if (window.location.pathname.indexOf('search-result') !== -1) {
  search()
} else if (window.location.pathname.indexOf('search') !== -1) {
  hotSearch()
}
