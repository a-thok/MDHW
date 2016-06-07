import './css/main.css';

import './img/01.png';
import './img/02.png';
import './img/03.png';
import './img/04.png';
import './img/05.png';
import './img/06.png';
import './img/001.png';
import './img/002.png';
import './img/003.png';
import './img/004.png';
import './img/005.png';
import './img/006.png';
import './img/007.png';


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
import list from './js/list.js';

if (pathname.indexOf('list') !== -1) {
  list();
} else if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
}
