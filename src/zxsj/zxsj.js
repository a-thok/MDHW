import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import index from './js/index.js';
if (window.location.pathname.indexOf('index') !== -1) {
  index();
}

