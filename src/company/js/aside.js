import { $ } from 'func';
export default function aside() {
  const asideCl = $('.aside').classList;
  const colse = $('.aside_return');
  $('.menuBtn').addEventListener('click', (e) => {
    e.preventDefault();
    asideCl.add('is-show');
  });
  colse.addEventListener('click', () => asideCl.remove('is-show'));
}
