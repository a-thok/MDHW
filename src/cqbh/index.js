import './css/main.css';

import './img/cqbh_lb.png';
import './img/cqbh_fw.png';
import './img/cqbh_sb1.png';
import './img/cqbh_sb2.png';
import './img/cqbh_sb3.png';
import './img/cqbh_sb4.png';
import './img/cqbh_sb5.png';
import './img/pic1_1.png';
import './img/pic2_2.png';
import './img/pic5_5.png';
import './img/pic6_6.png';

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
