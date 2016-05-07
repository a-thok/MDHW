import './css/main.css';

import './img/lunbolqt.png';
import './img/hot.png';
import './img/index.png';
import './img/psd_found.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// page最小高度为窗口高度
document.querySelector('.page').style.minHeight = `${window.innerHeight}px`;

document.querySelector('.page').style.minHeight = window.innerHeight;

const pathname = window.location.pathname;
const pathArr = pathname.split('/');
import login from './js/login.js';
import register from './js/register.js';
import qqregister from './js/qqregister.js';
import qqbind from './js/qqbind.js';
import forgetpwd from './js/forgetpwd.js';
import forgetchange from './js/forgetchange.js';
import { index, scroll } from './js/index.js';

if (pathname.indexOf('/denglu') !== -1) {
  login();
} else if (pathname.indexOf('/register') !== -1) {
  register();
} else if (pathname.indexOf('qqregister') !== -1) {
  qqregister();
} else if (pathname.indexOf('qqbind') !== -1) {
  qqbind();
} else if (pathname.indexOf('forgetpwd') !== -1) {
  forgetpwd();
} else if (pathname.indexOf('forgetchange') !== -1) {
  forgetchange();
} else if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  scroll();
  index();
}
