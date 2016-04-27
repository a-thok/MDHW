import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import index from './js/index.js';
import contact from './js/contact.js';

const pathname = window.location.pathname;

if (pathname.indexOf('index') !== -1) {
  index();
} else if (pathname.indexOf('contact') !== -1) {
  contact();
}

