import './css/main.css';

import './img/cysj_xq.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();
// page最小高度为窗口高度
document.querySelector('.page').style.minHeight = `${window.innerHeight}px`;

// 各页面JS
const pathname = window.location.pathname;
const pathArr = pathname.split('/');
import list from './js/list.js';
import detail from './js/detail.js';
import search from './js/search.js';
import index from './js/index.js';

if (pathname.indexOf('list') !== -1) {
  list();
} else if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('search') !== -1) {
  search();
} else if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
}
