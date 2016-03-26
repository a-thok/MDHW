import { $ } from 'func';
import template from './template.js';
import doSearch from 'doSearch';

export default function search() {
  let config = {
    template,
    buttons: $('.list_more'),
    api: '/m/ZC/ZcList',
    container: $('.zcList')
  };

  doSearch({
    config,
    srchbtn: '.srch_btn'
  });
}
