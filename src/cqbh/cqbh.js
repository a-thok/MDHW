import './css/main.css';

import 'file?name=img/[name].[ext]!./img/cqbh_lb.png';
import 'file?name=img/[name].[ext]!./img/cqbh_fw.png';
import 'file?name=img/[name].[ext]!./img/cqbh_sb1.png';
import 'file?name=img/[name].[ext]!./img/cqbh_sb2.png';
import 'file?name=img/[name].[ext]!./img/cqbh_sb3.png';
import 'file?name=img/[name].[ext]!./img/cqbh_sb4.png';
import 'file?name=img/[name].[ext]!./img/cqbh_sb5.png';
import 'file?name=img/[name].[ext]!./img/pic1_1.png';
import 'file?name=img/[name].[ext]!./img/pic2_2.png';
import 'file?name=img/[name].[ext]!./img/pic5_5.png';
import 'file?name=img/[name].[ext]!./img/pic6_6.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import index from './js/index.js';
const pathname = window.location.pathname;
if (pathname.indexOf('index') !== -1) {
  index();
}
