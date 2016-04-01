import './css/main.css';
import './img/rczp_logo.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import company from './js/company.js';
import search from './js/search.js';
if (window.location.pathname.indexOf('company') !== -1) {
  company();
} else if (window.location.pathname.indexOf('search-result') !== -1) {
  search();
}

