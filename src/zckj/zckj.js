// import 'font-awesome/css/font-awesome.css'
import './css/main.css'

// 解决click事件的移动端延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import index from './js/index.js'
import detail from './js/detail.js'
import list from './js/list.js'
if (document.location.pathname.indexOf('detail') !== -1) {
  detail()
} else if (document.location.pathname.indexOf('index') !== -1) {
  index()
} else if (document.location.pathname.indexOf('list') !== -1) {
  list()
}
