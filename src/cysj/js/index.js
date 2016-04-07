import { $ } from 'func';
import slider from 'slider';

export default function index() {
  slider(document.querySelector('.sliderBox'));
  function search() {
    const keyword = $('.srch_input').value.trim();
    let url = `http://192.168.2.177:8092/m/diy/search?kw=${keyword}`;
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
}
