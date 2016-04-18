import { $ } from 'func';

export default function showMenu() {
  const menu = document.querySelector('.header_menu');
  if (!menu) return;
  menu.addEventListener('click', () => {
    $('.header_menu_wrap').classList.toggle('is-show');
  });
}
