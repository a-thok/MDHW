import './css/main.css';

import login from './js/login.js';
import register from './js/register.js';
import { index, scroll } from './js/index.js';
import showMenu from 'showMenu';
import gsypage from './js/gsypage.js';

import './img/lunbolqt.png';
import './img/hot.png';
import './img/index.png';

const pathname = window.location.pathname;

if (pathname.indexOf('denglu') !== -1) {
  login();
  showMenu();
} else if (pathname.indexOf('register') !== -1) {
  register();
  showMenu();
} else if (pathname.indexOf('index') !== -1 || pathname.split('/').length < 4) {
  scroll();
  index();
} else if (pathname.indexOf('gsypage') !== -1) {
  gsypage();
  // showMenu();
}
