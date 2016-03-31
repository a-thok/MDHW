import render from 'render';
import { fixFilter, showFilter, selectFilter } from 'filter';
import template from './template.js';
import { $ } from 'func';

export default function category() {
  // 过滤
  fixFilter();
  showFilter();
  selectFilter();
  // 渲染列表
  let load = document.querySelector('.list_load');
  render({
    template,
    load,
    api: '/m/ZC/ZcList',
    container: $('.zcList')
  });
}
