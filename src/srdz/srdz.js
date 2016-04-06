import './css/main.css';

import showMenu from 'showMenu';

import './img/srdz_logo.png';
// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);


import fwdetail from './js/fwdetail.js';
import search from './js/search.js';
import list from './js/list.js';
import index from './js/index.js';

if (window.location.pathname.indexOf('fwdetail') !== -1) {
  showMenu();
  fwdetail();
} else if (window.location.pathname.indexOf('detail') !== -1) {
  showMenu();
} else if (window.location.pathname.indexOf('search') !== -1) {
  showMenu();
  search();
} else if (window.location.pathname.indexOf('list') !== -1) {
  list();
} else if (window.location.pathname.indexOf('index') !== -1) {
  index();
}
