import './css/main.css';
import './img/banner.png';
import './img/sbcs-logo.png';
import './img/sbcs_1.png';
import './img/sbcs_2.png';
import './img/sbcs_3.png';
import './img/sbcs_4.png';
import './img/sbcs_5.png';
import './img/sbcs_6.png';
import './img/hot_1.png';
import './img/hot_2.png';
import './img/hot_3.png';
import './img/hot_4.png';
import './img/hot_5.png';
import './img/hot_6.png';
import './img/hot_7.png';
import './img/hot_8.png';
import './img/product.png';
import './img/liucheng.png';

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
import index from './js/index.js';
import list from './js/list.js';
import search from './js/search.js';
import fast from './js/fast.js';
import detail from './js/detail.js';

if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
} else if (pathname.indexOf('list') !== -1) {
  list();
} else if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('search') !== -1) {
  search();
} else if (pathname.indexOf('fast') !== -1) {
  fast();
}
