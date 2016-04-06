import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import assess from './js/assess.js';
if (window.location.pathname.indexOf('assess') !== -1) {
  assess();
}
