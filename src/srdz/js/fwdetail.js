import { $ } from '../../common/js/func.js'
//  切换显示
export default function fwdetail() {
  [...$('.intro_list_item')].forEach((el, index) => {
    let ul = $('.userInput')
    el.addEventListener('click', e => {
      alert('1')
      if (e.currentTarget.classList.contains('intro_list_item-color')) return
      [...e.currentTarget.parentElement.children].forEach((_e, _index) => {
        _e.classList.remove('intro_list_item-color')
        ul.children[_index].classList.remove('userInput_show')
      })
      e.currentTarget.classList.add('intro_list_item-color')
      ul.children[index].classList.add('userInput_show')
    })
  })
}
