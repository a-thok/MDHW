import './css/main.css';

import './img/body.png';
import './img/zckj_logo.png';
import './img/lqt.png';
import './img/iconfont-qiyerenzheng1.png';
import './img/iconfont-qiyerenzheng.png';
import './img/weibo.png';
import './img/weixin.jpg';

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
import detail from './js/detail.js';
import list from './js/list.js';


if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
} else if (pathname.indexOf('list') !== -1) {
  list();
}
