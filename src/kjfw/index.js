import './css/main.css';

import './img/kjfw_pg1.png';
import './img/kjfw_pg2.png';
// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import assess from './js/assess.js';
import index from './js/index.js';
import company from './js/company.js';
import showMenu from 'showMenu';

const pathname = window.location.pathname;

if (pathname.indexOf('assess') !== -1) {
  assess();
  showMenu();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
  showMenu();
} else if (pathname.indexOf('company') !== -1) {
  company();
  showMenu();
}
