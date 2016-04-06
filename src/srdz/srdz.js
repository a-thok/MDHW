import './css/main.css';

import showMenu from 'showMenu';

import './img/srdz_logo.png';
// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);


import detail from './js/detail.js';
import search from './js/search.js';
import list from './js/list.js';
import index from './js/index.js';

const pathname = window.location.pathname;
if (pathname.indexOf('detail') !== -1) {
  showMenu();
  detail();
} else if (pathname.indexOf('search') !== -1) {
  showMenu();
  search();
} else if (pathname.indexOf('list') !== -1) {
  list();
} else if (pathname.indexOf('index') !== -1 || pathname === '/m/srdz') {
  index();
}
