import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function index() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: 'http://192.168.2.177:8090/m/zb/search?kw=',
    btn: $('.srch_btn')
  });
  // function search() {
  //   const keyword = $('.srch_input').value.trim();
  //   if (!keyword) return;
  //   let url = `http://192.168.2.177:8090/m/zb/search?kw=${keyword}`;
  //   location.href = url;
  // }
  // $('#search').addEventListener('keyup', e => {
  //   if (e.keyCode === 13) {
  //     search();
  //   }
  // });
  // let btn = $('.srch_btn');
  // btn.addEventListener('click', () => {
  //   search();
  // });
  // const grids = $from('.grid_item');
  // grids.forEach((grid) => {
  //   grid.addEventListener('click', e => {
  //     const type = e.currentTarget.querySelector('.grid_item_text').textContent;
  //     let url = `http://192.168.2.177:8093/m/zb/search?type=${type}`;
  //     location.href = url;
  //   });
  // });
}
