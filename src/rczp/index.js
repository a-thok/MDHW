import './css/main.css';
import './img/rczp_logo.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import company from './js/company.js';
import search from './js/search.js';
import detail from './js/detail.js';
import showMenu from 'showMenu';

if (window.location.pathname.indexOf('company') !== -1) {
  company();
  showMenu();
} else if (window.location.pathname.indexOf('search') !== -1) {
  search();
  showMenu();
} else if (window.location.pathname.indexOf('detail') !== -1) {
  detail();
  showMenu();
}
