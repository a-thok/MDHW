import sbjxTemplate from './sbjxTemplate';
import render from 'render';
import { $ } from 'func';

export default function boutique() {
  // 列表页渲染
  const load = document.querySelector('.list_load');
  const config = {
    load,
    template: sbjxTemplate,
    api: '/m/RShop/Search/BoutiqueList',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.choiceList')
  };
  render(config);
}
