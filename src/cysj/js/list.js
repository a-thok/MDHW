import { $, pageCallback } from 'func'
import render from 'render'
import template from './template.js'

// import { showFilter } from 'filter'
// showFilter()

// // 选择过滤
// export function listfil() {
//   [...$('.filter_content_list')].forEach(el => {
//     el.addEventListener('click', e => {
//       if (e.target.classList.contains('filter_content_list_item-color')) return
//       if (e.target.classList.contains('filter_content_list_item')) {
//         [...e.target.parentElement.children].forEach(_e => {
//           _e.classList.remove('filter_content_list_item-color')
//           _e.children[0].classList.remove('item_iconShow')
//         })
//         e.target.classList.add('filter_content_list_item-color')
//         e.target.children[0].classList.add('item_iconShow')
//       }
//     })
//   })
// }

// export function listfil2() {
//   [...$('.filter_content_list_item')].forEach(el => {
//     el.addEventListener('click', e => {
//       let text = e.target.textContent.trim()
//       let parent = $parent(e.target, '.filter_item')
//       parent.querySelector('.filter_active').textContent = text
//       // 隐藏当前过滤器
//       parent.classList.remove('is-show')
//       document.body.classList.remove('is-static') // 恢复body滚动
//     })
//   })
// }

export default function list() {
  render({
    template,
    buttons: $('.pagination_btn'),
    api: '/m/DIY/DiyList',
    replace: true,
    container: $('.hostlist'),
    cb: pageCallback
  })
}
