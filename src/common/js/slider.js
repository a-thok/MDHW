/**
 * HTML 模板 (如不需要显示小圆点，第二个ul不写)
 *
 * <div class="className" style="visibility: hidden;">
 *  <ul class="slider">
 *    <li><img src="/img/test.jpg"></li>
 *  </ul>
 *  <ul class="dots">
 *  </ul>
 * </div>
 *
 * JS 调用 (第二个参数可选)
 *
 * slider(document.querySelector('.className'), {
 *  axis: 'y',
 *  interval: 6000,
 *  speed: '.7s',
 *  timingFunction: 'ease-out'
 * })
 *
 */

import { $from, swipe } from 'func'

/**
 * A simple image slider
 * @param {Object} element - the DOM object that contains the slider
 * @param {Object} [config] - additional configuration
 * @param {string} config.axis - sliding direction
 * @param {number} config.interval - time interval of every sliding
 * @param {string} config.speed - animation speed
 * @param {string} config.timingFunction - animation timingFunction
 */
export default function slider(element, config) {
  config = Object.assign({
    axis: 'x',
    interval: 4000,
    speed: '.5s',
    timingFunction: 'ease-in-out'
  }, config)
  
  element.querySelector('img').addEventListener('load', () => {
    // 是沿x轴还是y轴滑动
    let isX = config.axis === 'x'
    let translateDir = isX ? 'translateX' : 'translateY'
    let clientSize = isX ? 'clientWidth' : 'clientHeight'

    // 设置基本样式
    $from('img').forEach(img => { img.style.width = '100%' }) // 图片宽度100%

    let elementStyle = `position:relative;width:100%;height:${element.querySelector('img').clientHeight}px;overflow:hidden`
    element.setAttribute('style', elementStyle)
    
    let slider = element.querySelector('.slider')
    let sliderStyle = `display:flex;transform:${translateDir}(0);transition:transform ${config.speed} ${config.timingFunction}`
    slider.setAttribute('style', sliderStyle)
    if (!isX) slider.style.flexWrap = 'wrap' // 如果是纵向滑动，每个图片应该自占一行

    // 获得子元素及其个数
    let sliderItems = slider.children
    let count = sliderItems.length
    let span // 根据滑动方向，取得单个子元素的宽度或高度

    // 根据子元素个数，用设置相关样式
    slider.style[isX ? 'width' : 'height'] = count + '00%'
    $from(sliderItems).forEach(item => {
      item.style[isX ? 'width' : 'height'] = 100 / count + '%'
      if (isX) item.style.flexShrink = '0' // 如果是横向滑动，图片宽度不收缩
    })
    span = slider[clientSize] / count // 计算span

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

      // 圆点跟随滑动变化
      let dotsItem = dots.children
      var changeDots = function (pos, change) {
        $from(dotsItem).forEach(item => { item.style.background = '' })
        let index = Math.floor(-pos / span) + change
        dotsItem[pos !== undefined ? index : 0].style.background = '#fff'
      }
    }

    // 设置完所有样时候才显示整个滑动元素
    element.style.visibility = 'visible'

    // 自动滑动
    let autoMove = function () {
      let pos = parseInt(slider.style.transform.slice(11))
      if (-pos >= span * (count - 1)) {
        slider.style.transform = `${translateDir}(0)`
        if (hasDots) changeDots() // 圆点
      } else {
        slider.style.transform = `${translateDir}(${pos - span}px)`
        if (hasDots) changeDots(pos, +1) // 圆点
      }
    }
    slider.animation = setInterval(autoMove, config.interval) // 自动滑动定时器

    // 手动滑动
    let move = function (isUpOrLeft) {
      clearInterval(slider.animation) // 清除自动滑动
      let pos = parseInt(slider.style.transform.slice(11))
      if (isUpOrLeft) {
        if (-pos >= span * (count - 1)) return
        slider.style.transform = `${translateDir}(${pos - span}px)`
        if (hasDots) changeDots(pos, +1) // 圆点
      } else {
        if (-pos < span) return
        slider.style.transform = `${translateDir}(${pos + span}px)`
        if (hasDots) changeDots(pos, -1) // 圆点
      }
      slider.animation = setInterval(autoMove, config.interval) // 恢复自动滑动
    }

    // 手动滑动事件绑定
    swipe(slider, (isX ? 'swipeleft' : 'swipeup'), () => move(true))
    swipe(slider, (isX ? 'swiperight' : 'swipedown'), () => move(false))

    // 窗口大小改变时，重新计算相关数据
    window.addEventListener('resize', function () {
      clearInterval(slider.animation)
      slider.style.transform = `${translateDir}(0px)`
      element.style.height = document.querySelector('img').clientHeight + 'px'
      span = slider[clientSize] / count
      slider.animation = setInterval(autoMove, config.interval)
    })
  })
}
