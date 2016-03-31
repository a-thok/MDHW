import doSearch from 'doSearch';
import template from './template.js';
export default function search() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/ZB/ZbList',
    container: document.querySelector('.hostlist'),
  };

  doSearch({
    config,
    srchbtn: '.srch_btn'
  });
}
