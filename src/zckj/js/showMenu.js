import { $ } from '../../common/js/func.js';

export default function showMenu() {
  $('.header_menu').addEventListener('click', () => {
    $('.header_menu_wrap').classList.toggle('is-show');
  });
}
