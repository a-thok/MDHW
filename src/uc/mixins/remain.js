export default function remain() {
  const windowHeight = window.innerHeight;
  const pageBottom = document.body.getBoundingClientRect().bottom;
  return pageBottom - windowHeight;
}
