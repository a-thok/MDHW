import { showFilter } from 'filter';
import template from './template';
import render from 'render';
import { $, $from, $parent } from 'func';

export default function list() {
  // 列表页渲染
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
  $from('.filter_content_list').forEach(el => {
    el.addEventListener('click', e => {
      const cl = e.target.classList;
      if (cl.contains('is-active')) return;
      if ((e.target !== e.currentTarget) || cl.contains('grid_item_icon')) {
        const wrapper = $parent(e.target, '.filter_item');

        // 选中项视觉效果
        const items = cl.contains('grid_item_icon') ? $from('.grid_item_icon') : $from(e.currentTarget.children);
        items.forEach(_e => _e.classList.remove('is-active'));

        let type; // 过滤值
        let typeBig; // 过滤值
        let text; // 填充文本
        const filter = e.currentTarget.getAttribute('data-filter');
        const filterBig = e.currentTarget.getAttribute('data-filterBig');
        if (cl.contains('filter_content_list_item_more')) {
          cl.add('is-active');
          type = e.target.getAttribute('data-code');
          typeBig = e.target.getAttribute('data-codeBig');
          text = e.target.textContent.trim();
          config.params.pageIndex = 0;
          config.params[filter] = type;
          config.params[filterBig] = typeBig;
          config.immediate = true;
          render(config);
        } else {
          cl.add('is-active');
          type = e.target.getAttribute('data-code');
          text = e.target.textContent.trim();
          config.params.pageIndex = 0;
          config.params[filter] = type;
          config.immediate = true;
          render(config);
        }
        wrapper.querySelector('.filter_active').textContent = text;
        // 隐藏当前过滤器
        wrapper.classList.remove('is-show');
        document.documentElement.classList.remove('is-static'); // 恢复body滚动
      }
    });
  });
}
