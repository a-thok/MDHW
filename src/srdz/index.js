import './css/main.css';

// 导入图片
// import 'file?name=img/[name].[ext]!./img/srdz_logo.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// 各页面JS
const pathname = window.location.pathname;
import detail from './js/detail.js';
import search from './js/search.js';
import list from './js/list.js';
import index from './js/index.js';

if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('search') !== -1) {
  search();
} else if (pathname.indexOf('list') !== -1) {
  list();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  index();
}
