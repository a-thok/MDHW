function slider () {
  // 找到slider列表
  let sliderList = document.querySelector('.slider_list')
  // 设置它的margin-left初始值为0\
  sliderList.style.marginLeft = 0
  // 活得slider列表下的子元素，并计算其个数
  let sliderItems = sliderList.children
  let count = sliderItems.length
  
  // 根据子元素个数，计算列表宽度，和各个子元素宽度（百分比形式）
  sliderList.style.width = count + '00%';
  [...sliderItems].forEach(item => {
    item.style.width = 100 / count + '%'
  })
  
  // 计算单个子元素的实际宽度（像素形式）
  let width = sliderList.clientWidth / count
  
  // 计时器
  setInterval(function () {
    // 获取slider列表当前的margin-left
    var pos = parseInt(sliderList.style.marginLeft)
    // 如果margin-left的正值大于或等于count-1个子元素的宽度之和，说明滑动到最后一张了
    // margin-left重置为0
    if (-pos >= width * (count - 1)) {
      sliderList.style.marginLeft = 0
    } else {
      // 否则margin-left继续减去1个资源的宽度，即活动到下一张
      sliderList.style.marginLeft = pos - width + 'px'
    }
  }, 3000)
}

export default slider
