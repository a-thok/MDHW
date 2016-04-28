import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// 各页面JS
const pathname = window.location.pathname;
// const pathArr = pathname.split('/');
import gallery from './js/gallery.js';

if (pathname.indexOf('gallery') !== -1) {
  gallery();
}
