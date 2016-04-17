import './css/main.css';

import login from './js/login.js';
import register from './js/register.js';
import { index, scroll } from './js/index.js';
import showMenu from 'showMenu';

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
  showMenu();
}
