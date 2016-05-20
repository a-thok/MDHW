import './css/main.css';
import './img/rczp_logo.png';

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
import company from './js/company.js';
import search from './js/search.js';
import detail from './js/detail.js';
import index from './js/index.js';

if (pathname.indexOf('company') !== -1) {
  company();
} else if (pathname.indexOf('search') !== -1) {
  search();
} else if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
}
