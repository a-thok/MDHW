import { $from } from 'func';
export default function overflow(elems) {
  elems = elems.length ? elems : [elems];
  function flows() {
    function flow(elem) {
      if (elem.scrollWidth > elem.clientWidth) {
        elem.classList.add('is-overflow');
      } else {
        elem.classList.remove('is-overflow');
      }
    }
    $from(elems).forEach((elem) => flow(elem));
  }

  flows();
  window.addEventListener('resize', flows);
}
