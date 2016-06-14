import { $ } from '../../common/js/func.js';


// 生成类型过滤列表
export function typeFilter() {
  const types = window.types;
  const detailContainer = $('.filter_content_list-detail');
  const leibieContainer = $('.filter_content_list-leibie');

  // 填充类型列表

  detailContainer.innerHTML = types.reduce((prev, curr) => (
    `${prev}
            <li class="filter_content_list_item detail_item" data-code="${curr.id}">
              ${curr.name}
            </li>`
  ), '');

  // 选择类型
  detailContainer.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      const text = e.target.textContent.trim();
      const code = e.target.getAttribute('data-code');
      const initial = `<li class="filter_content_list_item leibie_item" data-code="${code}" data-text="${text}">全部</li>`;
      // 填充详细类别列表
      for (let i = 0; i < types.length; i++) {
        // console.log(types[i].id, code);
        if (types[i].id === code) {
          leibieContainer.innerHTML = types[i].item.reduce((prev, curr) => (
            `${prev}<li class="filter_content_list_item leibie_item" data-code="${curr.id}">${curr.name}</li>`
          ), initial);
          break;
        }
      }
    }
  });
}
