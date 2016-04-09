import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import showMenu from 'showMenu';
import detail from './js/detail.js';
import category from './js/category.js';
import comment from './js/comment.js';
import progress from './js/progress.js';
import search from './js/search.js';
import index from './js/index.js';

const pathname = window.location.pathname;
if (document.location.pathname.indexOf('detail') !== -1) {
  detail();
  progress();
} else if (document.location.pathname.indexOf('category') !== -1) {
  category();
} else if (document.location.pathname.indexOf('comment') !== -1) {
  comment();
} else if (document.location.pathname.indexOf('progress') !== -1) {
  progress();
  showMenu();
} else if (document.location.pathname.indexOf('search') !== -1) {
  search();
} else if (document.location.pathname.indexOf('index') !== -1 || pathname === '/m/zc') {
  index();
}
