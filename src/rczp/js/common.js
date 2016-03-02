export function forEachEl (dom, cb) {
  let els = (typeof dom === 'string') ? document.querySelectorAll(dom) : dom
  Array.prototype.forEach.call(els, cb)
}

export function queryParent (el, selector) {
  if (!el.parentElement) return
  if (selector[0] === '.' && el.parentElement.classList.contains(selector.slice(1))) {
    return el.parentElement
  } else if (selector[0] === '#' && el.parentElement.id === selector.slice(1)) {
    return el.parentElement
  } else if (el.parentElement.nodeName.toLowerCase() === selector) {
    return el.parentElement
  }
  return queryParent(el.parentElement, selector)
}
