import { $ } from 'func';
import template from './template.js';
import render from 'render';
import doSearch from 'doSearch';

export default function company() {
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/KJ/company/list',
    // api: '/m/KJ/CompanyList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.list')
  };
  render(config);
  doSearch({
    config,
    keywordProp: 'company',
    srchbtn: '.srch_btn'
  });
}

