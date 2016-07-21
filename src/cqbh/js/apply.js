import { $from } from 'func';

export default function apply() {
  const navLists = $from('.apply_navList_item');
  navLists.forEach((e) => {
    e.addEventListener('click', (el) => {
      el.target.classList.add('is-active');
    });
  });
}
