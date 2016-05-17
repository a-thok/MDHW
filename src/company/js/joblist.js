import { comTemplate } from './template.js';
import render from 'render';
import { $ } from 'func';

export default function joblist() {
  const load = $('.list_load');
  let companyid = location.pathname.replace(/.*\//, '');
  // let companyid = 48;
  let config = {
    load,
    template: comTemplate,
    api: '/m/Com/Info/Recruit',
    params: {
      pageIndex: 1,
      pageSize: 10,
      companyid
    },
    container: $('.gsList')
  };
  render(config);
}
