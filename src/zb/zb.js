import './css/main.css';
import './img/zb_logo.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import { list, listFilter } from './js/list.js';
import detail from './js/detail.js';
import search from './js/search.js';
import index from './js/index.js';
if (window.location.pathname.indexOf('list') !== -1) {
  list();
  listFilter();
} else if (window.location.pathname.indexOf('detail') !== -1) {
  detail();
} else if (window.location.pathname.indexOf('search') !== -1) {
  search();
  listFilter();
} else if (window.location.pathname.indexOf('index') !== -1) {
  index();
}
