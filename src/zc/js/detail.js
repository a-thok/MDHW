import { $ } from 'func';

export default function detail() {
  const shareArry = [$('.header_link')[1], $('.dtImg_btn')];
  const share = $('.sliderShare');
  const docCl = document.documentElement.classList;
  for (let i = 0, len = shareArry.length; i < len; i++) {
    shareArry[i].addEventListener('click', () => {
      docCl.add('is-static');
      share.style.display = 'block';
    });
  }
  $('.sliderShare_box_cancel').addEventListener('click', () => {
    docCl.remove('is-static');
    share.style.display = 'none';
  });
}
