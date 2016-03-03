import getArea from '../../common/js/area.js'
import { forEachEl, queryParent } from '../../common/js/func.js'

export default function filter () {
  let filterContents = document.querySelectorAll('.filter_content')
  // 弹出过滤
  forEachEl('.filter_title', (el, index) => {
    el.addEventListener('click', () => {
      filterContents[index].style.display = 'flex'
    })
  })
  // 取消弹出
  forEachEl('.filter_content_btn', (el, index) => {
    el.addEventListener('click', () => {
      filterContents[index].style.display = 'none'
    })
  })
  
  // 更新过滤条件
  forEachEl('.filter_content_list', el => {
    if (el.classList.contains('filter_content_list-province')) return
    el.addEventListener('click', e => {
      if (e.target.classList.contains('filter_content_list_item')) {
        // 填充相应文本
        let text = e.target.textContent.trim()
        let title = queryParent(e.target, '.filter_item').querySelector('.filter_title_text')
        title.textContent = text
        // 隐藏过滤弹出
        forEachEl(filterContents, _el => {
          _el.style.display = 'none'
        })
      }
    })
  })
  
  /* 省市 */
  // 获取省市县数据，绑定事件
  getArea(data => {
    let areaData = data.result
    let provinceContainer = document.querySelector('.filter_content_list-province')
    let cityContainer = document.querySelector('.filter_content_list-city')
    
    // 填充省份列表
    provinceContainer.innerHTML = areaData.reduce((previousValue, currentValue) => {
      if (currentValue.type === 'province') {
        return `${previousValue}<li class="filter_content_list_item province_item" data-code="${currentValue.code}">${currentValue.name}</li>`
      } else {
        return previousValue
      }
    }, '')
    
    // 选择省份
    provinceContainer.addEventListener('click', e => {
      if (e.target.nodeName === 'LI') {
        let code = e.target.getAttribute('data-code')
        // 填充城市列表
        cityContainer.innerHTML = areaData.reduce((previousValue, currentValue) => {
          if (currentValue.type === 'city' && currentValue.code.slice(0, 2) === code.slice(0, 2)) {
            return `${previousValue}<li class="filter_content_list_item city_item" data-code="${currentValue.code}">${currentValue.name}</li>`
          } else {
            return previousValue
          }
        }, '')
      }
    })
  })
}
