import { $, $from } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';


export default function sub() {
  // 轮播
  slider($('.sliderBox'));
  // 搜索
  goToSearch({
    input: $('.srch_input'),
    partialUrl: `http://${MYJ_HOST}/m/home/list?kw=`
  });

  const subClasses = $from('.grid_item');
  const lists = $from('.myj_list');
  subClasses.forEach((subClass, i) => {
    subClass.addEventListener('click', () => {
      lists.forEach((list, _i) => {
        if (_i === i) {
          list.classList.add('is-active');
        } else {
          list.classList.remove('is-active');
        }
      });
    });
  });
}
