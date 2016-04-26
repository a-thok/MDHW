export default function scroll(cb) {
  const windowHeight = window.innerHeight;
  const pageBottom = document.body.getBoundingClientRect().bottom;
  if (pageBottom - windowHeight < 50) cb();
}
