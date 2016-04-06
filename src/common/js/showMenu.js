import { $ } from 'func';

export default function showMenu() {
  $('.header_menu').addEventListener('click', () => {
    $('.header_menu_wrap').classList.toggle('is-show');
  });
}
