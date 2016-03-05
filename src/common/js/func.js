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

export function style (element, css) {
  Object.keys(css).forEach(prop => {
    element.style[prop] = css[prop]
  })
}

export function swipe (element, type, cb) {
  let isTouchMove, startTx, startTy
  element.addEventListener('touchstart', function (e) {
    let touches = e.touches[0]
    startTx = touches.clientX
    startTy = touches.clientY
    isTouchMove = false
  }, false)
  element.addEventListener('touchmove', function (e) {
    isTouchMove = true
    e.preventDefault()
  }, false)
  element.addEventListener('touchend', function (e) {
    if (!isTouchMove) {
      return
    }
    let touches = e.changedTouches[0]
    let endTx = touches.clientX
    let endTy = touches.clientY
    let distanceX = startTx - endTx
    let distanceY = startTy - endTy
    let isSwipe = false
    if (Math.abs(distanceX) >= Math.abs(distanceY)) {
      if (distanceX > 20) {
        // console.log('fire swipe left event')
        isSwipe = true
        if (type === 'swipeleft') cb()
      } else if (distanceX < -20) {
        // console.log('fire swipe right event')
        isSwipe = true
        if (type === 'swiperight') cb()
      }
    } else {
      if (distanceY > 20) {
        // console.log('fire swipe up event')
        isSwipe = true
        if (type === 'swipeup') cb()
      } else if (distanceY < -20) {
        // console.log('fire swipe down event')
        isSwipe = true
        if (type === 'swipedown') cb()
      }
    }
    if (isSwipe) {
      // console.log('fire swipe event')
      if (type === 'swipe') cb()
    }
  }, false)
}
