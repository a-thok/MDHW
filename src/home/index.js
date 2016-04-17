import './css/main.css';

import login from './js/login.js';
import register from './js/register.js';
import { index, scroll } from './js/index.js';

const pathname = window.location.pathname;
if (pathname.indexOf('denglu') !== -1) {
  login();
} else if (pathname.indexOf('register') !== -1) {
  register();
} else if (pathname.indexOf('index') !== -1 || pathname === '/m/home') {
  scroll();
  index();
}
