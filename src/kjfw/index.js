import './css/main.css';

import './img/kjfw_pg1.png';
import './img/kjfw_pg2.png';
// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import assess from './js/assess.js';
import index from './js/index.js';
import company from './js/company.js';

if (window.location.pathname.indexOf('assess') !== -1) {
  assess();
} else if (window.location.pathname.indexOf('index') !== -1) {
  index();
} else if (window.location.pathname.indexOf('company') !== -1) {
  company();
}
