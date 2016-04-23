import './css/main.css';

import './img/kjfw_pg1.png';
import './img/kjfw_pg2.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// 各页面JS
const pathname = window.location.pathname;
import assess from './js/assess.js';
import index from './js/index.js';
import company from './js/company.js';

if (pathname.indexOf('assess') !== -1) {
  assess();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
} else if (pathname.indexOf('company') !== -1) {
  company();
}
