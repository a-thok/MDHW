import { $ } from 'func';

export default function gallery() {
  const popupCl = $('.gallery_popup').classList;
  const img = $('.gallery_popup_img');
  const close = $('.gallery_popup .fa-close');

  $('.galleryList').addEventListener('click', (e) => {
    if (e.target.nodeName !== 'IMG') return;
    const src = e.target.src;
    img.src = src;
    popupCl.add('is-show');
  });

  close.addEventListener('click', () => popupCl.remove('is-show'));
}
