// import 'font-awesome/css/font-awesome.css'
import './css/main.css';

import './img/body.png';
import './img/zckj_logo.png';
import './img/lqt.png';
import './img/iconfont-qiyerenzheng1.png';
import './img/iconfont-qiyerenzheng.png';
// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import index from './js/index.js';
import detail from './js/detail.js';
import list from './js/list.js';
import showMenu from 'showMenu';

const pathname = window.location.pathname;

if (pathname.indexOf('detail') !== -1) {
  detail();
  showMenu();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
  showMenu();
} else if (pathname.indexOf('list') !== -1) {
  list();
  showMenu();
}
