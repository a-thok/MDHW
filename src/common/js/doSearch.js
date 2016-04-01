import { $ } from 'func';
import render from 'render';

export default function doSearch({ config, srchbtn, url }) {
  Object.assign(config, {
    immediate: true,
    replace: true
  });
  // 热门搜索
  const hot = $('.cate');
  // 设置页面各部分的显示与隐藏
  function setView() {
    const filter = $('.filter');
    if (!hot.classList.contains('is-hidden')) {
      // 隐藏热门搜索项
      hot.classList.add('is-hidden');
      config.load.classList.remove('is-hidden');
      // 显示其它相关元素
      if (filter) {
        filter.classList.remove('is-hidden');
      }
    }
  }

  // 点击热门搜索项，获取文本，作为keyword的值，并搜索
  hot.addEventListener('click', (e) => {
    if (e.target.nodeName === 'LI') { // 临时
      setView();
      const keyword = e.target.textContent.trim();
      config.params = {
        keyword,
        pageIndex: 0,
        pageSize: 10
      };
      render(config);
    }
  });

  // 搜索框搜索
  function searchByBox() {
    const keyword = $('#search').value.trim();
    if (keyword.length === 0) return;
    config.params = {
      keyword,
      pageIndex: 0,
      pageSize: 10
    };
    if (url) config.api = url();
    render(config);
  }

  $('#search').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      setView();
      searchByBox();
    }
  });
  $(srchbtn).addEventListener('click', () => {
    setView();
    searchByBox();
  });
}
