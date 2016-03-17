import 'font-awesome/css/font-awesome.css'
import './css/main.css'

import 'babel-polyfill'

// 解决click事件的移动端延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import index from './js/index.js'
import detail from './js/detail.js'
if (document.location.pathname.indexOf('detail') !== -1) {
  detail()
} else if (document.location.pathname.indexOf('index') !== -1) {
  index()
}
