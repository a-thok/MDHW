import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import { list, listFilter } from './js/list.js';
import detail from './js/detail.js';
import search from './js/search.js';
if (window.location.pathname.indexOf('list') !== -1) {
  list();
  listFilter();
} else if (window.location.pathname.indexOf('detail') !== -1) {
  detail();
} else if (window.location.pathname.indexOf('search') !== -1) {
  search();
  listFilter();
}
