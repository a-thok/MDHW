import { newsTemplate } from './template.js';
import render from 'render';
import { $ } from 'func';

export default function () {
  const load = $('.list_load');
  let companyid = location.pathname.replace(/.*\//, '');
  // let companyid = 48;
  let config = {
    load,
    template: newsTemplate,
    api: '/m/Com/Info/NewsList',
    params: {
      pageIndex: 1,
      pageSize: 10,
      companyid
    },
    container: $('.newCList')
  };
  render(config);
}
