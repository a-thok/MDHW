import './css/main.css';

import './img/gssslogolqt.png';
import './img/1-banner.png';
import './img/iconfont-chengweitouziren2.png';
import './img/iconfont-gongsi.png';
import './img/hotlqt.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// 各页面JS
const pathname = window.location.pathname;
const pathArr = pathname.split('/');
import index from './js/index.js';

if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
}
