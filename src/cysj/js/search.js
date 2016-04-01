import { $ } from 'func';
import doSearch from 'doSearch';
import template from './template.js';
export default function search() {
  let load = document.querySelector('.list_load');
  let config = {
    template,
    load,
    api: '/m/DIY/DiyList',
    container: $('.hostlist'),
  };
  doSearch({
    config,
    srchbtn: '.srch_btn'
  });
}
