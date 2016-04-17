import './css/main.css';
import './img/zb_logo.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import { list, listFilter } from './js/list.js';
import detail from './js/detail.js';
import search from './js/search.js';
import index from './js/index.js';
import showMenu from 'showMenu';

const pathname = window.location.pathname;
if (pathname.indexOf('list') !== -1) {
  list();
  listFilter();
  showMenu();
} else if (pathname.indexOf('detail') !== -1) {
  detail();
  showMenu();
} else if (pathname.indexOf('search') !== -1) {
  search();
  listFilter();
  showMenu();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
  showMenu();
}
