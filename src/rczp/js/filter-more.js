import { forEachEl } from './common.js'

export default function filterMore () {
  // 更多过滤
  document.querySelector('.filter_content_more_main').addEventListener('click', e => {
    if (e.target.classList.contains('tagList_item-active')) return
    if (e.target.classList.contains('tagList_item')) {
      forEachEl(e.target.parentElement.children, el => {
        el.classList.remove('tagList_item-active')
      })
      e.target.classList.add('tagList_item-active')
    }
  })
  // 重置更多过滤
  document.querySelector('.filter_content_textbtn').addEventListener('click', () => {
    forEachEl('.tagList-filter', el => {
      forEachEl(el.children, (_el, _index) => {
        if (_index === 0) {
          _el.classList.add('tagList_item-active')
        } else {
          _el.classList.remove('tagList_item-active')
        }
      })
    })
  })
}
