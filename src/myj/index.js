import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// page最小高度为窗口高度
document.querySelector('.page').style.minHeight = `${window.innerHeight}px`;

import index from './js/index';

const path = window.location.pathname;
if (path.includes('index')) {
  index();
}
