import { $ } from 'func';

export default function share(btns) {
  const shareCl = $('.sliderShare').classList;
  const cancelBtn = $('.sliderShare_box_cancel');
  // const docCl = document.documentElement.classList;

  const showShare = function () {
    // docCl.add('is-static');
    shareCl.add('is-show');
  };

  if (btns.length) {
    btns.forEach(btn => btn.addEventListener('click', showShare));
  } else {
    btns.addEventListener('click', showShare);
  }

  cancelBtn.addEventListener('click', () => {
    // docCl.remove('is-static');
    shareCl.remove('is-show');
  });
}
