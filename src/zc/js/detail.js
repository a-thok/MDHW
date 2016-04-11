import { $ } from 'func';

export default function detail() {
  const shareArry = [$('.header_link'), $('.dtImg_btn')];
  const share = $('.sliderShare');
  for (let i = 0, len = shareArry.length; i < len; i++) {
    shareArry[i].addEventListener('click', () => {
      share.style.display = 'block';
    });
  }
  $('.sliderShare_box_cencel').addEventListener('click', () => {
    share.style.display = 'none';
  });
}
