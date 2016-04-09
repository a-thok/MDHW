import { $ } from 'func';
import slider from 'slider';
import goToSearch from 'goToSearch';

export default function idnex() {
  slider($('.sliderBox'));
  goToSearch({
    input: $('.srch_input'),
    partialUrl: 'http://192.168.2.177:8087/m/kj/company?kw=',
    btn: $('.srch_btn')
  });
  // function search() {
  //   const keyword = $('.srch_input').value.trim();
  //   if (!keyword) return;
  //   let url = `http://192.168.2.177:8093/m/kjfw/company?kw=${keyword}`;
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
}
