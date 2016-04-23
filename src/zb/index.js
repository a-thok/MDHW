import './css/main.css';
import './img/zb_logo.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// 各页面JS
const pathname = window.location.pathname;
import { list, listFilter } from './js/list.js';
import detail from './js/detail.js';
import search from './js/search.js';
import index from './js/index.js';

if (pathname.indexOf('list') !== -1) {
  list();
  listFilter();
} else if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('search') !== -1) {
  search();
  listFilter();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
}
