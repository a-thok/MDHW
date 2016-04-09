import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import './img/zxsjlogolqt.png';
import './img/lunbolqt.png';
import './img/fenzutulqt.png';
import './img/carlqt.png';
import './img/morepeoplelqt.png';
import './img/twopeoplelqt.png';
import './img/onepeoplelqt.png';

import index from './js/index.js';
if (window.location.pathname.indexOf('index') !== -1) {
  index();
}

