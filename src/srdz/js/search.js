import { $ } from 'func'
// import render from 'render'

// 搜索切换
export function search() {
  [...$('.srchBtn_list_item')].forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('srchBtn_list_item-bgColor')) return
      [...e.target.parentElement.children].forEach((_e, _index) => {
        _e.classList.remove('srchBtn_list_item-bgColor')
      })
      e.target.classList.add('srchBtn_list_item-bgColor')
    })
  })
}
// 搜索
// export function searchResult() {
//   let button = document.querySelector('.srch_btn')
//   let keyword = $('#search').value.trim()
//   let config = {
//     api: '',
//     body: {
//       pageIndex: 0,
//       pageSize: 10,
//       keyword: keyword
//     },
//     immediate: true
//   }
//   if (keyword.length === 0) return
//   Object.assign(config, {
//     body: {
//       pageIndex: 0,
//       pageSize: 10,
//       keyword: keyword
//     },
//     immediate: true
//   })
//   render(button, config)
// }
// $('#search').addEventListener('keyup', e => {
//   console.log(1)
//   if (e.keyCode === 13) searchResult()
// })
// $('.srch_btn').addEventListener('click', () => searchResult())

