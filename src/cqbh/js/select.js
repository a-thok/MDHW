import { $from, $parent, $ } from 'func';

export function select() {
  $('.filter_content_list').addEventListener('click', e => {
    const cl = e.target.classList;
    if (cl.contains('is-active')) return;
    if ((e.target !== e.currentTarget) || cl.contains('grid_item_icon')) {
      const wrapper = $parent(e.target, '.filter_item');

      // 选中项视觉效果
      const items = cl.contains('grid_item_icon') ? $from('.grid_item_icon') : $from(e.currentTarget.children);
      items.forEach(_e => _e.classList.remove('is-active'));

      let text; // 填充文本
      if (cl.contains('filter_content_list_item')) {
        cl.add('is-active');
        text = e.target.textContent.trim();
      }
      wrapper.querySelector('.filter_active').textContent = text;
      // 隐藏当前过滤器
      wrapper.classList.remove('is-show');
      document.documentElement.classList.remove('is-static'); // 恢复body滚动
    }
  });
}
