import { $, $parent, $from, $cookie } from 'func'

export default function index(config, data) {
  // 点赞
  $('.zcList').addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-thumbs-o-up')) {
      let item = $parent(e.target, '.zcList_item')
      let id = item.getAttribute('data-id')
      let num = $cookie().num
      if (num && num.split(',').indexOf(id) !== -1) return
      e.target.classList.add('cgColor')
      document.cookie = `num=${num ? $cookie().num : ''},${id}`
    }
  })
  
  // 循环列表中的每个li
  $from('.zcList_item').forEach(function (el) {
    let id = el.getAttribute('data-id')
    if (!$cookie().num) return
    let ids = $cookie().num.split(',')
    let icon = el.querySelector('.fa-thumbs-o-up')
    if (ids.indexOf(id) !== -1) {
      icon.classList.add('cgColor')
    }
  })
}
