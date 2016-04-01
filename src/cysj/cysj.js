import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import { list, listFilter } from './js/list.js';
import detail from './js/detail.js';
import search from './js/search.js';


const pathname = window.location.pathname;

if (pathname.indexOf('list') !== -1) {
  listFilter();
  list();
} else if (pathname.indexOf('detail') !== -1) {
  detail();
} else if (pathname.indexOf('search') !== -1) {
  search();
  listFilter();
}
