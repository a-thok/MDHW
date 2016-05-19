import { proTemplate } from './template';
import { $ } from 'func';
import render from 'render';

export default function proList() {
  const load = $('.list_load');
  const companyid = location.pathname.replace(/.*\//, '');
  // let companyid = 48;
  const config = {
    load,
    template: proTemplate,
    api: '/m/Com/Info/ServiceList',
    params: {
      pageIndex: 1,
      pageSize: 10,
      companyid
    },
    container: $('.proList')
  };
  render(config);
}
