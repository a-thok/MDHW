import { $, $from } from 'func';
import slider from 'slider';

export default function detail() {
  slider(document.querySelector('.sliderBox'));
  function search() {
    const keyword = $('.srch_input').value;
    let url = `http://www.baidu.com?kw=${keyword}`;
    location.href = url;
  }
  $('#search').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      search();
    }
  });
  let btn = $('.srch_btn');
  btn.addEventListener('click', () => {
    search();
  });
  const grids = $from('.grid_item');
  grids.forEach((grid) => {
    grid.addEventListener('click', e => {
      const text = e.currentTarget.querySelector('.grid_item_text').textContent;
      let url = `http://www.baidu.com?text=${text}`;
      location.href = url;
    });
  });
}
