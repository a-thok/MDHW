import slider from '../../common/js/slider.js'
import { forEachEl } from '../../common/js/func.js'

export default function detail() {
  slider(document.querySelector('.sliderBox'))

// 福利点击事件
  document.querySelector('.baseInform_item-fuli').addEventListener('click', e => {
    if (e.target.classList.contains('baseInform_item-fuli_color')) return
    if (!e.target.classList.contains('baseInform_item-fuli_color')) {
      forEachEl(e.target.parentElement.children, el => {
        el.classList.remove('baseInform_item-fuli_color')
      })
      e.target.classList.add('baseInform_item-fuli_color')
    }
  })
}
