import hideFilter from './hideFilter';
import { fixFilter, showFilter, selectFilter, generateAreaFilter, moreFilter } from 'filter';
import { $ } from 'func';
import zwTemplate from './zwTemplate';
import gsTemplate from './gsTemplate';
import doSearch from 'doSearch';
import render from 'render';

export default function search() {
  // 搜索类型选择
  const select = $('.header_srch_select');
  $('.header_srch_label').addEventListener('click', (e) => {
    e.stopPropagation();
    // 切换显示
    select.classList.toggle('is-show');
    // 切换选择项
    if (e.target.classList.contains('header_srch_select_item')) {
      const searchText = e.currentTarget.querySelector('.header_srch_label_text');
      const text = e.target.textContent.trim();
      searchText.textContent = text;
      searchText.setAttribute('data-type', searchText.textContent === '职位' ? 1 : 2);
    }
  });
  // 隐藏搜索类型选择
  document.body.addEventListener('click', () => {
    select.classList.remove('is-show');
  });

  const load = document.querySelector('.list_load');
  const config = {
    load,
    template: zwTemplate,
    api: '/m/HR/Job/list',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    replace: true,
    container: document.querySelector('.list')
  };

  doSearch({
    config,
    keywordProp: 'zwmc',
    srchbtn: '.header_srch_btn',
    url: (config, keyword) => {
      const searchText = document.querySelector('.header_srch_label_text');
      const type = searchText.getAttributeNode('data-type').value;
      if (+type === 1) {
        config.template = zwTemplate;
        config.api = '/m/HR/Job/list';
        config.params.compay = '';
        config.params.zwmc = keyword;
      } else {
        config.template = gsTemplate;
        config.api = '/m/HR/Company/list';
        config.params.zwmc = '';
        config.params.compay = keyword;
      }
    }
  });

  // 过滤
  fixFilter();
  showFilter();
  hideFilter();
  selectFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });
  moreFilter((filter, type) => {
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
  }, () => {
    config.params.gzjy = '';
    config.params.xlyq = '';
    config.params.gsgm = '';
    config.params.sort = '';
    config.params.pageIndex = 0;
    config.immediate = true;
    render(config);
  });
  // 更多选择
  $('.filter_content_btn-post').addEventListener('click', () => {
    render(config);
  });
  generateAreaFilter();
}
