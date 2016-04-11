import './css/main.css';

import index from './js/index.js';

import './img/gssslogolqt.png';
import './img/1-banner.png';
import './img/iconfont-chengweitouziren2.png';
import './img/iconfont-gongsi.png';
import './img/hotlqt.png';

const pathname = window.location.pathname;

if (pathname.indexOf('index') !== -1 || pathname === '/m/gsss') {
  index();
}
