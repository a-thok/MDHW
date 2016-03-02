import 'font-awesome/css/font-awesome.css';
import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

import filter from './js/filter.js';
filter();