import './css/main.css';

import './img/company_about.png';
import './img/company_slider.png';
import './img/company_case.png';
import './img/company_news.png';
import './img/company_contact.png';
import './img/company_kjdb.png';
import './img/company_zbzc.png';
import './img/company_cyzx.png';
import './img/company_zlcy.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// page最小高度为窗口高度
document.querySelector('.page').style.minHeight = `${window.innerHeight}px`;

const pathname = window.location.pathname;
import index from './js/index.js';
import contact from './js/contact.js';
import proDetail from './js/proDetail.js';
import newsDetail from './js/newsDetail.js';
import newsList from './js/newsList.js';
import caseList from './js/caseList.js';
import proList from './js/proList.js';
import joblist from './js/joblist.js';

if (pathname.indexOf('index') !== -1) {
  index();
} else if (pathname.indexOf('contact') !== -1) {
  contact();
} else if (pathname.indexOf('prodetail') !== -1) {
  proDetail();
} else if (pathname.indexOf('newsdetail') !== -1) {
  newsDetail();
} else if (pathname.indexOf('newsList') !== -1) {
  newsList();
} else if (pathname.indexOf('caseList') !== -1) {
  caseList();
} else if (pathname.indexOf('proList') !== -1) {
  proList();
} else if (pathname.indexOf('joblist') !== -1) {
  joblist();
}

