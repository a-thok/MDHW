import { showFilter } from 'filter';
import template from './template';
import render from 'render';
import { $ } from 'func';
import { selectMore } from './selectMore.js';

export default function search() {
  const inputValue = $('.header_search_input');
  const clearText = $('.header_search_clear');
  // 显示清空按钮
  inputValue.addEventListener('input', () => {
    clearText.classList.add('is-show');
    // 隐藏清空按钮
    if (inputValue.value === '') {
      clearText.classList.remove('is-show');
    }
  });
  // 清空搜索框的内容
  clearText.addEventListener('click', () => {
    inputValue.value = '';
    // 隐藏清空按钮
    if (inputValue.value === '') {
      clearText.classList.remove('is-show');
    }
  });
  // 渲染
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/rshop/Search/SearchList',
    params: {
      pageIndex: 0,
      pageSize: 10
    },
    container: $('.shangbiao-list')
  };
  render(config);
  // 过滤
  showFilter();
  // 多个条件选择过滤
  selectMore(config);
  // 设置页面各部分的显示与隐藏
  function setView() {
    const filter = $('.filter');
    config.load.classList.remove('is-hidden');
    // 显示其它相关元素
    if (filter) {
      filter.classList.remove('is-hidden');
    }
  }
  // 搜索框搜索
  function searchByBox() {
    const keyword = $('#search').value.trim();
    // if (keyword.length === 0) return; // 应该允许用户搜索空关键字
    config.params = {
      keyword,
      pageIndex: 0,
      pageSize: 10
    };
    render(config);
  }

  $('#search').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      setView();
      searchByBox();
    }
  });
  $('.header_search_btn').addEventListener('click', () => {
    setView();
    searchByBox();
  });
  // 获取keyword的值
  const s = location.search;
  if (/(^\?|&)kw\=/.test(s)) {
    const c = Object.assign({}, config);
    const value = s.replace(/(?:^\?|&)kw\=([^&]*)(&.*|$)/, (str, $1) => $1);
    c.params.title = value;
    c.immediate = false;
    render(c);
  }
}
