import './css/main.css';

import login from './js/login.js';

const pathname = window.location.pathname;
if (pathname.indexOf('login') !== -1) {
  login();
} else if (pathname.indexOf('register') !== -1) {
  console.log(1);
}
