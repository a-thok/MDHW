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
import './img/sbsq_1.png';
import './img/1.png';
import './img/11.png';
import './img/12.png';
import './img/01.png';
import './img/02.png';
import './img/03.png';
import './img/04.png';
import './img/05.png';
import './img/001.png';
import './img/002.png';
import './img/003.png';
import './img/004.png';
import './img/005.png';
import './img/cqbhbanner.png';
import './img/xianggang.jpg';
import './img/France.jpg';
import './img/Korea.jpg';
import './img/Taiwan.jpg';
import './img/Germany.jpg';
import './img/Aomen.jpg';
import './img/banner01.png';
import './img/pic_01.png';
import './img/pic_02.png';
import './img/pic_03.png';
import './img/pic_05.png';


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
import domesticap from './js/domesticap.js';
import copyrightap from './js/copyrightap.js';
import patentap from './js/patentap.js';
import copyright from './js/copyright.js';
import interap from './js/interap.js';
import inter from './js/inter.js';
import domestic from './js/domestic.js';
import customscp from './js/customscp.js';
import customsap from './js/customsap.js';

if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
} else if (pathname.indexOf('domesticap') !== -1) {
  domesticap();
} else if (pathname.indexOf('copyrightap') !== -1) {
  copyrightap();
} else if (pathname.indexOf('patentap') !== -1) {
  patentap();
} else if (pathname.indexOf('copyright') !== -1) {
  copyright();
} else if (pathname.indexOf('interap') !== -1) {
  interap();
} else if (pathname.indexOf('inter') !== -1) {
  inter();
} else if (pathname.indexOf('domestic') !== -1) {
  domestic();
} else if (pathname.indexOf('customscp') !== -1) {
  customscp();
} else if (pathname.indexOf('customsap') !== -1) {
  customsap();
}
