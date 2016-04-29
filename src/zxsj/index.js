import './css/main.css';

import './img/zxsjlogolqt.png';
import './img/lunbolqt.png';
import './img/fenzutulqt.png';
import './img/carlqt.png';
import './img/morepeoplelqt.png';
import './img/twopeoplelqt.png';
import './img/onepeoplelqt.png';

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
const pathArr = pathname.split('/');
import index from './js/index.js';

if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
}
