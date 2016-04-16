export default function overflow(elem) {
  const flow = function () {
    if (elem.scrollWidth > elem.clientWidth) {
      elem.classList.add('is-overflow');
    } else {
      elem.classList.remove('is-overflow');
    }
  };
  flow();
  window.addEventListener('resize', flow);
}
