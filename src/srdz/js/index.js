import { $ } from 'func';
import slider from 'slider';

export default function index() {
  slider(document.querySelector('.sliderBox'));
  function search() {
    const keyword = $('.srch_input').value;
    let url = `http://192.168.2.177:8093/m/srdz/search?kw=${keyword}`;
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
  // const grids = $from('.grid_item');
  // grids.forEach((grid) => {
  //   grid.addEventListener('click', e => {
  //     const type = e.currentTarget.querySelector('.grid_item_text').textCoent;
  //     let url = `http://192.168.2.177:8093/m/srdz/search?type=${type}`;
  //     location.href = url;
  //   });
  // });
}
