// 解决click事件的移动端延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import filter from './js/filter.js'
filter()
import filterMore from './js/filter-more.js'
filterMore()
