import '../img/rczp_index.png';

import { $, $from } from 'func';
import slider from 'slider';

export default function index() {
  slider($('.sliderBox'));

  const mores = $from('.cate_item_list li:last-child');
  mores.forEach((more) => {
    more.addEventListener('click', (e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement.classList.add('is-expand');
    });
  });
}
