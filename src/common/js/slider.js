/**
 * slider滑动插件
 **/

/**
 * HTML 模板
    <div class="className">
      <ul class="slider">
        <li><img src=""></li>
        <li><img src=""></li>
        <li><img src=""></li>
        <li><img src=""></li>
        <li><img src=""></li>
      </ul>
      <ul class="dots">
      </ul>
    </div>
 *
 * CSS 样式
    .className {
      position: relative;
      width: 100%;
      height: 100px;
    }
    .className img {
      width: 100%;
      height: 100%;
    }
 *
 * JS 调用
    slider(document.querySelector('.className'), {
      axis: 'y',
      interval: 6000,
      speed: '.7s',
      timingFunction: 'ease-out'
    })
 *
 **/

import { swipe } from './func.js'

export default function slider(element, params) {
  // 参数默认值
  let defaults = {
    axis: 'x',
    interval: 4000,
    speed: '.5s',
    timingFunction: 'ease-in-out'
  }
  
  // 用户参数覆盖默认参数
  if (params) {
    Object.keys(params).forEach((prop) => {
      defaults[prop] = params[prop]
    })
  }
  
  // 是x轴还是y轴滑动
  let isX = defaults.axis === 'x'
  let marginDir = isX ? 'marginLeft' : 'marginTop'
  let clientSize = isX ? 'clientWidth' : 'clientHeight'

  let slider = element.querySelector('.slider')
  // 设置基本样式
  element.style.overflow = 'hidden'
  slider.style.display = 'flex'
  slider.style.transition = `margin ${defaults.speed} ${defaults.timingFunction}`
  slider.style[marginDir] = 0

  // 获得子元素及其个数
  let sliderItems = slider.children
  let count = sliderItems.length
  let span // 根据滑动方向，取得单个子元素的宽度或高度
  
  // 根据子元素个数，用设置相关样式
  let styleByCount = function (x, y) {
    slider.style[x] = count + '00%'
    slider.style[y] = '100%';
    [...sliderItems].forEach((item, index) => {
      item.style[x] = 100 / count + '%'
      item.style[y] = '100%'
      item.style.flexShrink = '0'
    })
  }
  if (isX) {
    styleByCount('width', 'height')
  } else {
    slider.style.flexWrap = 'wrap'
    styleByCount('height', 'width')
  }
  // 计算span
  span = slider[clientSize] / count
  
  // 是否显示圆点
  let dots = element.querySelector('.dots')
  let hasDots = !!dots
  if (hasDots) {
    // 设置样式
    dots.setAttribute('style', 'display:flex;justify-content:space-between;position:absolute;left:50%;bottom:10%;width:80px;margin-left:-40px;')
    // 生成圆点，并插入页面
    let dotsHtml = ''
    for (let i = 0; i < count; i++) {
      let style = 'width:10px;height:10px;border:2px solid #fff;border-radius:50%;opacity:.8;'
      dotsHtml += `<li style="${style}${i === 0 ? 'background:#fff;' : ''}"></li>`
    }
    dots.innerHTML = dotsHtml
  }
  
  // 圆点跟随滑动变化
  let dotsItem = dots.children
  let changeDots = function (pos, change) {
    [...dotsItem].forEach(item => { item.style.background = '' })
    let index = Math.floor(-pos / span) + change
    dotsItem[pos !== undefined ? index : 0].style.background = '#fff'
  }
  
  // 自动滑动
  let autoMove = function () {
    let pos = parseInt(slider.style[marginDir])
    if (-pos >= span * (count - 1)) {
      slider.style[marginDir] = 0
      if (hasDots) changeDots() // 圆点
    } else {
      slider.style[marginDir] = pos - span + 'px'
      if (hasDots) changeDots(pos, +1) // 圆点
    }
  }
  slider.animation = setInterval(autoMove, defaults.interval) // 自动滑动定时器
  
  // 手动滑动
  let move = function (isUpOrLeft) {
    clearInterval(slider.animation) // 清除自动滑动
    let pos = parseInt(slider.style[marginDir])
    if (isUpOrLeft) {
      if (-pos >= span * (count - 1)) return
      slider.style[marginDir] = pos - span + 'px'
      if (hasDots) changeDots(pos, +1) // 圆点
    } else {
      if (-pos < span) return
      slider.style[marginDir] = pos + span + 'px'
      if (hasDots) changeDots(pos, -1) // 圆点
    }
    slider.animation = setInterval(autoMove, defaults.interval) // 恢复自动滑动
  }
  
  // 手动滑动事件绑定
  swipe(slider, (isX ? 'swipeleft' : 'swipeup'), function () {
    move(true)
  })
  swipe(slider, (isX ? 'swiperight' : 'swipedown'), function () {
    move(false)
  })
  
  // 窗口大小改变时，重新计算相关数据
  window.addEventListener('resize', function () {
    clearInterval(slider.animation)
    slider.style[marginDir] = 0
    span = slider[clientSize] / count
    slider.animation = setInterval(autoMove, defaults.interval)
  })
}
