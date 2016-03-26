export function $(selector) {
  const els = document.querySelectorAll(selector);
  if (els.length === 1) return els[0];
  return els;
}

export function $parent(el, selector) {
  if (!el.parentElement) return;
  if (selector[0] === '.' && el.parentElement.classList.contains(selector.slice(1))) {
    return el.parentElement;
  } else if (selector[0] === '#' && el.parentElement.id === selector.slice(1)) {
    return el.parentElement;
  } else if (el.parentElement.nodeName.toLowerCase() === selector) {
    return el.parentElement;
  }
  return $parent(el.parentElement, selector);
}

export function $from(selector) {
  const els = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector;
  if (!els.length) return [els];
  return Array.prototype.slice.call(els);
}

export function $style(element, css) {
  Object.keys(css).forEach(prop => {
    element.style[prop] = css[prop];
  });
}

export function swipe(element, type, cb) {
  let isTouchMove;
  let startTx;
  let startTy;
  element.addEventListener('touchstart', (e) => {
    const touches = e.touches[0];
    startTx = touches.clientX;
    startTy = touches.clientY;
    isTouchMove = false;
  }, false);
  element.addEventListener('touchmove', (e) => {
    isTouchMove = true;
    e.preventDefault();
  }, false);
  element.addEventListener('touchend', (e) => {
    if (!isTouchMove) {
      return;
    }
    const touches = e.changedTouches[0];
    const endTx = touches.clientX;
    const endTy = touches.clientY;
    const distanceX = startTx - endTx;
    const distanceY = startTy - endTy;
    let isSwipe = false;
    if (Math.abs(distanceX) >= Math.abs(distanceY)) {
      if (distanceX > 20) {
        // console.log('fire swipe left event')
        isSwipe = true;
        if (type === 'swipeleft') cb();
      } else if (distanceX < -20) {
        // console.log('fire swipe right event')
        isSwipe = true;
        if (type === 'swiperight') cb();
      }
    } else {
      if (distanceY > 20) {
        // console.log('fire swipe up event')
        isSwipe = true;
        if (type === 'swipeup') cb();
      } else if (distanceY < -20) {
        // console.log('fire swipe down event')
        isSwipe = true;
        if (type === 'swipedown') cb();
      }
    }
    if (isSwipe) {
      // console.log('fire swipe event')
      if (type === 'swipe') cb();
    }
  }, false);
}

// 操作cookie
export function $cookie() {
  const arrCookie = document.cookie.split('; ');
  const cookieObj = {};
  arrCookie.forEach(item => {
    const arrItem = item.split('=');
    cookieObj[arrItem[0]] = arrItem[1];
  });
  return cookieObj;
}

// 翻页回调
export function pageCallback(body, data) {
  const page = document.querySelector('.pagination_current');
  const pageNum = document.querySelector('.pagination_total');
  page.textContent = body.pageIndex;
  pageNum.textContent = Math.ceil(data.result.total / body.pageSize);
}
